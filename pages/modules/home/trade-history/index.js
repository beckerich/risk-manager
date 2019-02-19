import BaseComponent from '../../../lib/BaseComponent';
import BigNumber from 'bignumber.js';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import withStyles from './styles';

// u9BvmgTLNevoGLr676TuBcYo
// 6lJfH2Dl13UY16pG8MlhatSZZv92yTbMdQWJZOEcG0yGLBpt

class TradeHistory extends BaseComponent {
	state = {
		apiKey: '',
		apiSecret: ''
	};

	render() {
		const classes = this.props.classes;

		return (
			<div className={classes.root}>
				<Typography align="center" className={classes.title}>
					Trade History
				</Typography>
				<Typography align="center" className={classes.subtitle}>
					There is a relationship between the the amount of winning trades and the risk return ratio
					required in order to remain profitable. What does this mean for you as a trader? You
					can loose more trades than win yet still make money! See below:
				</Typography>
				<img src="/static/chart.png" className={classes.chart} />
				<Typography align="center" className={classes.subtitle}>
					By inputing your bitmex api keys (read only) it is possible to calculate your historical
					win rate from your trade history. This will enable recommendations for a risk return ratio
					that matches your personal trading style.
				</Typography>
				{this.renderForm()}
			</div>
		);
	}

	renderForm() {
		if (this.state.authenticated) {
			return;
		}

		const classes = this.props.classes;

		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className={classes.formWrapper}>
					<TextField
						className={classes.textField}
						label="API Key"
						fullWidth={true}
						className={classes.textField}
						value={this.state.apiKey}
						onChange={this.handleChangeTextField.bind(this, 'apiKey')}
					/>
					<TextField
						className={classes.textField}
						label="API Secret"
						fullWidth={true}
						className={classes.textField}
						value={this.state.apiSecret}
						onChange={this.handleChangeTextField.bind(this, 'apiSecret')}
					/>
					<Button
						type="submit"
						color="primary"
						variant="contained"
						className={classes.button}
						disabled={!this.state.apiKey && !this.state.apiSecret}
					>
						Submit
					</Button>
				</div>
			</form>
		);
	}

	handleChangeTextField(key, evt) {
		this.setState({ [key]: evt.target.value });
	}

	handleSubmit() {}
}

export default withStyles(TradeHistory);
