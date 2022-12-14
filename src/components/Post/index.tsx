import React, { FC } from "react";
import Icon from "../Icon";
import { Wrapper, Header, Title, WrapperIcons, Details, Row } from "./styles";
import { useAppSelector } from "~/redux/hooks";
import { PostProps } from "./Post.types";
import Typography from "../Typography";
import { getDistanceBetweenAnyDateAndNowDate } from "~/utils";

const Post: FC<PostProps> = ({ post, handleUpdatePost, handleDeletePost }) => {
  const username = useAppSelector((state) => state.user.username);
  const itsMyPost = post.username === username;
  const formattedCreatedDate = `${getDistanceBetweenAnyDateAndNowDate(
    post.created_datetime
  )} ago`;

  return (
    <Wrapper>
      <Header>
        <Title>{post.title}</Title>
        {itsMyPost && (
          <WrapperIcons>
            <Icon
              name="delete-forever"
              color="white"
              onPress={() => handleDeletePost(post)}
            />
            <Icon
              name="edit"
              color="white"
              font="feather"
              size={6}
              marginLeft={2}
              onPress={() => handleUpdatePost(post)}
            />
          </WrapperIcons>
        )}
      </Header>
      <Details>
        <Row>
          <Typography font="bold" color="grayHigh">
            @{post.username}
          </Typography>
          <Typography color="grayHigh">{formattedCreatedDate}</Typography>
        </Row>
        <Typography marginTop={1.5}>{post.content}</Typography>
      </Details>
    </Wrapper>
  );
};

export default Post;
