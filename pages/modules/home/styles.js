import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		gridContainer: {
			margin: '12px auto',
			maxWidth: 'calc(100% - 24px)',
			width: '1080px'
		},
		gridItem: {
			borderRadius: '12px',
			margin: '0 auto',
			background: 'white',
			padding: '12px',
		}
	};
});
