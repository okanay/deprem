import "../styles/globals.css";
import Layout from "../components/layout/layout";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

// import { Provider } from "react-redux";
// import store from "../src/app/store";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
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
