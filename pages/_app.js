import "../styles/globals.css";
import "../layouts/empty";
import { EmptyLayout } from "../layouts/empty";
import { SWRConfig } from "swr/_internal";
import axiosClients from "../apis/axios";
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <SWRConfig value={{fetcher:url => axiosClients.get(url),shouldRetryOnError:false}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
