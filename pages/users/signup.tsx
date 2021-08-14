import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Layout from "../../components/layout";
import TextInput from "../../components/TextInput";
import { signUp } from "../../utils/accounts";
import { User } from "../../models/user";
import { useState } from "react";
import Alert from "../../components/Alert";
import withoutAuth from "../../hocs/withoutAuth";

type SignUpModel = {
    email: string;
    password: string;
    confirmPassword: string;
};

const schema = yup.object().shape({
    email: yup.string().label("Email").email().required(),
    password: yup.string().label("Password").required().min(8),
    confirmPassword: yup
        .string()
        .label("Confirm password")
        .required()
        .min(8)
        .oneOf([yup.ref("password"), null], "Passwords must match"),
});

function SignUp() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const [signUpStatus, setSignUpStatus] = useState(false);

    const onSubmit = handleSubmit((data: SignUpModel) => {
        if (data) {
            const user: User = { email: data.email, password: data.password };
            signUp(user).then((response) => {
                console.log(response);
                setSignUpStatus(true);
                reset({ email: "", password: "", confirmPassword: "" } as SignUpModel);
            });
        }
    });

    return (
        <Layout>
            <Head>
                <title>Sign up</title>
            </Head>
            <div className="columns is-centered">
                <div className="column is-half">
                    <h2 className="title">Sign up</h2>
                    <form className="box" noValidate onSubmit={onSubmit}>
                        <TextInput
                            name="email"
                            label="Email"
                            placeholder="example@test.com"
                            type="email"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            name="password"
                            label="Password"
                            placeholder="********"
                            type="password"
                            register={register}
                            errors={errors}
                        />

                        <TextInput
                            name="confirmPassword"
                            label="Confirm password"
                            placeholder="********"
                            type="password"
                            register={register}
                            errors={errors}
                        />

                        <button type="submit" className="button is-primary">
                            Sign up
                        </button>
                    </form>
                    {signUpStatus ? (
                        <Alert alertType="is-success">
                            <p>Signed up successfully. Please login</p>
                        </Alert>
                    ) : null}
                </div>
            </div>
        </Layout>
    );
}

export default withoutAuth(SignUp);
