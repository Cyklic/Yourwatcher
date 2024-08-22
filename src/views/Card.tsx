import { Card, CardSection, Group, SimpleGrid, Text } from "@mantine/core";
import Link from "next/link";

type Props = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function CardDesign({ userId, id, title, body }: Props) {
  return (
    <Card shadow="xl" withBorder component={Link} href={`/${id}`}>
      <CardSection>
        <Text px={15} lineClamp={1} fw={700}>
          {title}
        </Text>
      </CardSection>
      <Group justify="space-between" my={20}>
        <Text>{userId}</Text>
        <Text>{id}</Text>
      </Group>
      <Text>{body}</Text>
    </Card>
  );
}
