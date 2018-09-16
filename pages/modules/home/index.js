import BaseComponent from '../../lib/BaseComponent';
import { withRouter } from 'next/router';

import Calculator from '../../components/calculator';

import Grid from '@material-ui/core/Grid';

import withStyles from './styles';

class HomePage extends BaseComponent {
	render() {
		const classes = this.props.classes;

		return (
			<div>
				<Grid className={classes.gridContainer} container spacing={24}>
					<Grid item xs={12}>
						<Calculator />
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withRouter(withStyles(HomePage));
