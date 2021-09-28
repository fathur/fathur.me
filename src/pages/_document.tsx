import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html className="bg-black">
        <Head>
          {/* eslint-disable-next-line @next/next/next-script-for-ga */}
          <script
            id="gtag"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-WQVKHVX');`,
            }}
          />
        </Head>
        <body className="bg-black">
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WQVKHVX"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
