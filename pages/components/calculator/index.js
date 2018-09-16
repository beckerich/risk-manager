import BaseComponent from '../../lib/BaseComponent';

import Typography from '@material-ui/core/Typography';

import withStyles from './styles';

import Label from './labels'

class Calculator extends BaseComponent {
	render() {
		const classes = this.props.classes;

		return (
			<div>
				<Typography align="center" variant="title">Risk Manager</Typography>
                
                <Label name="Risk Return Ratio" value="1R" />
                <Label name="Position Size" value="1R" />
                <Label name="Target Percent Change" value="1R" />
                <Label name="Loss Percent Change" value="1R" />
			</div>
		);
	}
}

export default withStyles(Calculator);
