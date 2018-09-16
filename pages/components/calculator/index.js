import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import withStyles from './styles';

class Calculator extends BaseComponent {
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
					Risk Manager
				</Typography>
				{entries.map(this.renderTextfield.bind(this))}
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
