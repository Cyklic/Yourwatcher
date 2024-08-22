import { ComponentType, useEffect, useState } from "react";
import {
  AppShell,
  AppShellHeader,
  AppShellMain,
  Burger,
  Center,
  Container,
  Loader,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "@/styles/layouts/app-layout.module.scss";
import Header from "@/components/Header";
import User from "@/lib/store/user.store";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import { core } from "@/constant/url";
import { colors } from "@/theme/colors";

export default function withLayout(
  Component: ComponentType<{ data: any; params: any }>
) {
  function ApplicationShell(props: any) {
    return (
      <AppShell
        transitionDuration={500}
        transitionTimingFunction="ease"
        classNames={{
          header: classes.app_layout_header,
          main: classes.app_layout_main,
        }}
        header={{ height: 70, offset: true, collapsed: false }}
        padding="md"
      >
        <AppShellHeader withBorder={false} bg="#F3F5F7">
          <Header />
        </AppShellHeader>

        <AppShellMain>
          <Component {...props} />
        </AppShellMain>
      </AppShell>
    );
  }

  return ApplicationShell;
}
