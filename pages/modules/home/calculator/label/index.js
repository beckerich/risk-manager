import BaseComponent from '../../../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';

import withStyles from './styles';

class Label extends BaseComponent {
	render() {
		const classes = this.props.classes;

		return (
			<div className={classes.root}>
				<Typography className={classes.keyName}>{this.props.name}:</Typography>
				<Typography className={classes.value}>{this.props.value}</Typography>
			</div>
		);
	}
}

export default withStyles(Label);
