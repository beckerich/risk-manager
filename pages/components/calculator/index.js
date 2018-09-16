import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import withStyles from './styles';

class Calculator extends BaseComponent {
	render() {
		const classes = this.props.classes;

		return (
			<div className={classes.root}>
				<Typography align="center" variant="title">
					Risk Manager
				</Typography>
				<TextField className={classes.textField}
					align="left"
					label="Account Balance"
					fullWidth={true}
					className={classes.textField}
					value={this.state.accountBalance}
					InputProps={{
						startAdornment: <InputAdornment position="start" className={classes.inputAdornment}>$</InputAdornment>,
						disableUnderline: true

					}}
				/>
				<TextField className={classes.textField}
					align="left"
					label="Risk Amount"
					InputProps={{
						startAdornment: <InputAdornment position="start" className={classes.inputAdornment}>%</InputAdornment>,
						disableUnderline: true

					}}
					className={classes.textField}
					value={this.state.riskAmount}
					fullWidth={true}
				/>
				<TextField className={classes.textField}
					align="left"
					label="Entry Price"
					InputProps={{
						startAdornment: <InputAdornment position="start" className={classes.inputAdornment}>$</InputAdornment>,
						disableUnderline: true

					}}
					className={classes.textField}
					value={this.state.entryPrice}
					fullWidth={true}
				/>
				<TextField className={classes.textField}
					align="left"
					label="Target Price"
					InputProps={{
						startAdornment: <InputAdornment position="start" className={classes.inputAdornment}>$</InputAdornment>,
						disableUnderline: true

					}}
					className={classes.textField}
					value={this.state.targetPrice}
					fullWidth={true}
				>
					<TextField className={classes.textField}
						align="left"
						label="Stop price"
						InputProps={{
							startAdornment: <InputAdornment position="start" className={classes.inputAdornment}>$</InputAdornment>,
							disableUnderline: true
						}}
						className={classes.textField}
						value={this.state.stopPrice}
						fullWidth={true}
					/>
				</TextField>
				<TextField className={classes.textField}
					align="left"
					label="Stop Price"
					fullWidth={true}
					className={classes.textField}
					value={this.state.stopPrice}
					InputProps={{
						startAdornment: <InputAdornment position="start" className={classes.inputAdornment}>$</InputAdornment>,
						disableUnderline: true

					}}
				/>
			</div>
		);
	}
}

export default withStyles(Calculator);
