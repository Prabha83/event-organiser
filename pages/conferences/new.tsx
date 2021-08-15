import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Layout from "@components/layout";
import TextInput from "@components/TextInput";
import withAuth from "@src/hocs/withAuth";

type NewConferenceModel = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  title: yup.string().label("Title").required(),
  description: yup.string().label("Description").required(),
  category: yup.string().label("Category").required(),
});

function NewConference() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data: NewConferenceModel) => console.log(data));

  return (
    <Layout>
      <Head>
        <title>New conferences</title>
      </Head>

      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title">New conferences</h2>
          <form className="box" noValidate onSubmit={onSubmit}>
            <TextInput name="title" label="Title" placeholder="title" type="text" register={register} errors={errors} />

            <TextInput
              name="description"
              label="Description"
              placeholder="conference detail"
              type="textarea"
              register={register}
              errors={errors}
            />

            <TextInput
              name="category"
              label="Category"
              placeholder="Category"
              type="text"
              register={register}
              errors={errors}
            />

            <button type="submit" className="button is-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default withAuth(NewConference);
