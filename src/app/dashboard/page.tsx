"use client";

import withLayout from "@/layouts/appLayout";
import { Box, Container, Stack, Tabs, Text } from "@mantine/core";
import React from "react";
import AccountTab from "./accoutTab";
import PaymentTab from "./paymentTab";
import HomeTab from "./homeTab";

const Dashboard: React.FC = () => {
  return (
    <Container size={1500} mx={"0px"} px={"0px"}>
      <Stack h={"100vh"}>
        <Text fw={600} fz={20}>
          DASHBOARD
        </Text>
        <Tabs
          color="#51cf66"
          variant="pills"
          defaultValue="home"
          orientation="horizontal"
        >
          <Tabs.List>
            <Tabs.Tab value="home">Home</Tabs.Tab>
            <Tabs.Tab value="createAccount">Request Account</Tabs.Tab>
            <Tabs.Tab value="requestPayment">Request Payout</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="home">
            <HomeTab />
          </Tabs.Panel>
          <Tabs.Panel value="createAccount">
            <AccountTab />
          </Tabs.Panel>
          <Tabs.Panel value="requestPayment">
            <PaymentTab />
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Container>
  );
};

export default withLayout(Dashboard);
