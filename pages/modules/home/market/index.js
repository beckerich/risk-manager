import BaseComponent from '../../../lib/BaseComponent';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';

import withStyles from './styles';

class MarketItem extends BaseComponent {
	render() {
		const classes = this.props.classes;

		return (
			<div
				className={classNames(classes.root, { [classes.selected]: this.props.selected })}
				onClick={this.handleClickMarket.bind(this)}
			>
				<Typography className={classes.title}>
					{this.props.market.base}/{this.props.market.quote}{' '}
				</Typography>
				<Typography className={classes.subtitle}>
					{this.props.market.info.bidPrice} {this.props.market.quote}
					<span className={classes.type}>
						{this.props.market.id} - {this.props.market.type}
					</span>
				</Typography>
			</div>
		);
	}

	handleClickMarket() {
		this.props.onClickMarket(this.props.market);
	}
}

export default withStyles(MarketItem);
