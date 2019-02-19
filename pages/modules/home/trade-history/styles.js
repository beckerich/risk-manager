import { withStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		root: {
			width: '100%',
			borderRadius: '7px',
			background: colors.white,
			padding: '12px',
			marginTop: '16px'
		},
		textField: {
			marginTop: '8px'
		},
		inputAdornment: {
			marginLeft: '8px'
		},
		title: {
			fontWeight: 'bold',
			fontSize: '24px',
			marginBottom: '18px'
		},
		button: {
			margin: '24px auto 12px auto',
			display: 'block'
		},
		formWrapper: {
			margin: '0 auto',
			maxWidth: '350px',
			display: 'block'
		},
		chart: {
			width: '100%',
			display: 'block'
		}
	};
});
