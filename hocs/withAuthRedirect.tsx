import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { ReactElement } from "react";
import { useAuth } from "../providers/AuthProvider";

function DefaultLoadingFallback(): ReactElement {
    return <p>Loading...</p>;
}

function isBrowser(): boolean {
    return typeof window !== "undefined";
}

export default function withAuthRedirect<CP = {}, IP = {}>({
    WrappedComponent,
    LoadingComponent = DefaultLoadingFallback,
    expectedAuth,
    location,
}: {
    WrappedComponent: NextPage<CP, IP>;
    LoadingComponent?: NextPage;
    expectedAuth: boolean;
    location: string;
}): NextPage<CP, IP> {
    const WithAuthRedirectWrapper: NextPage<CP, IP> = (props) => {
        const router = useRouter();
        const { isAuthenticated, isLoading } = useAuth();

        if (isLoading) {
            return <LoadingComponent />;
        }

        if (isBrowser() && expectedAuth !== isAuthenticated) {
            router.push(location);
            return <></>;
        }
        return <WrappedComponent {...props} />;
    };
    return WithAuthRedirectWrapper;
}
