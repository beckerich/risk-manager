import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		loading: {
			height: '100%',
			width: '100%',
			position: 'fixed',
			background: 'white',
			zIndex: 3000
		}
	};
});
