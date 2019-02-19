import BaseComponent from '../../lib/BaseComponent';
import Head from 'next/head';
import _ from 'lodash';
import withStyles from './styles';

class TradingViewChart extends BaseComponent {
	componentDidMount() {
		this.interval = setInterval(() => {
			if (!window.TradingView) {
				return;
			}

			this.init();
			clearInterval(this.interval);
		}, 200);
	}

	init() {
		this.widget = new TradingView.widget({
			symbol: `BITMEX:${this.props.market.id}`,
			allow_symbol_change: false,
			hide_side_toolbar: false,
			interval: 'D',
			container_id: 'tv_chart_container',
			locale: 'en',
			height: this.props.height || 700,
			width: '100%',
			disabled_features: [
				'header_symbol_search',
				'header_settings',
				'header_compare',
				'header_undo_redo',
				'left_toolbar'
			],
			time_frames: [],
			debug: false
		});
	}

	render() {
		const classes = this.props.classes;

		return (
			<div className={this.props.className}>
				<Head>
					<script type="text/javascript" src="https://s3.tradingview.com/tv.js" />
				</Head>
				<div style={{ height: '100%', width: '100%' }} id="tv_chart_container" />
			</div>
		);
	}
}

export default withStyles(TradingViewChart);
