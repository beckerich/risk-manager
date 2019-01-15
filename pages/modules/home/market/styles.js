import { withStyles } from '@material-ui/core/styles';

export default withStyles(theme => {
	const colors = theme.palette.colors;

	return {
		root: {
			borderRadius: '7px',
			background: colors.white,
			padding: '12px',
			marginBottom: '12px',
			transition: 'all 250ms',
			border: `2px solid ${colors.white}`,
			'&:hover': {
				boxShadow: `5px 5px 15px ${colors.black10}`,
				cursor: 'pointer',
				borderRadius: '7px'
			}
		},
		title: {
			fontSize: '20px',
			lineHeight: '32px',
			fontWeight: 'bold',
			color: colors.black
		},
		subtitle: {
			fontSize: '14px',
			lineHeight: '20px',
			color: colors.black50
		},
		type: {
			float: 'right'
		},
		selected: {
			border: `2px solid ${colors.black}`
		}
	};
});
