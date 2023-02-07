import "../styles/globals.css";
import "../layouts/empty";
import { EmptyLayout } from "../layouts/empty";
import { SWRConfig } from "swr/_internal";
import axiosClients from "../apis/axios";
import { CartProvider } from "../Util/CartProvider";
import NextNProgress from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClients.get(url),
        shouldRetryOnError: false,
      }}
    >
      <NextNProgress />
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </SWRConfig>
  );
}

export default MyApp;
