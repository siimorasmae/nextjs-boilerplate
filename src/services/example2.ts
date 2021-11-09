import useSWR from 'swr';

type ReturnData = { quote: string };

export const useQuote = () => {
  const { data, error } = useSWR<ReturnData, Error>('https://api.kanye.rest/');

  return {
    quote: data,
    isLoading: !error && !data,
    isError: error,
  };
};
