import {useEffect, useState} from 'react';
import {useGetLanguagesQuery} from '~redux/translate/translate';
import {ILanguage} from '~types/api/translateApi.types';

const useGetLanguages = () => {
  const [languages, setLanguages] = useState<ILanguage[]>();

  const {data, isLoading, error, isFetching, refetch} = useGetLanguagesQuery(
    {},
  );

  useEffect(() => {
    if (!isLoading && !error && !isFetching && data) {
      setLanguages([...data]);
    }
  }, [data, error, isFetching, isLoading]);

  return {languages, refetch};
};

export default useGetLanguages;
