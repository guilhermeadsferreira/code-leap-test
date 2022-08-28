import React, { useState } from "react";
import { useDeletePostMutation } from "~/actions";
import { BottomModal, Button, Typography } from "~/components";
import { ModalProps } from "./ModalDeletePost.types";
import { Row } from "./styles";

const ModalDeletePost: React.FC<ModalProps> = ({
  data,
  closeModal,
  refetchPosts,
}) => {
  const [loading, setLoading] = useState(false);
  const [handleDeletePost] = useDeletePostMutation();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await handleDeletePost({
        id: data.post?.id as number,
      }).unwrap();
      refetchPosts();
      closeModal();
    } catch (_) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <BottomModal
      show={data.show}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
    >
      <Typography size="18" font="medium">
        Are you sure you want to delete this item?
      </Typography>
      <Row>
        <Button width={30} isTransparent onPress={closeModal}>
          Cancel
        </Button>
        <Button
          width={30}
          isTransparent
          marginLeft={3}
          onPress={handleDelete}
          loading={loading}
        >
          OK
        </Button>
      </Row>
    </BottomModal>
  );
};

export default ModalDeletePost;
