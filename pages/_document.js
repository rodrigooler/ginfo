import React from 'react'
import { injectGlobal, ServerStyleSheet } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'

// @ts-ignore
injectGlobal`
	html,
	body,
	#root {
		position: relative;
		background-color: #333
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: "Raleway", "Roboto", sans-serif;
    overflow-x: hidden;
		font-size: 16px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	},
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		outline: none;
	}
`

export default class MainDocument extends Document {
    public static getInitialProps({ renderPage }: any): any {
        const sheet = new ServerStyleSheet()
        const page = renderPage(
            (App: any): any => (props: any): any =>
                sheet.collectStyles(<App {...props} />),
        )
        const styleTags = sheet.getStyleElement()
        return { ...page, styleTags }
    }

    public render() {
        return (
            <html>
                <Head>
                    <title>MBOS - Job Ever</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no, user-scalable=no"
                    />
                    <meta name="author" content="goinfo" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content={COLOR.PURPLE_HEART}
                    />
                    <meta name="keywords" content="" />
                    <meta property="og:url" content="https://ginfo.now.sh" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content="" />
                    <meta property="og:image:secure_url" content="" />
                    <meta name="description" content="" />
                    <meta name="theme-color" content={COLOR.PURPLE_HEART} />
                    <meta name="twitter:card" content="summary" />
                    <meta name="twitter:site" content="@goinfo" />
                    <meta name="twitter:creator" content="@goinfo" />
                    <meta property="og:url" content="http://ginfo.now.sh" />
                    <meta property="og:title" content="" />
                    <meta property="og:description" content="" />
                    <meta property="og:image" content="" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link
                        rel="icon"
                        href="/static/favicon-32.ico"
                        sizes="32x32"
                    />
                    <link
                        href="https://fonts.googleapis.com/css?family=Raleway:400,700"
                        rel="stylesheet"
                    />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}
