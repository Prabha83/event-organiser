import {
  Button,
  Checkbox,
  Flex,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
  createStyles,
  rem,
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

const schema = z
  .object({
    firstname: z
      .string()
      .nonempty({ message: "Firstname is required" })
      .min(2, { message: "Firstname must contains at least 2 chars" }),
    lastname: z
      .string()
      .nonempty({ message: "Lastname is required" })
      .min(2, { message: "Lastname must contains at least 2 chars" }),
    email: z.string().email({ message: "Invalid email" }),
    password: z.string().nonempty({ message: "Password is required" }).min(6),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required" })
      .min(6),
  })
  .refine((data) => data.password !== data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

export default function SignupPage() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: zodResolver(schema),
    validateInputOnBlur: true,
  });

  return (
    <>
      <Head>
        <title>Signup</title>
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
            <Group>
              <TextInput
                label="Firstname"
                placeholder="Your firstname"
                size="md"
                name="firstname"
                mt="md"
                {...form.getInputProps("firstname")}
              />

              <TextInput
                label="Lastname"
                placeholder="Your lastname"
                size="md"
                name="lastname"
                mt="md"
                {...form.getInputProps("lastname")}
              />
            </Group>

            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              name="email"
              mt="md"
              {...form.getInputProps("email")}
            />
            <Group grow>
              <PasswordInput
                label="Password"
                placeholder="Your password"
                size="md"
                name="password"
                mt="md"
                {...form.getInputProps("password")}
              />
              <PasswordInput
                label="Confirm password"
                placeholder="Re-enter password"
                size="md"
                name="confirmPassword"
                mt="md"
                {...form.getInputProps("confirmPassword")}
              />
            </Group>
            <Button type="submit" fullWidth mt="xl" size="md">
              Register
            </Button>
          </form>
        </Paper>
      </Flex>
    </>
  );
}
