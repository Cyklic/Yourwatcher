import {
  Group,
  Text,
  rem,
  Image,
  Button,
  Center,
  Container,
  Flex,
  Box,
  ThemeIcon,
} from "@mantine/core";
import axios from "axios";
import {
  Dropzone,
  DropzoneProps,
  IMAGE_MIME_TYPE,
  MIME_TYPES,
} from "@mantine/dropzone";
import { useState } from "react";

import useNotification from "@/lib/hooks/useNotification";
import { core } from "@/constant/url";
import Cookies from "js-cookie";
import { IconCloudUpload, IconFile } from "@tabler/icons-react";

interface FileUploaderProps extends Partial<DropzoneProps> {
  // file: File[] | null;
  file: Record<string, string>;
  setFile: React.Dispatch<React.SetStateAction<string>>;
  error?: string;
  title?: string;
}

const FileUploader: React.FC<FileUploaderProps> = ({
  file,
  setFile,
  title,
  error,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(file);
  const { handleError } = useNotification();

  const uploadFile = (file: any) => {
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

      // setFileTypeName(file[0][0]?.type);

      const { data: res } = await uploadFile(_file);
      setFile(res.data);
    } catch (error) {
      handleError(
        "Failed to upload file",
        "An error occurred while uploading your file"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isImageUrl = (url: string): boolean => {
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".svg"];
    // Check if the URL ends with any of the image extensions
    return imageExtensions.some((ext) => url.endsWith(ext));
  };

  const renderFilePreview = () => {
    return (
      <>
        {file && isImageUrl(file?.file_url) ? (
          <Box w={140} h={140}>
            <Image
              // src={URL.createObjectURL(file[0])}
              src={file?.file_url}
              alt="File Preview"
              fit="contain"
              w="100%"
              h="100%"
            />
          </Box>
        ) : (
          <ThemeIcon variant="outline" w={180} h={100}>
            <IconFile size={80} />
          </ThemeIcon>
        )}
      </>
    );

    // if (file) {
    //   // if (file[0]?.type?.includes("image")) {
    //   return (
    //     <Box w={140} h={140}>
    //       <Image
    //         // src={URL.createObjectURL(file[0])}
    //         src={file?.file_url}
    //         alt="File Preview"
    //         fit="contain"
    //         w="100%"
    //         h="100%"

    //         // style={{
    //         //   objectFit: "contain",
    //         //   minHeight: 90,
    //         // }}
    //       />
    //     </Box>
    //   );
    // } else {
    //   // return <div>{file[0].name}</div>;
    //   // }
    // }
    // return null;
  };

  return (
    <Flex direction="column" w="100%">
      <Dropzone
        onDrop={handleDrop}
        onReject={(files) =>
          handleError(
            "File Upload Failed",
            "An error occurred while uploading your file"
          )
        }
        maxSize={3 * 1024 ** 2}
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
        loading={isLoading}
        multiple={false}
        style={{
          border: error !== "undefined" && error ? "1px solid red" : "none",
        }}
      >
        <Group
          align="center"
          justify="center"
          style={{ pointerEvents: "none", minWidth: "100%" }}
          w="100%"
          h={145}
        >
          {file?.file_url ? (
            renderFilePreview()
          ) : (
            <Flex direction="column" align="center" justify="center" w="100%">
              <Text size="xs" fw={900} c="#000">
                {title}
              </Text>

              <IconCloudUpload color="#195874" size={40} />
              <Text fz={12} mb={1} c="#195874" mt={7} ta="center">
                Drag and Drop File Here
              </Text>
              <Text fz={10} c="dimmed" mt={0} ta="center">
                or,{" "}
                <span style={{ color: "#000", fontWeight: 600 }}>
                  Click here
                </span>{" "}
                (5mb Max)
              </Text>
              {/* <Button size="xs" fz={10} variant="outline">
                Choose File
              </Button> */}
            </Flex>
          )}
        </Group>
      </Dropzone>
      {error !== "undefined" && error && (
        <Text size={"sm"} fw={400} mb={10} color="#fa5252">
          {error}
        </Text>
      )}
    </Flex>
  );
};

export default FileUploader;
