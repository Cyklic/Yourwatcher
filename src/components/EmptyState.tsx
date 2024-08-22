import { Button, Center, Image, Stack, Text } from "@mantine/core";
import { StaticImageData } from "next/image";
import Link from "next/link";

type Button = {
  title: string;
  href: string;
  variant?:
    | "outline"
    | "light"
    | "filled"
    | "subtle"
    | "default"
    | "transparent"
    | "white";
};

type Props = {
  image: StaticImageData;
  w: string | number;
  h: string | number;
  title: string;
  description?: string;
  btn?: Button;
  small?: boolean;
};

export default function EmptyState({
  image,
  w,
  h,
  title,
  description,
  btn,
  small,
}: Props) {
  return (
    <Stack justify="center" align="center" h="100%" gap={10}>
      <Image
        alt="empty state image"
        src={image.src}
        w={w}
        h={h}
        fit="contain"
        // w={218} h={134}
      />
      <Text fz={small ? 13 : 20} fw={700}>
        {title}
      </Text>
      {description && (
        <Text fz={small ? 12 : 16} fw={400} c="#4A4A4A">
          {description}
        </Text>
      )}

      {btn && Object.keys(btn).length > 0 && (
        <Button
          component={Link}
          href={btn.href}
          radius={0}
          size="xs"
          variant={btn.variant ?? "filled"}
          w="70%"
          //   fullWidth
        >
          {btn?.title}
        </Button>
      )}
    </Stack>
  );
}
