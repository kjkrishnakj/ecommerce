import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head >
      <script async src="https://js.stripe.com/v3/"></script>
          </Head>
      <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
