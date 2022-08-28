import { useState, useEffect, useCallback } from "react";
import { Response, ResultsType } from "./types";

const useListPagination = <T>(query: any) => {
  const [results, setResults] = useState<ResultsType<T>>({
    next: "",
    data: [],
  });
  const [loading, setLoading] = useState(false);
  const [loadingMoreData, setLoadingMoreData] = useState(false);
  const [fetch] = query();

  useEffect(() => {
    handleFetchFirstPage();
  }, []);

  const handleFetchFirstPage = useCallback(async () => {
    setLoading(true);
    await handleFetchData();
    setLoading(false);
  }, []);

  const handleNextPage = useCallback(async () => {
    if (loadingMoreData) {
      return;
    }
    if (!results?.next) {
      return;
    }
    setLoadingMoreData(true);
    await handleFetchData(results?.next);
    setLoadingMoreData(false);
  }, [loadingMoreData, results]);

  const handleFetchData = async (next?: string) => {
    const { data } = await fetch({ next });

    if (next) {
      setResults((prev) => ({
        next: data.next,
        data: [...(prev?.data as Array<T>), ...data.results],
      }));
    } else {
      setResults({
        next: data.next,
        data: data.results,
      });
    }
  };

  return {
    results,
    loading,
    loadingMoreData,
    handleFetchFirstPage,
    handleNextPage,
  } as Response<T>;
};

export default useListPagination;
