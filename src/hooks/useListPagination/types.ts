export type ResultsType<T> = {
  next: string;
  data: Array<T>;
};

export type Response<T> = {
  results: ResultsType<T>;
  loading: boolean;
  loadingMoreData: boolean;
  handleFetchFirstPage: () => void;
  handleNextPage: () => void;
};
