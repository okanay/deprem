import "../styles/globals.css";
import Layout from "../components/layout/layout";
// import { Provider } from "react-redux";
// import store from "../src/app/store";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'

function MyApp({ Component, pageProps }) {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={""}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </QueryClientProvider>
  );
}

export default MyApp;

// <Provider store={store}>
