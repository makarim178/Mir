import Document, { Html, Head, Main, NextScript } from 'next/document'
const dis = {display: 'block'}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  
  render() {
    return (

      <Html>
        <Head lang="en"/>
        <body className="antialiased bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 ng-no-repeat text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument