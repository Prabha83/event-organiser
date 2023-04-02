import { ActionIcon, AppShell, Footer, Group, Text } from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { PropsWithChildren } from "react";

export const AppContainer = (props: PropsWithChildren) => {
  return (
    <AppShell
      styles={{
        main: {
          background: "#FFFFFF",
          width: "100vw",
          height: "100vh",
        },
      }}
      fixed
      footer={
        <>
          <MantineLogo size={28} />
          <Footer height={60} p="md">
            <Group spacing={0} position="right" noWrap>
              <ActionIcon size="lg">
                <IconBrandTwitter size="1.05rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg">
                <IconBrandYoutube size="1.05rem" stroke={1.5} />
              </ActionIcon>
              <ActionIcon size="lg">
                <IconBrandInstagram size="1.05rem" stroke={1.5} />
              </ActionIcon>
            </Group>
          </Footer>
        </>
      }
    >
      {props.children}
    </AppShell>
  );
};
