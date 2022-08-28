import React, { FC, useState } from "react";
import { FlatList } from "react-native";
import { useLazyListPostsQuery } from "~/actions";
import { AppHeader, Post, Loading, Icon } from "~/components";
import LoadingData from "~/components/LoadingData";
import { useListPagination } from "~/hooks";
import { Post as PostType } from "~/redux/reducers/post/types";
import ModalCreateAndUpdatePost from "./components/ModalCreateAndUpdatePost";
import { ModalProps } from "./Home.types";
import { Wrapper, TouchableCreateNewPost } from "./styles";

//TESTAR NO ANDROID
//MUDAR FONTE
//VER A QUESTAO DO CHILDREN
//TOAST
//TRATAMENTO DE ERRO, SUCESSO, INTERCEPTORS ?

const Home: FC = () => {
  const {
    loading,
    loadingMoreData,
    results,
    handleFetchFirstPage,
    handleNextPage,
  } = useListPagination<PostType>(useLazyListPostsQuery);
  const [modalDataCreateAndUpdatePost, setModalDataCreateAndUpdatePost] =
    useState<ModalProps>({
      show: false,
    });

  return (
    <Wrapper>
      <AppHeader />
      <ModalCreateAndUpdatePost
        data={modalDataCreateAndUpdatePost}
        closeModal={() => {
          setModalDataCreateAndUpdatePost({
            show: false,
          });
        }}
        onCreatedPost={handleFetchFirstPage}
      />
      <TouchableCreateNewPost
        onPress={() =>
          setModalDataCreateAndUpdatePost({
            show: true,
          })
        }
      >
        <Icon name="add" />
      </TouchableCreateNewPost>
      <LoadingData loading={loading}>
        <FlatList
          data={results.data}
          renderItem={({ item }) => (
            <Post
              post={item}
              handleUpdatePost={(post) =>
                setModalDataCreateAndUpdatePost({
                  show: true,
                  post,
                })
              }
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
