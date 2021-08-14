import Head from "next/head";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Layout from "../../components/layout";
import TextInput from "../../components/TextInput";
import { signIn } from "../../utils/accounts";
import { User } from "../../models/user";
import withoutAuth from "../../hocs/withoutAuth";
import { useAuth } from "../../providers/AuthProvider";
import { useRouter } from "next/dist/client/router";

type SignInModel = {
    email: string;
    password: string;
};

const schema = yup.object().shape({
    email: yup.string().label("Email").required().email(),
    password: yup.string().label("Password").required().min(8),
});

function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const { setAuthenticated } = useAuth();
    const router = useRouter();

    const onSubmit = handleSubmit((data: SignInModel) => {
        if (data) {
            const user: User = { email: data.email, password: data.password };
            signIn(user).then((response) => {
                console.log(response);
                setAuthenticated(true);
                router.push("/conferences");
            });
        }
    });

    return (
        <Layout>
            <Head>
                <title>Sign in</title>
            </Head>
            <div className="columns is-centered">
                <div className="column is-half">
                    <h2 className="title">Sign in</h2>
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

                        <button type="submit" className="button is-primary">
                            Signin
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

export default withoutAuth(SignIn);
