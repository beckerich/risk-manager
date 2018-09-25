import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import withStyles from './styles';

import Label from './labels'

class Calculator extends BaseComponent {
	state = {

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
				key: 'targetPrice'
			}
		];

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
                        <Label name="Risk Return Ratio" value="1R" />
                        <Label name="Position Size" value="1R" />
                        <Label name="Target Percent Change" value="1R" />
                        <Label name="Loss Percent Change" value="1R" />
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
			/>
		);
	}
}

export default withStyles(Calculator);
