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
			root: {
				backgroundColor: colors.concrete,
				borderRadius: '7px',
				color: colors.black,
				fontSize: '14px',
				fontWeight: 300,
				lineHeight: '20px',
				paddingTop: 4,
				paddingBottom: 4
			},
			input: {
				paddingLeft: 8,
				paddingRight: 8,
				width: 'calc(100% - 16px)',
				'&::placeholder': {
					opacity: `.5 !important`,
				}
			},
			underline: {
				'&:after': {
					backgroundColor: colors.main
				}
			},
			inputMultiline: {
				paddingLeft: 8,
				paddingRight: 8,
				width: 'calc(100% - 16px)'
			}
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
