import { useRouter } from "next/router";
import { Box, Flex, NavLink } from "@mantine/core";
import classes from "@/styles/components/navbar.module.scss";

// import Logo from "@/assets/logo.svg";
import {
  IconHome,
  IconSearch,
  IconPlaylistAdd,
  IconLayoutDashboard,
  IconKey,
  IconLogout,
} from "@tabler/icons-react";

export default function Navbar() {
  const router = useRouter();
  const activePath = router.pathname;

  return (
    <div className={classes.navbar}>
      <Flex h={"100%"}>
        <div className={classes.navbar_links}>
          <Box mt={50} className={classes.nav_link_container}>
            <NavLink
              href="/"
              className={`${classes.nav_link} ${
                activePath === "/" ? classes.nav_link_active : ""
              }`}
              label={
                <Flex w={"100%"} justify={""}>
                  <IconHome
                    color={activePath === "/" ? "#BC6A00" : "#878585"}
                    size="25px"
                    stroke={1}
                    width={70}
                  />
                  <span
                    style={
                      activePath === "/"
                        ? { color: "#BC6A00" }
                        : { color: "#878585" }
                    }
                  >
                    Home
                  </span>
                </Flex>
              }
            />
            <NavLink
              href="/search"
              className={`${classes.nav_link} ${
                activePath.includes("/search") ? classes.nav_link_active : ""
              }`}
              label={
                <Flex w={"100%"} justify={""}>
                  <IconSearch
                    color={
                      activePath.includes("/search") ? "#BC6A00" : "#878585"
                    }
                    size="25px"
                    stroke={1}
                    width={70}
                  />
                  <span
                    style={
                      activePath.includes("/search")
                        ? { color: "#BC6A00" }
                        : { color: "#878585" }
                    }
                  >
                    Search
                  </span>
                </Flex>
              }
            />

            <NavLink
              href="/new"
              className={`${classes.nav_link} ${
                activePath.includes("/new") ? classes.nav_link_active : ""
              }`}
              label={
                <Flex w={"100%"} justify={""}>
                  <IconPlaylistAdd
                    color={activePath === "/new" ? "#BC6A00" : "#878585"}
                    size="25px"
                    stroke={1}
                    width={70}
                  />
                  <span
                    style={
                      activePath === "/new"
                        ? { color: "#BC6A00" }
                        : { color: "#878585" }
                    }
                  >
                    Create
                  </span>
                </Flex>
              }
            />

            <NavLink
              href="/templates"
              className={`${classes.nav_link} ${
                activePath.includes("/templates") ? classes.nav_link_active : ""
              }`}
              label={
                <Flex w={"100%"} justify={""}>
                  <IconLayoutDashboard
                    color={
                      activePath.includes("/templates") ? "#BC6A00" : "#878585"
                    }
                    size="25px"
                    stroke={1}
                    width={70}
                  />
                  <span
                    style={
                      activePath.includes("/templates")
                        ? { color: "#BC6A00" }
                        : { color: "#878585" }
                    }
                  >
                    Template
                  </span>
                </Flex>
              }
            />

            <NavLink
              href="/policy"
              className={`${classes.nav_link} ${
                activePath.includes("/policiy") ? classes.nav_link_active : ""
              }`}
              label={
                <Flex w={"100%"} justify={""}>
                  <IconKey
                    size="25px"
                    stroke={1}
                    width={70}
                    color={
                      activePath.includes("/policy") ? "#BC6A00" : "#878585"
                    }
                  />
                  <span
                    style={
                      activePath.includes("/policy")
                        ? { color: "#BC6A00" }
                        : { color: "#878585" }
                    }
                  >
                    Policy
                  </span>
                </Flex>
              }
            />

            <div className={classes.settings_link}>
              <IconLogout size="25px" stroke={1} width={70} color="#BC6A00" />
              <span style={{ color: "#878585" }}>Logout</span>
            </div>
          </Box>
        </div>
      </Flex>
    </div>
  );
}
