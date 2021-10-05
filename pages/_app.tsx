import { AppProps } from "next/app";
import RelayEnvironment from "src/utils/relay/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Component {...pageProps} />
    </RelayEnvironmentProvider>
  );
}

export default App;
