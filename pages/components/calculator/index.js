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
				<TextField
					align="left"
					label="Position Size"
					fullWidth={true}
					className={classes.textField}
					value={this.state.positionSize}
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>
					}}
				/>
				<TextField
					align="left"
					label="Risk Amount"
					InputProps={{
						startAdornment: <InputAdornment position="start">%</InputAdornment>
					}}
					className={classes.textField}
					value={this.state.riskAmount}
					fullWidth={true}
				/>
				<TextField
					align="left"
					label="Entry Price"
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>
					}}
					className={classes.textField}
					value={this.state.entryPrice}
					fullWidth={true}
				/>
				<TextField
					align="left"
					label="Target Price"
					InputProps={{
						startAdornment: <InputAdornment position="start">$</InputAdornment>
					}}
					className={classes.textField}
					value={this.state.targetPrice}
					fullWidth={true}
				>
					<TextField
						align="left"
						label="Stop price"
						InputProps={{
							startAdornment: <InputAdornment position="start">$</InputAdornment>
						}}
						className={classes.textField}
						value={this.state.stopPrice}
						fullWidth={true}
					/>
				</TextField>
			</div>
		);
	}
}

export default withStyles(Calculator);
