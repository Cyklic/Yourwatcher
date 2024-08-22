"use client";

import { Breadcrumbs, Text } from "@mantine/core";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { BreadcrumbsIcon } from "@/constant/svgIcons";

export default function Breadcrumb({ items }: Props) {
  const asPath = usePathname();

  return (
    <Breadcrumbs
      separator={<BreadcrumbsIcon />}
      mb={32}
      styles={{
        breadcrumb: { textDecoration: "none" },
      }}
    >
      {items.map((item, index) => (
        <Link href={item.href} key={index}>
          <Text
            fz={10}
            tt="uppercase"
            fw={item.href === asPath ? 600 : 500}
            c={item.href === asPath ? "#ED982A" : "black"}
            td="none"
          >
            {item.title}
          </Text>
        </Link>
      ))}
    </Breadcrumbs>
  );
}

type Items = {
  title: string;
  href: string;
};

type Props = {
  items: Items[];
};
