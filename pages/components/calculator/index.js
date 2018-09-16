import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';

import withStyles from './styles';

class Calculator extends BaseComponent {
	render() {
		const classes = this.props.classes;

		return (
			<div className={classes.root}>
				<Typography align="center" variant="title">Risk Manager</Typography>
			</div>
		);
	}
}

export default withStyles(Calculator);
