import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		gridContainer: {
			borderRadius: '12px',
			margin: '12px auto',
			background: 'white',
			padding: '12px',
			maxWidth: 'calc(100% - 24px)',
			width: '1080px'
		}
	};
});
