import withLayout from "@/layouts/appLayout";
import {
  Button,
  Card,
  CardSection,
  Container,
  Divider,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import axios from "axios";
import Link from "next/link";

type Props = {
  params: { id: string };
};

async function SinglePost({ params: { id } }: Props) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <Container size={1200}>
      <Paper shadow="sm" radius="xs" withBorder mt={30} px={20}>
        <Group justify="space-between" align="center">
          <Text tt="capitalize" fw={600} fz={20} py={30}>
            {data.title}
          </Text>

          <Button component={Link} href={`/edit/${data.id}`}>
            Edit
          </Button>
        </Group>
      </Paper>

      <Card withBorder mt={50}>
        <CardSection>
          <Group justify="space-between" align="center" px={20} h={100}>
            <Text fz={14} fw={500}>
              {data.userId}
            </Text>
            <Text fw={500} fz={14}>
              {data.id}
            </Text>
          </Group>
          <Divider />
        </CardSection>

        <Text px={10} py={50}>
          {data.body}
        </Text>
      </Card>
    </Container>
  );
}

export default withLayout(SinglePost);
