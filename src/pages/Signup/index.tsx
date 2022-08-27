import React, { FC, useState } from "react";
import { addUsername } from "~/actions";
import { Typography, Input, Button, KeyboardShift } from "~/components";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { Box, Container } from "./styles";

const Signup: FC<MainStackScreenProps<"SIGN_UP">> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const [username, setUsername] = useState(user.username);

  return (
    <KeyboardShift>
      <Container>
        <Box>
          <Typography font="bold" size="18">
            Welcome to CodeLeap network!
          </Typography>
          <Input
            marginTop={4}
            label="Please enter your username"
            placeholder="John doe"
            value={username}
            onChangeText={setUsername}
          />
          <Button
            onPress={() => {
              dispatch(addUsername(username));
              navigation.navigate("HOME");
            }}
            disabled={!username}
            alignSelf="flex-end"
            marginTop={3}
            width={23}
          >
            ENTER
          </Button>
        </Box>
      </Container>
    </KeyboardShift>
  );
};

export default Signup;
