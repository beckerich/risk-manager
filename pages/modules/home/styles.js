import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		gridContainer: {
			margin: '12px auto',
			maxWidth: 'calc(100% - 24px)',
			width: '1080px'
		}
	};
});
