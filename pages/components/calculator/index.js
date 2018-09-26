import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import bigNumber from 'bignumber.js';

import withStyles from './styles';

import Label from './labels';

class Calculator extends BaseComponent {
	state = {
		accountBalance: 100,
		riskAmount: 3,
		entryPrice: 10,
		targetPrice: 20,
		stopPrice: 5
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

		const entryPrice = bigNumber(this.state.entryPrice);
		const stopPrice = bigNumber(this.state.stopPrice);
		const exitPrice = bigNumber(this.state.targetPrice);
		const balance = bigNumber(this.state.accountBalance);
		let risk = bigNumber(this.state.riskAmount).dividedBy(100);
		const entryStopPercentDiff = entryPrice
			.minus(stopPrice)
			.abs()
			.dividedBy(entryPrice.plus(stopPrice).dividedBy(2));
		const baseCost = balance.times(risk).dividedBy(entryStopPercentDiff);
		const amount = baseCost.dividedBy(entryPrice);

		console.log({ baseCost, amount, entryStopPercentDiff });

		const gain = amount.times(exitPrice.minus(entryPrice)).abs();
		const loss = amount.times(stopPrice.minus(entryPrice)).abs();
		const exitBalance = balance.plus(gain);
		const stopBalance = balance.minus(loss);
		const balanceGainPercentDiff = balance
			.minus(exitBalance)
			.abs()
			.dividedBy(balance.plus(exitBalance).dividedBy(2));
		const balanceLossPercentDiff = balance
			.minus(stopBalance)
			.abs()
			.dividedBy(balance.plus(stopBalance).dividedBy(2));
		const riskReturn = entryPrice
			.minus(exitPrice)
			.abs()
			.dividedBy(entryPrice.minus(stopPrice).abs());

		return (
			<div className={classes.root}>
				<Typography align="center" variant="title">
					Position Size Calculator
				</Typography>

				<Grid container spacing={24}>
					<Grid item xs={12} sm={6}>
						{entries.map(this.renderTextfield.bind(this))}
					</Grid>
					<Grid item xs={12} sm={6}>
						<Label name="Risk Return Ratio" value={riskReturn.toFixed(2)} />
						<Label name="Position Size" value={amount.toFixed()} />
						<Label name="Target Percent Change" value={balanceGainPercentDiff.toFixed(2)} />
						<Label name="Loss Percent Change" value={balanceLossPercentDiff.toFixed(2)} />
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
