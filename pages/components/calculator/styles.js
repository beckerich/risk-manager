import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		root: {
			height: '100%',
			width: '100%'
		}
	};
});
