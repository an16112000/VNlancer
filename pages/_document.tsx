import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;0,700;1,300&family=Signika:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <script src="https://kit.fontawesome.com/da51b374bb.js" crossOrigin="anonymous"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
