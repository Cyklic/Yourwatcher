import { Flex, Loader } from "@mantine/core";

type LoaderProps = {
  color: string;
  size: number | string;
};

export function LoaderComponent({ color, size }: LoaderProps) {
  return (
    <Flex w="100%" justify="center" align="center">
      <Loader size={size} color={color} type="oval" />
    </Flex>
  );
}
