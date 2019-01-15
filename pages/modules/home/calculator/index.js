import BaseComponent from '../../../lib/BaseComponent';
import BigNumber from 'bignumber.js';

import Label from './label';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import withStyles from './styles';

class Calculator extends BaseComponent {
	state = {
		accountBalance: 1,
		riskAmount: 3,
		entryPrice: 10,
		targetPrice: 12,
		stopPrice: 9
	};

	componentWillReceiveProps(props) {
		if (JSON.stringify(this.props.market) !== JSON.stringify(props.market)) {
			const market = props.market;
			const step = market.precision ? 1 / Math.pow(10, market.precision.price) : undefined;

			this.setState({
				entryPrice: props.market.info.bidPrice,
				targetPrice: (props.market.info.bidPrice + 100 * step).toFixed(market.precision.price),
				stopPrice: (props.market.info.bidPrice - 100 * step).toFixed(market.precision.price)
			});
		}
	}

	render() {
		const classes = this.props.classes;
		const market = this.props.market;

		if (!market) {
			return <div />;
		}

		const step = market.precision ? 1 / Math.pow(10, market.precision.price) : undefined;

		const adornment = {
			USD: '$',
			BTC: '฿'
		}[market.quote];

		const entries = [
			{
				name: 'Account Balance',
				key: 'accountBalance',
				adornment: '฿',
				step: 0.00000001
			},
			{
				name: 'Risk Amount',
				adornment: '%',
				key: 'riskAmount'
			},
			{
				name: 'Entry Price',
				key: 'entryPrice',
				adornment,
				step
			},
			{
				name: 'Target Price',
				key: 'targetPrice',
				adornment,
				step
			},
			{
				name: 'Stop Price',
				key: 'stopPrice',
				adornment,
				step
			}
		];

		const position = this.createPosition({
			balance: this.state.accountBalance,
			price: this.state.entryPrice,
			stop: this.state.stopPrice,
			target: this.state.targetPrice,
			risk: this.state.riskAmount,
			isInverse: this.props.market.info.isInverse
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
								<Label name="Risk Return Ratio" value={`${position.rValue.toFixed(2)}R`} />
							</Grid>
							<Grid item xs={12}>
								<Label
									name="Position Size"
									value={`${position.amount.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${
										market.info.isInverse ? market.quote : market.base
									}`}
								/>
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
					disableUnderline: true,
					inputProps: {
						step: entry.step
					}
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

	createPosition({ balance, price, stop, target, risk, isInverse }) {
		balance = BigNumber(balance);
		risk = risk / 100;
		const entryPrice = BigNumber(price);
		const stopPrice = BigNumber(stop);
		const exitPrice = BigNumber(target);
		const entryStopPercentDiff = entryPrice
			.minus(stopPrice)
			.abs()
			.dividedBy(entryPrice.plus(stopPrice).dividedBy(2));

		const baseCost = balance.times(risk).dividedBy(entryStopPercentDiff);

		const amount = isInverse ? baseCost.times(entryPrice) : baseCost.dividedBy(entryPrice);

		const gain = amount
			.times(
				isInverse
					? BigNumber(1)
							.dividedBy(entryPrice)
							.minus(BigNumber(1).dividedBy(exitPrice))
					: exitPrice.minus(entryPrice)
			)
			.abs();
		const loss = amount
			.times(
				isInverse
					? BigNumber(1)
							.dividedBy(entryPrice)
							.minus(BigNumber(1).dividedBy(stopPrice))
					: stopPrice.minus(entryPrice)
			)
			.abs();
		const exitBalance = balance.plus(gain);
		const stopBalance = balance.minus(loss);
		const percentGain = balance
			.minus(exitBalance)
			.abs()
			.dividedBy(balance.plus(exitBalance).dividedBy(2));
		const percentLoss = balance
			.minus(stopBalance)
			.abs()
			.dividedBy(balance.plus(stopBalance).dividedBy(2));

		const rValue = entryPrice
			.minus(exitPrice)
			.abs()
			.dividedBy(entryPrice.minus(stopPrice).abs());

		return {
			amount,
			entryPrice,
			exitBalance,
			exitPrice,
			gain,
			loss,
			percentGain,
			percentLoss,
			stopBalance,
			stopPrice,
			rValue
		};
	}
}

export default withStyles(Calculator);
