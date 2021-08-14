import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import withAuth from "../../hocs/withAuth";

function Conferences() {
    return (
        <Layout>
            <Head>
                <title>Conferences</title>
            </Head>
            <h1 className="title">Conferences</h1>
            <Link href="/conferences/new">
                <a>New conference</a>
            </Link>
        </Layout>
    );
}

export default withAuth(Conferences);
