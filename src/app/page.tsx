"use client";

import useNotification from "@/lib/hooks/useNotification";
import { CiLock } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";

const Login = () => {
  const { handleError, handleSuccess } = useNotification();
  const [visible, setVisible] = useState(false);
  const { push } = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setVisible(true);

    const defaultEmail = "yourwatcher@gmail.com";
    const defaultPassword = "Yourwatcher123";

    setTimeout(() => {
      if (email === defaultEmail && password === defaultPassword) {
        handleSuccess("Login successful", "Admin has successfuly signed in");
        push("/dashboard");
      } else {
        handleError("Login failed", "Wrong credentials");
      }
      setVisible(false);
    }, 500);
  };

  const emailIcon = (
    <Group justify="center" bg={"#FFF"}>
      <FaRegEnvelope />
    </Group>
  );
  const passIcon = (
    <Group justify="center" bg={"#FFF"}>
      <CiLock />
    </Group>
  );

  return (
    <Container size={1500} px={0}>
      <Box h={"70px"} bg={"#51cf66"}>
        <Text fw={800} fz={35} py={"7px"} px={"15px"} c={"#FFF"}>
          YOURWATCHER
        </Text>
      </Box>
      <Box bg={"#e9fac8"} h={"100%"}>
        <Flex align={"center"} justify={"center"} h={"100vh"}>
          <Stack
            p={"40px 30px"}
            bg={"#fff"}
            w={"500px"}
            h={"400px"}
            style={{ borderRadius: "30px" }}
          >
            <Flex align={"center"} justify={"center"}>
              <Stack gap={"xs"}>
                <Text fw={700} fz={30} ta={"center"}>
                  LOG IN
                </Text>
              </Stack>
            </Flex>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack>
                <TextInput
                  leftSection={emailIcon}
                  radius={"xl"}
                  size="lg"
                  placeholder="Enter your email"
                  mt={"8px"}
                  label="Email"
                  value={email}
                  onChange={handleUsernameChange}
                />
                <PasswordInput
                  leftSection={passIcon}
                  radius={"xl"}
                  size="lg"
                  label="Password"
                  placeholder="Enter your password"
                  fw={400}
                  value={password}
                  onChange={handlePasswordChange}
                  mb={"lg"}
                />
                <Button
                  variant="gradient"
                  gradient={{ from: "lime", to: "green", deg: 10 }}
                  radius={"sm"}
                  size="lg"
                  fw={600}
                  fz={20}
                  type="submit"
                >
                  Log In
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Login;
