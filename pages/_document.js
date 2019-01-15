import Document, { Head, Main, NextScript } from 'next/document';
import PropTypes from 'prop-types';
import React from 'react';
import flush from 'styled-jsx/server';

class CustomDocument extends Document {
	render() {
		const { pageContext } = this.props;

		return (
			<html lang="en" dir="ltr">
				<Head>
					<meta charSet="utf-8" />
					<meta
						name="viewport"
						content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
					/>

					<title>Risk Manager</title>
					<link rel="icon" href="/static/favicon.ico" type="image/x-icon"/>

					<base href="/" />

					<meta name="theme-color" content={pageContext.theme.palette.primary.main} />

					<link
						rel="stylesheet"
						href="//fonts.googleapis.com/css?family=Muli:200,300,400,600,700"
						type="text/css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}

CustomDocument.getInitialProps = ctx => {
	let pageContext;
	const page = ctx.renderPage(Component => {
		const WrappedComponent = props => {
			pageContext = props.pageContext;
			return <Component {...props} />;
		};

		WrappedComponent.propTypes = {
			pageContext: PropTypes.object.isRequired
		};

		return WrappedComponent;
	});

	return {
		...page,
		pageContext,
		styles: (
			<React.Fragment>
				<style
					id="jss-server-side"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: pageContext.sheetsRegistry.toString() }}
				/>
				{flush() || null}
			</React.Fragment>
		)
	};
};

export default CustomDocument;
