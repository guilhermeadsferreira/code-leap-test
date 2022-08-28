import React, { FC, useCallback } from "react";
import {
  Button,
  Input,
  Typography,
  InputTextArea,
  BottomModal,
} from "~/components";
import { Formik } from "formik";
import { schema, getFormInitialValues } from "./form";
import { ModalProps } from "./ModalCreateAndUpdatePost.types";
import { useCreatePostMutation, useUpdatePostMutation } from "~/actions";
import { useAppSelector } from "~/redux/hooks";

const ModalCreateAndUpdatePost: FC<ModalProps> = ({
  data,
  closeModal,
  refetchPosts,
}) => {
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const username = useAppSelector((state) => state.user.username);
  const title = data.post ? "Edit item" : "What's on your mind?";
  const buttonText = data.post ? "SAVE" : "CREATE";
  const initialValues = getFormInitialValues(data.post);

  const handleSubmitForm = useCallback(
    async (values: typeof initialValues) => {
      try {
        if (data.post) {
          await updatePost({
            id: data.post.id,
            payload: {
              title: values.title,
              content: values.content,
            },
          }).unwrap();
        } else {
          await createPost({
            payload: {
              username,
              title: values.title,
              content: values.content,
            },
          }).unwrap();
        }

        refetchPosts();
        closeModal();
      } catch (_) {}
    },
    [data]
  );

  return (
    <BottomModal
      show={data.show}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
    >
      <Formik
        initialValues={initialValues}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={handleSubmitForm}
        validationSchema={schema}
      >
        {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
          <>
            <Typography font="bold" size="20">
              {title}
            </Typography>
            <Input
              label="Title"
              placeholder="Hello world"
              marginTop={3}
              value={values.title}
              onChangeText={handleChange("title")}
              messageError={errors.title}
            />
            <InputTextArea
              label="Content"
              placeholder="Content here"
              marginTop={3}
              value={values.content}
              onChangeText={handleChange("content")}
              messageError={errors.content}
              scrollEnabled={false}
            />
            <Button
              alignSelf="flex-end"
              width={30}
              marginTop={3}
              onPress={() => handleSubmit()}
              loading={isSubmitting}
            >
              {buttonText}
            </Button>
          </>
        )}
      </Formik>
    </BottomModal>
  );
};

export default ModalCreateAndUpdatePost;
