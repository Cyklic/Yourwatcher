import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Tabs,
  Text,
  TextInput,
  Select,
} from "@mantine/core";

interface RequestPayout {
  account: string;
  amount: number;
  destinationIBAN: string;
  destinationBIC: string;
  destinationCountry: string;
  destinationBank: string;
  reference: string;
  reason: string;
}

interface DisburseFunds {
  amount: number;
  destinationIBAN: string;
  destinationBIC: string;
  destinationCountry: string;
  destinationBank: string;
  reference: string;
  reason: string;
}

const PaymentTab = () => {
  const [requestForm, setRequestForm] = useState<RequestPayout>({
    account: "",
    amount: 300,
    destinationIBAN: "",
    destinationBIC: "",
    destinationCountry: "",
    destinationBank: "",
    reference: "",
    reason: "",
  });
  const [disburseForm, setDisburseForm] = useState<DisburseFunds>({
    amount: 300,
    destinationIBAN: "",
    destinationBIC: "",
    destinationCountry: "",
    destinationBank: "",
    reference: "",
    reason: "",
  });

  const handleRequestInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedValue = name === "amount" ? parseFloat(value) : value;
    setRequestForm({
      ...requestForm,
      [name]: updatedValue,
    });
  };

  const handleDisburseInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedValue = name === "amount" ? parseFloat(value) : value;
    setDisburseForm({
      ...disburseForm,
      [name]: updatedValue,
    });
  };

  const handleRequestSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      account: requestForm.account,
      amount: requestForm.amount,
      destinationIBAN: requestForm.destinationIBAN,
      destinationBIC: requestForm.destinationBIC,
      destinationCountry: requestForm.destinationCountry,
      destinationBank: requestForm.destinationBank,
      reference: requestForm.reference,
      reason: requestForm.reason,
    };

    try {
      const response = await fetch(`/v1/payout/send`, {
        method: "POST",
        headers: {
          Authorization: `Bearer`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  const handleDisburseSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      amount: disburseForm.amount,
      destinationIBAN: disburseForm.destinationIBAN,
      destinationBIC: disburseForm.destinationBIC,
      destinationCountry: disburseForm.destinationCountry,
      destinationBank: disburseForm.destinationBank,
      reference: disburseForm.reference,
      reason: disburseForm.reason,
    };

    try {
      const response = await fetch(`/v1/payout/disburse`, {
        method: "POST",
        headers: {
          Authorization: `Bearer`,
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Form submitted successfully:", result);
      } else {
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("An error occurred while submitting the form:", error);
    }
  };

  return (
    <Flex bg={"#e9fac8"} align={"center"} justify={"center"} h={"100%"}>
      <Stack
        p={"32px"}
        bg={"#ffffff"}
        w={"800px"}
        gap={"xs"}
        style={{ borderRadius: "30px" }}
      >
        <Text fw={700} fz={24} c={"#000000"} ta={"center"}>
          Request For Payout
        </Text>
        <Tabs color="#51cf66" variant="pills" defaultValue="requestPayout">
          <Tabs.List>
            <Tabs.Tab value="requestPayout">Request Payout</Tabs.Tab>
            <Tabs.Tab value="disburseFunds">Disburse Funds</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="requestPayout">
            <Box component="form" onSubmit={handleRequestSubmit}>
              <Stack>
                <Group justify="space-between" gap="sm" grow my={"10px"}>
                  <TextInput
                    my={"5px"}
                    radius="xl"
                    label="Account"
                    placeholder="Enter Account"
                    name="account"
                    value={requestForm.account}
                    onChange={handleRequestInputChange}
                  />
                  <TextInput
                    my={"5px"}
                    radius="xl"
                    label="Amount"
                    placeholder="Enter Amount"
                    name="amount"
                    value={requestForm.amount}
                    onChange={handleRequestInputChange}
                    type="number"
                  />
                </Group>
                <Group justify="space-between" gap="sm" grow my={"10px"}>
                  <TextInput
                    my={"5px"}
                    radius="xl"
                    label="Destination IBAN"
                    placeholder="Enter Destination IBAN"
                    name="destinationIBAN"
                    value={requestForm.destinationIBAN}
                    onChange={handleRequestInputChange}
                  />
                  <TextInput
                    my={"5px"}
                    radius="xl"
                    label="Destination BIC"
                    placeholder="Enter Destination BIC"
                    name="destinationBIC"
                    value={requestForm.destinationBIC}
                    onChange={handleRequestInputChange}
                  />
                </Group>
                <Group justify="space-between" gap="sm" grow my={"10px"}>
                  <Select
                    radius="xl"
                    label="Destination Country"
                    placeholder="Enter Destination Country"
                    name="destinationCountry"
                    data={[
                      "United Kingdom",
                      "Germany",
                      "France",
                      "Italy",
                      "Spain",
                      "Nigeria",
                      "Togo",
                    ]}
                    value={requestForm.destinationCountry}
                    // onChange={handleInputChange}
                  />
                  <TextInput
                    radius="xl"
                    label="Destination Bank"
                    placeholder="Enter Destination Bank"
                    name="destinationBank"
                    value={requestForm.destinationBank}
                    onChange={handleRequestInputChange}
                  />
                </Group>
                <Group justify="space-between" gap="sm" grow my={"10px"}>
                  <TextInput
                    radius="xl"
                    label="Reference"
                    placeholder="Enter Reference"
                    name="reference"
                    value={requestForm.reference}
                    onChange={handleRequestInputChange}
                  />
                  <TextInput
                    radius="xl"
                    label="Reason"
                    placeholder="Enter Reason"
                    name="reason"
                    value={requestForm.reason}
                    onChange={handleRequestInputChange}
                  />
                </Group>
                <Button
                  type="submit"
                  variant="gradient"
                  gradient={{ from: "lime", to: "green", deg: 10 }}
                  radius={"xs"}
                  size="md"
                  fw={600}
                  fz={12}
                  my={"lg"}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </Tabs.Panel>
          <Tabs.Panel value="disburseFunds">
            <Box component="form" onSubmit={handleDisburseSubmit}>
              <Stack>
                <TextInput
                  my={"5px"}
                  radius="xl"
                  label="Amount"
                  placeholder="Enter Amount"
                  name="amount"
                  type="number"
                  value={disburseForm.amount}
                  onChange={handleDisburseInputChange}
                />
                <Group justify="space-between" gap="sm" grow my={"10px"}>
                  <TextInput
                    my={"5px"}
                    radius="xl"
                    label="Destination IBAN"
                    placeholder="Enter Destination IBAN"
                    name="destinationIBAN"
                    value={disburseForm.destinationIBAN}
                    onChange={handleDisburseInputChange}
                  />
                  <TextInput
                    my={"5px"}
                    radius="xl"
                    label="Destination BIC"
                    placeholder="Enter Destination BIC"
                    name="destinationBIC"
                    value={disburseForm.destinationBIC}
                    onChange={handleDisburseInputChange}
                  />
                </Group>
                <Group justify="space-between" gap="sm" grow my={"10px"}>
                  <Select
                    radius="xl"
                    label="Destination Country"
                    placeholder="Enter Destination Country"
                    name="destinationCountry"
                    data={[
                      "United Kingdom",
                      "Germany",
                      "France",
                      "Italy",
                      "Spain",
                      "Nigeria",
                      "Togo",
                    ]}
                    value={disburseForm.destinationCountry}
                    // onChange={handleDisburseInputChange}
                  />
                  <TextInput
                    radius="xl"
                    label="Destination Bank"
                    placeholder="Enter Destination Bank"
                    name="destinationBank"
                    value={disburseForm.destinationBank}
                    onChange={handleDisburseInputChange}
                  />
                </Group>
                <Group justify="space-between" gap="sm" grow my={"10px"}>
                  <TextInput
                    radius="xl"
                    label="Reference"
                    placeholder="Enter Reference"
                    name="reference"
                    value={disburseForm.reference}
                    onChange={handleDisburseInputChange}
                  />
                  <TextInput
                    radius="xl"
                    label="Reason"
                    placeholder="Enter Reason"
                    name="reason"
                    value={disburseForm.reason}
                    onChange={handleDisburseInputChange}
                  />
                </Group>
                <Button
                  type="submit"
                  variant="gradient"
                  gradient={{ from: "lime", to: "green", deg: 10 }}
                  radius={"xs"}
                  size="md"
                  fw={600}
                  fz={12}
                  my={"lg"}
                >
                  Submit
                </Button>
              </Stack>
            </Box>
          </Tabs.Panel>
        </Tabs>
      </Stack>
    </Flex>
  );
};

export default PaymentTab;
