import {
  Button,
  Flex,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  createStyles,
} from "@mantine/core";
import Head from "next/head";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const schema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().nonempty({ message: "Password is required" }).min(6),
});

export default function SigninPage() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: zodResolver(schema),
    validateInputOnBlur: true,
  });

  return (
    <>
      <Head>
        <title>Signin</title>
      </Head>

      <Flex mih={200} justify="center" align="center" direction="row">
        <Paper radius={10} p={30}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            Welcome back to Events App!
          </Title>

          <form
            noValidate
            autoComplete="off"
            onSubmit={form.onSubmit((values) => console.log(values))}
          >
            <TextInput
              withAsterisk
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              name="email"
              mt="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="Your password"
              mt="md"
              name="password"
              size="md"
              {...form.getInputProps("password")}
            />
            <Button type="submit" fullWidth mt="xl" size="md" uppercase>
              Login
            </Button>
          </form>
        </Paper>
      </Flex>
    </>
  );
}
