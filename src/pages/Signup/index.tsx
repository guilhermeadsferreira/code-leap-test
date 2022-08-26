import React, { FC, useState } from "react";
import { Typography, Input, Button } from "~/components";
import { Box, Container } from "./styles";

const Signup: FC = () => {
  const [username, setUsername] = useState("");

  return (
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
          onPress={() => {}}
          disabled={!username}
          alignSelf="flex-end"
          marginTop={3}
          width={23}
        >
          ENTER
        </Button>
      </Box>
    </Container>
  );
};

export default Signup;
