import useNotification from "@/hooks/useNotification";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  Modal,
  Tabs,
  Text,
  TextInput,
  ThemeIcon,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconInfoCircle, IconX } from "@tabler/icons-react";
import axios from "axios";
import React, {
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";
import ReactSignatureCanvas from "react-signature-canvas";
import classes from "@/styles/custom.module.scss";
import { useDisclosure } from "@mantine/hooks";

type Props = {
  openedApproval: boolean;
  closeApproval: () => void;
  setSignValue: Dispatch<SetStateAction<string>>;
  // signRef: MutableRefObject<ReactSignatureCanvas | null>;
};

export default function ApprovalModals({
  openedApproval,
  closeApproval,
  setSignValue,
}: // signRef,
Props) {
  const [tab, setTab] = useState<string | null>("signature");
  const [email, setEmail] = useState("");
  const [emailCode, setEmailCode] = useState("");
  //   const [signValue, setSignValue] = useState("");
  const [checked, setChecked] = useState(false);

  const [emailLoading, setEmailLoading] = useState<boolean>(false);
  const [confirmationLoading, setConfirmationLoading] =
    useState<boolean>(false);

  const { handleError, handleSuccess, handleInfo } = useNotification();
  const [opened, { open, close }] = useDisclosure(false);
  const signRef = useRef<ReactSignatureCanvas | null>(null);

  const clearSignRef = () => {
    signRef.current?.clear();
    closeApproval();
  };

  // send link to email
  const handleEmail = async () => {
    notifications.clean();

    if (email === "") {
      handleInfo("Memo", `Please enter an email address`);
      return;
    }

    try {
      setEmailLoading(true);
      const { data: res } = await axios.post(
        `https://seal-app-5py7q.ondigitalocean.app/api/generate/url`,
        {
          email,
        }
      );

      console.log(res?.data);
      setEmailCode(res?.data?.token);

      handleSuccess("Memo", `Email has been sent to ${email}`);
      setEmail("");
      closeApproval();
      open();
    } catch (error) {
      handleError("Memo", `Email sending failed`);
      console.log(error);
    } finally {
      setEmailLoading(false);
    }
  };

  // fetch signature from api
  const fetchSignature = async () => {
    try {
      setConfirmationLoading(true);
      const { data: res } = await axios.get(
        `https://seal-app-5py7q.ondigitalocean.app/api/${emailCode}/signature`
      );

      setSignValue(res?.data);

      close();
    } catch (error) {
      handleError("Memo", "Memo has not been signed");
      setConfirmationLoading(false);
      console.log(error);
    } finally {
      setConfirmationLoading(false);
    }
  };

  return (
    <Box>
      {/* Approval Flow  */}
      <Modal
        centered
        size={550}
        opened={openedApproval}
        onClose={closeApproval}
        withinPortal
        title={
          <Text fz={22} fw={500}>
            Approve this Request
          </Text>
        }
      >
        <Box mt={20}>
          <Text fz={14}>
            In order to approve this request, select the means below.
          </Text>
          <Tabs
            color="#E8EEF1"
            value={tab}
            onChange={setTab}
            variant="pills"
            mt={6}
          >
            <Tabs.List bg="#F9F9F9" grow>
              <Tabs.Tab
                value="email"
                bg={tab !== "email" ? "#F9F9F9" : ""}
                c={tab !== "email" ? "#B1B1B1" : "#195874"}
                h={40}
                fw={500}
              >
                Email
              </Tabs.Tab>
              <Tabs.Tab
                value="signature"
                bg={tab !== "signature" ? "#F9F9F9" : ""}
                c={tab !== "signature" ? "#B1B1B1" : "#195874"}
                h={40}
                fw={500}
              >
                Signature
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="email">
              <Box mt={20}>
                <TextInput
                  label={
                    <Text fz={14} fw={500} mb={2}>
                      Email
                    </Text>
                  }
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  autoFocus
                  placeholder="Enter Email Address"
                  mb={4}
                  size="md"
                  radius={0}
                />
                <Flex align="center">
                  <IconInfoCircle color="#00A46C" size={12} />
                  <Text c="#00A46C" fz={10}>
                    A link will be sent to your email address. Please, click on
                    the link to enable you approve the request.
                  </Text>
                </Flex>

                <Flex
                  gap={10}
                  fw={500}
                  mt="md"
                  mb="md"
                  pt="md"
                  justify="space-between"
                  align="center"
                >
                  <Button
                    size="xs"
                    onClick={closeApproval}
                    w={100}
                    variant="outline"
                    color="#8D8D8D"
                    radius={0}
                  >
                    Cancel
                  </Button>

                  <Button
                    size="xs"
                    w={100}
                    onClick={handleEmail}
                    loading={emailLoading}
                    color="#1B5773"
                    radius={0}
                    type="submit"
                  >
                    Save
                  </Button>
                </Flex>
                {/* <Checkbox
                  label={
                    <Text fz={14} fw={500}>
                      Send a copy of the email to yourself
                    </Text>
                  }
                  // {...form.getCheckboxProps("sendCopy")}
                  radius={0}
                  mt={"md"}
                /> */}
              </Box>
            </Tabs.Panel>

            <Tabs.Panel value="signature">
              <Box w="100%" mb={10} pt={20}>
                <Group justify="space-between" align="center">
                  <Text fz={14} fw={400} mb={4}>
                    Signature
                  </Text>

                  <ThemeIcon
                    variant="transparent"
                    onClick={() => signRef.current?.clear()}
                  >
                    <IconX size={20} />
                  </ThemeIcon>
                </Group>
                <ReactSignatureCanvas
                  ref={signRef}
                  penColor="blue"
                  canvasProps={{
                    className: `${classes.memoSignContainerTwo}`,
                  }}
                />
              </Box>
              <Flex
                gap={10}
                fw={500}
                mt="md"
                mb="md"
                pt="md"
                justify="space-between"
                align="center"
              >
                <Button
                  size="xs"
                  onClick={clearSignRef}
                  w={100}
                  variant="outline"
                  color="#8D8D8D"
                  radius={0}
                >
                  Cancel
                </Button>

                <Button
                  size="xs"
                  w={100}
                  onClick={() => {
                    const signature = signRef.current?.toDataURL("image/png");
                    if (!signature) return;
                    setSignValue(signature);
                    closeApproval();
                  }}
                  // loading={pdfLoading}
                  color="#1B5773"
                  radius={0}
                  type="submit"
                >
                  Save
                </Button>
              </Flex>
            </Tabs.Panel>
          </Tabs>
        </Box>
      </Modal>

      {/* Confirmation Modal */}
      <Modal
        centered
        closeOnClickOutside={false}
        closeOnEscape={false}
        withCloseButton={false}
        opened={opened}
        onClose={close}
        title=""
        size={350}
      >
        <Box w="100%" px={20}>
          <Text fz={18} fw={500} mt={20}>
            Confirmation
          </Text>

          <Checkbox
            mt={20}
            radius={0}
            checked={checked}
            onChange={(event) => setChecked(event.currentTarget.checked)}
            label="I have signed to approve this request."
          />

          <Flex align="flex-end" justify="flex-end" mt={20}>
            <Button
              size="xs"
              w={70}
              onClick={fetchSignature}
              disabled={!checked}
              loading={confirmationLoading}
              color="#1B5773"
              radius={0}
              type="submit"
            >
              OK
            </Button>
          </Flex>
        </Box>
      </Modal>
    </Box>
  );
}
