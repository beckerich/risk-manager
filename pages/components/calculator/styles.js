import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		root: {
			height: '100%',
			width: '100%'
		},
		textField: {
			marginTop: '8px'
		},
		inputAdornment: {
			marginLeft: '8px'
		}
	};
});
