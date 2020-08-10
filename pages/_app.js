import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import { useApollo } from "../utils/apollo";
import Navigation from "../components/navigation";
// import Footer from "../components/footer";

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Wayne Foster</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <Navigation />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </ApolloProvider>
  );
};
// Wraps all components in the tree with the data provider
export default App;
