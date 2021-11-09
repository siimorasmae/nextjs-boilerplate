import '@/styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import Axios from 'axios';
import { store } from '@/store/store';
import { appWithTranslation } from 'next-i18next';

// Axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL;
// Axios.defaults.withCredentials = true;

const fetcher = async (url: string) => {
  try {
    const res = await Axios.get(url);
    return res.data;
  } catch (err) {
    throw (err as Error);
  }
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SWRConfig value={{
        revalidateOnFocus: false,
        fetcher,
      }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Provider>
  );
}

export default appWithTranslation(MyApp);
