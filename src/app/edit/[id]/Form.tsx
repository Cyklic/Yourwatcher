"use client";

// import useNotification from "@/hooks/useNotification";
import {
  Box,
  Button,
  Flex,
  Group,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";

type Props = {
  data: { title: string; body: string; id: number };
};

const schema = z.object({
  title: z.string().min(1, "Title is required"),
  body: z.string().min(1, "Body is required"),
});

export default function Form({ data }: Props) {
  // const { handleSuccess, handleError } = useNotification();
  const { push } = useRouter();
  const [visible, setVisible] = useState(false);
  const form = useForm({
    initialValues: {
      title: data.title,
      body: data.body,
    },
    validate: zodResolver(schema),
  });

  const handleSubmit = async () => {
    try {
      setVisible(true);
      const { data: res } = await axios.patch(
        `https://jsonplaceholder.typicode.com/posts/${data.id}`,
        {
          title: form.values.title,
          body: form.values.body,
        }
      );
      // handleSuccess("Post updated", "Post updated successfully");
      push(`/${data.id}`);
    } catch (error) {
    } finally {
      setVisible(false);
    }
  };

  return (
    <Box
      component="form"
      my={50}
      onSubmit={form.onSubmit(() => handleSubmit())}
    >
      <Text mb={50} fz={20} fw={600}>
        Edit Post
      </Text>

      <TextInput
        size="md"
        mb="md"
        label="Title"
        placeholder="Enter title"
        {...form.getInputProps("title")}
      />

      <Textarea
        h={200}
        size="md"
        mb="md"
        label="Body"
        placeholder="Enter body"
        {...form.getInputProps("body")}
      />

      <Group justify="space-between" align="center">
        <Button variant="outline">Cancel</Button>
        <Button type="submit">Save</Button>
      </Group>
    </Box>
  );
}
