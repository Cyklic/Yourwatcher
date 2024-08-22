import { Box, Container, Text, TextInput, Textarea } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import axios from "axios";
import { z } from "zod";
import Form from "./Form";

type Props = {
  params: { id: string };
};

export default async function EditPost({ params: { id } }: Props) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <Container size={1200}>
      <Form data={data} />
    </Container>
  );
}
