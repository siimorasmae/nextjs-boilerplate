import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '@/hooks/hooks';
import { getExampleData, selectExample } from '@/services/example';
import Header from '@/components/Header';

const Example: NextPage = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(selectExample);

  return (
    <>
      <Header />

      <p>Generate random Kanye West quote</p>

      {pending && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong</p>}

      <button onClick={() => dispatch(getExampleData())} disabled={pending}>
        Generate Kanye Quote
      </button>
    </>
  );
};

export default Example;
