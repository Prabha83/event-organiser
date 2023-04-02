import { Box, Button, Flex, Group, TextInput, Textarea } from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, { message: "Name should have at least 2 letters" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .nonempty({ message: "Message is required" })
    .max(50, { message: "not more than 50" }),
});

export default function ContactusPage() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validate: zodResolver(schema),
    validateInputOnBlur: true,
  });

  return (
    <Flex mih={300} justify="center" align="center" direction="row">
      <Box miw={500}>
        <form
          noValidate
          autoComplete="off"
          onSubmit={form.onSubmit((values) => console.log(values))}
        >
          <TextInput
            withAsterisk
            label="Name"
            name="name"
            size="md"
            placeholder="Your full name"
            {...form.getInputProps("name")}
          />

          <TextInput
            withAsterisk
            label="Email"
            name="email"
            size="md"
            mt="md"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <Textarea
            name="message"
            placeholder="Your message"
            label="Message"
            mt="md"
            withAsterisk
            {...form.getInputProps("message")}
          />

          <Group position="right" mt="xl">
            <Button type="submit" fullWidth uppercase>
              Submit
            </Button>
          </Group>
        </form>
      </Box>
    </Flex>
  );
}
