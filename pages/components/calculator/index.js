import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';

import withStyles from './styles';

import Label from './labels'

class Calculator extends BaseComponent {
	render() {
		const classes = this.props.classes;

		return (
			<div className={classes.root}>
				<Typography align="center" variant="title">Risk Manager</Typography>
            
                <Label />
			</div>
		);
	}
}

export default withStyles(Calculator);
