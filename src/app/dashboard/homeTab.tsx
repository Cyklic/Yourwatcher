import React from "react";
import {
  Button,
  Stack,
  Box,
  Tabs,
  TextInput,
  FileInput,
  Flex,
  Group,
  Text,
} from "@mantine/core";

const homeTab = () => {
  return (
    <Flex
      bg={"#e9fac8"}
      align={"center"}
      justify={"center"}
      h={"100%"}
      style={{ flexDirection: "column" }}
    >
      <Stack
        p={"32px"}
        bg={"#e9fac8"}
        w={"800px"}
        gap={"lg"}
        align={"center"}
        justify={"center"}
        style={{ borderRadius: "30px" }}
      >
        <Text fz={30} fw={700} c={"#51cf66"}>
          Welcome to YOURWATCHER!
        </Text>
        <Text fz={20} fw={400} ta={"center"}>
          We are a streaming service and we provide you the ability to provide
          and upload your movies, series, documentaries, animes, sports and
          other forms of entertainment. You can also pay to gain access to other
          use content, using a subscription based payment. You would have your
          own account, where you would be able to access all these features and
          enjoy your form of entertainment.
        </Text>
      </Stack>
    </Flex>
  );
};

export default homeTab;
