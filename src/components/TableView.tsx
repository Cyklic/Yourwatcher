import { Table } from "@mantine/core";

type Props = {
  head: JSX.Element;
  rows: JSX.Element[] | JSX.Element;
  hover?: boolean;
};

export default function TableView({ head, rows, hover }: Props) {
  return (
    <Table
      // stickyHeader
      // highlightOnHoverColor="lime"
      miw={800}
      fz={12}
      stickyHeader
      stickyHeaderOffset={0}
      highlightOnHover={hover}
      //   striped="even"
      //   stripedColor="#F0EFEF"
      verticalSpacing="lg"
      // verticalSpacing="sm"
    >
      <Table.Thead bg="#D9D9D9">{head}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
