import App, { Container } from 'next/app';
import JssProvider from 'react-jss/lib/JssProvider';
import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Loading from './components/loading';

import getPageContext from './lib/get-page-context';

class CustomApp extends App {
	state = { loading: true };

	constructor(props) {
		super(props);
		this.pageContext = getPageContext();
	}

	pageContext = null;

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles && jssStyles.parentNode) {
			jssStyles.parentNode.removeChild(jssStyles);
		}

		this.setState({ loading: false });
	}

	render() {
		const { Component, pageProps, apolloClient } = this.props;

		return (
			<Container>
				<JssProvider
					registry={this.pageContext.sheetsRegistry}
					generateClassName={this.pageContext.generateClassName}
				>
					<MuiThemeProvider
						theme={this.pageContext.theme}
						sheetsManager={this.pageContext.sheetsManager}
					>
						<CssBaseline />
						<Loading loading={this.state.loading} />
						<Component pageContext={this.pageContext} {...pageProps} />
					</MuiThemeProvider>
				</JssProvider>
			</Container>
		);
	}
}

export default CustomApp;
