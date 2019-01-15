import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		keyName: {
			fontSize: '12px',
			lineHeight: '16px',
			color: colors.black50
		},
		value: {
			fontSize: '20px',
			lineHeight: '32px',
			color: colors.black,
			fontWeight: 'bold'
		}
	};
});
