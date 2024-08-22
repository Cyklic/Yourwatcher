import {
  Button,
  Card,
  Group,
  Image,
  Stack,
  Text,
  ThemeIcon,
} from "@mantine/core";
import { IconFileUpload, IconFile } from "@tabler/icons-react";
import { Dropzone, DropzoneProps, MIME_TYPES } from "@mantine/dropzone";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import useNotification from "@/hooks/useNotification";
import { core } from "@/constant/url";

interface Props extends Partial<DropzoneProps> {
  // setFileURLS: Dispatch<SetStateAction<string[]>>;
  file?: { file_name: string, file_url: string };
  update: (track: number, url: { file_name: string, file_url: string }) => void;
  onDelete?: (index: number) => void;
  track: number;
}

export function FileUpload({
  file,
  update,
  onDelete,
  // setFileURLS,
  track,
  ...props
}: Props) {
  const { handleError } = useNotification();

  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = () => onDelete && onDelete(track);

  const uploadFile = (file: File) => {
    const token = Cookies.get("auth");
    const formData = new FormData();
    formData.append("file", file);

    return axios.post(`${core}/liaison/upload`, formData, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  const handleDrop = async (files: File[]) => {
    try {
      setIsLoading(true);
      if (!files || files.length < 1) return;

      const _file = files[0];

      const { data: res } = await uploadFile(_file);
      // setFileURLS((prev) => [...prev, res.data]);
      update(track, res.data);
      //  setFile(res.data);
    } catch (e) {
      if (axios.isAxiosError(e))
        return handleError("Failed to upload file", e.response?.data.message);
      handleError(
        "Failed to upload file",
        "An error occurred while uploading your file"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isImageUrl = (url: { file_name: string, file_url: string }): boolean => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg"];
    // Check if the URL ends with any of the image extensions

    console.log({ url })
    return imageExtensions.some((ext) => url.file_url.endsWith(ext));
  };

  const renderImagePreview = () => {
    return (
      <>
        {file && isImageUrl(file) ? (
          <Stack h="100%" style={{ flexGrow: 1 }}>
            <Image
              src={file.file_url}
              alt="File Preview"
              w={180}
              h={100}
              // h="100%"
              fit="contain"
            />
            <Button
              size="xs"
              variant="outline"
              mt={4}
              fz={8}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              Delete File
            </Button>
          </Stack>
        ) : (
          <Stack>
            <ThemeIcon variant="outline" w={180} h={100}>
              <IconFile />
            </ThemeIcon>
            <Button
              size="xs"
              variant="outline"
              mt={4}
              fz={8}
              // color="red.5"
              onClick={(e) => {
                e.stopPropagation();
                handleDelete();
              }}
            >
              Delete File
            </Button>
          </Stack>
        )}
      </>
    );
  };
  return (
    <Dropzone
      onDrop={handleDrop}
      loading={isLoading}
      onReject={(files) =>
        handleError(
          "Failed to upload file",
          "Invalid File Format or File Size too Large"
        )
      }
      maxSize={5 * 1024 ** 2}
      accept={[
        MIME_TYPES.pdf,
        MIME_TYPES.csv,
        MIME_TYPES.doc,
        MIME_TYPES.docx,
        MIME_TYPES.png,
        MIME_TYPES.xlsx,
        MIME_TYPES.jpeg,
        MIME_TYPES.svg,
        MIME_TYPES.xls,
      ]}
      {...props}
    >
      <Group
        justify="center"
        gap="xl"
        // mih={220}
        h={150}
        style={{ pointerEvents: "all" }}
      >
        {file ? (
          renderImagePreview()
        ) : (
            <Card h="100%" w={{ base: 250, md: 600 }}>
            <Stack gap={5} align="center" justify="center" h="100%">
              <IconFileUpload color="#046F7B" />
              <Text fz={10} fw={900} c="#046F7B">
                Upload file
              </Text>
              <Text fz={8} c="dimmed" mt={4} ta="center">
                Supports: jpeg, png, xls, pdf, docx - Max: 5MB
              </Text>
            </Stack>
          </Card>
        )}
      </Group>
    </Dropzone>
  );
}
