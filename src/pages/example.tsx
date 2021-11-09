import type { NextPage } from 'next';
import { useSWRConfig } from 'swr';
import { useQuote } from '@/services/example2';
import Header from '@/components/Header';

const Example: NextPage = () => {
  const { quote, isLoading, isError } = useQuote();
  const { mutate } = useSWRConfig();

  return (
    <>
      <Header />

      <p>Generate random Kanye West quote</p>

      {isLoading && <p>Loading...</p>}
      {quote && <p>{quote.quote}</p>}
      {isError && <p>Oops, something went wrong</p>}

      <button
        onClick={() => mutate('https://api.kanye.rest/')}
        disabled={isLoading}
      >
        Generate Kanye Quote
      </button>
    </>
  );
};

export default Example;
