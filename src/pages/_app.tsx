import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@/css/globalStyles.css";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { wrapper } from "@/core/redux/store";
import AuthProvider from "@/components/hoc/auth-provider";
import Layout from "@/components/Layout/Layout";
import Script from "next/script";
import Head from "next/head";

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      <Head>
        <Script src="https://static.testpress.in/static/js/player.js"></Script>
      </Head>
      <Provider store={store}>
        <AuthProvider>
          <Layout>
            <Component {...props.pageProps} />
          </Layout>
          <Toaster containerClassName="mt-20" />
        </AuthProvider>
      </Provider>
    </>
  );
};

export default MyApp;
