import BaseComponent from '../../lib/BaseComponent';
import { withRouter } from 'next/router';

import withStyles from './styles';

class HomePage extends BaseComponent {
	render() {
		return (
			<div>
				Hello World
			</div>
		);
	}
}

export default withRouter(withStyles(HomePage));
