import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import Trader from '../../lib/trader';

import withStyles from './styles';

import Label from './label';

class Calculator extends BaseComponent {
	state = {
		accountBalance: 100,
		riskAmount: 3,
		entryPrice: 10,
		targetPrice: 12,
		stopPrice: 9
	};

	render() {
		const classes = this.props.classes;

		const entries = [
			{
				name: 'Account Balance',
				adornment: '$',
				key: 'accountBalance'
			},
			{
				name: 'Risk Amount',
				adornment: '%',
				key: 'riskAmount'
			},
			{
				name: 'Entry Price',
				adornment: '$',
				key: 'entryPrice'
			},
			{
				name: 'Target Price',
				adornment: '$',
				key: 'targetPrice'
			},
			{
				name: 'Stop Price',
				adornment: '$',
				key: 'stopPrice'
			}
		];

		const position = Trader.createPosition('long', {
			balance: this.state.accountBalance,
			price: this.state.entryPrice,
			stop: this.state.stopPrice,
			target: this.state.targetPrice,
			risk: this.state.riskAmount
		});

		return (
			<div className={classes.root}>
				<Typography align="center" className={classes.title}>
					Risk Management Calculator
				</Typography>

				<Grid container spacing={24}>
					<Grid item xs={12} sm={6}>
						{entries.map(this.renderTextfield.bind(this))}
					</Grid>
					<Grid item xs={12} sm={6}>
						<Grid container spacing={16} style={{ marginTop: '0px' }}>
							<Grid item xs={12}>
								<Label name="Risk Return Ratio" value={`${position.rValue.toFixed(0)}R`} />
							</Grid>
							<Grid item xs={12}>
								<Label name="Position Size" value={`${position.amount.toFixed(2)} units`} />
							</Grid>
							<Grid item xs={12}>
								<Label
									name="Target Percent Change"
									value={`${position.percentGain.times(100).toFixed(2)}%`}
								/>
							</Grid>
							<Grid item xs={12}>
								<Label
									name="Loss Percent Change"
									value={`${position.percentLoss.times(100).toFixed(2)}%`}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}

	renderTextfield(entry, index) {
		const classes = this.props.classes;

		return (
			<TextField
				key={index}
				className={classes.textField}
				align="left"
				label={entry.name}
				fullWidth={true}
				type="number"
				className={classes.textField}
				value={this.state[entry.key]}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start" className={classes.inputAdornment}>
							{entry.adornment}
						</InputAdornment>
					),
					disableUnderline: true
				}}
				onChange={this.onChangeTextField.bind(this, entry.key)}
			/>
		);
	}
	onChangeTextField(key, evt) {
		evt.preventDefault();
		evt.stopPropagation();

		let value = evt.target.value; // Value in the textfield
		[value] >= 0 ? this.setState({ [key]: value }) : this.setState({ [key]: 0 });
	}
}

export default withStyles(Calculator);
