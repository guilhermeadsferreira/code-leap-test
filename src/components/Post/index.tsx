import React from "react";
import Icon from "../Icon";
import { Container, Header, Title, WrapperIcons } from "./styles";
import { useAppSelector } from "~/redux/hooks";
import { PostProps } from "./Post.types";

const Post: React.FC<PostProps> = ({ post }) => {
  const username = useAppSelector((state) => state.user.username);
  const itsMyPost = post.username === username;

  return (
    <Container>
      <Header>
        <Title>{post.title}</Title>
        {itsMyPost && (
          <WrapperIcons>
            <Icon name="delete-forever" color="white" />
            <Icon
              name="edit"
              color="white"
              font="feather"
              size={6}
              marginLeft={2}
            />
          </WrapperIcons>
        )}
      </Header>
    </Container>
  );
};

export default Post;
