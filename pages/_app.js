import "../styles/globals.css";
import Layout from "../components/layout/layout";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import Script from "next/script";

// import { Provider } from "react-redux";
// import store from "../src/app/store";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Script
        strategy={"afterInteractive"}
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-3FD9YLP5HK"
      ></Script>
      <Script strategy={"afterInteractive"} id={"google-analytics"}>
        {`
        
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-3FD9YLP5HK');
        `}
      </Script>

      <div className={"scroll-smooth"}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;

// <Provider store={store}>
