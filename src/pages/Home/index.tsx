import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useListPostsQuery } from "~/actions";
import { AppHeader, Post, Loading } from "~/components";
import LoadingData from "~/components/LoadingData";
import { ListPostsResponse } from "~/redux/reducers/post/types";
import { Wrapper } from "./styles";

const Home: React.FC = () => {
  const [next, setNext] = useState("");
  const [results, setResults] = useState<ListPostsResponse["results"]>([]);
  const { data, isLoading, isFetching } = useListPostsQuery({ next });

  useEffect(() => {
    if (data?.results) {
      setResults((prev) => [...prev, ...data.results]);
    }
  }, [data]);

  return (
    <Wrapper>
      <AppHeader />
      <LoadingData loading={isLoading}>
        <FlatList
          data={results}
          renderItem={({ item }) => <Post post={item} />}
          contentContainerStyle={{
            paddingTop: "5%",
          }}
          onEndReached={() => {
            if (!isLoading && data?.next) {
              setNext(data.next);
            }
          }}
          onEndReachedThreshold={0.2}
          ListFooterComponent={isFetching ? <Loading /> : <></>}
        />
      </LoadingData>
    </Wrapper>
  );
};

export default Home;
