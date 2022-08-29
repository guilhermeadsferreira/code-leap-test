import React, { FC, useState } from "react";
import { FlatList } from "react-native";
import { useLazyListPostsQuery } from "~/actions";
import { AppHeader, Post, Loading, Icon, LoadingData } from "~/components";
import { useListPagination } from "~/hooks";
import { Post as PostType } from "~/redux/reducers/post/types";
import ModalCreateAndUpdatePost from "./components/ModalCreateAndUpdatePost";
import ModalDeletePost from "./components/ModalDeletePost";
import { ModalData } from "./Home.types";
import { Wrapper, TouchableCreateNewPost } from "./styles";

const Home: FC = () => {
  const {
    loading,
    loadingMoreData,
    results,
    handleFetchFirstPage,
    handleNextPage,
  } = useListPagination<PostType>(useLazyListPostsQuery);
  const [postModalData, setPostModalData] = useState<ModalData>({
    show: false,
  });
  const [deletePostModalData, setDeletePostModalData] = useState<ModalData>({
    show: false,
  });

  return (
    <Wrapper>
      <AppHeader />
      <ModalCreateAndUpdatePost
        data={postModalData}
        closeModal={() => {
          setPostModalData({
            show: false,
          });
        }}
        refetchPosts={handleFetchFirstPage}
      />
      <ModalDeletePost
        data={deletePostModalData}
        closeModal={() => {
          setDeletePostModalData({ show: false });
        }}
        refetchPosts={handleFetchFirstPage}
      />
      <TouchableCreateNewPost
        onPress={() =>
          setPostModalData({
            show: true,
          })
        }
      >
        <Icon name="add" />
      </TouchableCreateNewPost>
      <LoadingData loading={loading}>
        <FlatList
          data={results?.data}
          renderItem={({ item }) => (
            <Post
              post={item}
              handleUpdatePost={(post) => {
                setPostModalData({
                  show: true,
                  post,
                });
              }}
              handleDeletePost={(post) => {
                setDeletePostModalData({ show: true, post });
              }}
            />
          )}
          contentContainerStyle={{
            paddingTop: "5%",
          }}
          onEndReached={handleNextPage}
          onEndReachedThreshold={0.2}
          ListFooterComponent={loadingMoreData ? <Loading /> : <></>}
        />
      </LoadingData>
    </Wrapper>
  );
};

export default Home;
