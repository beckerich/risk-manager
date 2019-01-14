import BigNumber from 'bignumber.js';

export default class Trader {
	static createPosition(action, { balance, price, stop, target, risk, isInverse }) {
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
