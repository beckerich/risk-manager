import BaseComponent from '../../lib/BaseComponent';

import withStyles from './styles';

class Loading extends BaseComponent {
	render() {
		const classes = this.props.classes;

		if (!this.props.loading) {
			return <React.Fragment />;
		}

		return <div className={classes.loading}/>;
	}
}

export default withStyles(Loading);
