import BaseComponent from '../../lib/BaseComponent';
import { withRouter } from 'next/router';
import ccxt from 'ccxt';

import Calculator from './calculator';
import Market from './market';
import TradingView from '../../components/tradingview-chart';

import Grid from '@material-ui/core/Grid';

import withStyles from './styles';

class HomePage extends BaseComponent {
	state = { selectedMarket: null };

	static async getInitialProps({ req, router, query }) {
		const exchange = new ccxt.bitmex({});
		const markets = await exchange.fetchMarkets();

		return {
			markets: markets
				.filter(e => !e.id.includes('.') && !e.id.includes('_'))
				.sort((a, b) => ('' + a.base).localeCompare(b.base))
		};
	}

	componentDidMount() {
		this.setState({ selectedMarket: this.props.markets[0] });
	}

	render() {
		const classes = this.props.classes;

		return (
			<div>
				<Grid className={classes.gridContainer} container spacing={16}>
					<Grid item xs={12}>
						{this.renderTradingView()}
					</Grid>
					<Grid item xs={12} sm={6} md={7}>
						<Calculator market={this.state.selectedMarket} />
					</Grid>
					<Grid item xs={12} sm={6} md={5}>
						<div className={classes.markets}>
							{this.props.markets.map(this.renderMarket.bind(this))}
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}

	renderTradingView() {
		if (this.state.loading) {
			return;
		}

		return (
			<TradingView market={this.state.selectedMarket} />
		);
	}

	renderMarket(market, index) {
		const selected = market.id === (this.state.selectedMarket || {}).id;

		return (
			<Market
				selected={selected}
				market={market}
				key={index}
				onClickMarket={this.handleClickMarket.bind(this)}
			/>
		);
	}

	handleClickMarket(selectedMarket) {
		this.setState({ selectedMarket, loading: true }, () => {
			this.setState({ loading: false });
		});
	}
}

export default withRouter(withStyles(HomePage));
