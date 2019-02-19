import { createMuiTheme } from '@material-ui/core/styles';

const colors = require('./colors');

export default createMuiTheme({
	mixins: {
		clearfix: {
			'&:after': {
				content: `''`,
				display: 'table',
				clear: 'both'
			}
		}
	},
	typography: {
		fontFamily: 'Muli'
	},
	palette: {
		colors,
		background: {
			default: colors.concrete
		}
	},
	overrides: {
		MuiButton: {
			root: {
				textTransform: 'none'
			},
			raisedPrimary: {
				borderRadius: '7px',
				boxShadow: 'none',
				backgroundColor: colors.main,
				'&:hover': {
					backgroundColor: colors.main
				},
				'@media (hover: none)': {
					'&:hover': {
						backgroundColor: `${colors.main} !important`
					}
				}
			},
			raisedSecondary: {
				borderRadius: '7px',
				boxShadow: 'none',
				backgroundColor: colors.red,
				'&:hover': {
					backgroundColor: colors.red
				},
				'@media (hover: none)': {
					'&:hover': {
						backgroundColor: `${colors.red} !important`
					}
				}
			},
			flatPrimary: {
				borderRadius: '7px',
				color: colors.black,
				boxShadow: 'none',
				backgroundColor: colors.white,
				'&:hover': {
					backgroundColor: colors.white
				},
				'@media (hover: none)': {
					'&:hover': {
						backgroundColor: `${colors.white} !important`
					}
				}
			},
			flatSecondary: {
				borderRadius: '7px',
				color: colors.white,
				boxShadow: 'none',
				backgroundColor: colors.black,
				'&:hover': {
					backgroundColor: colors.black
				},
				'@media (hover: none)': {
					'&:hover': {
						backgroundColor: `${colors.black} !important`
					}
				}
			},
		},
		MuiInput: {
		},
		MuiFormLabel: {
			focused: {
				color: colors.main
			}
		},
		MuiFormHelperText: {
			root: {
				color: colors.red
			}
		},
		MuiCheckbox: {
			checked: {
				color: `${colors.main} !important`
			}
		},
		MuiSwitchBase: {
			root: {
				height: '25px'
			}
		}
	}
});
