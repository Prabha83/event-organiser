import { NextPage } from "next";
import withAuthRedirect from "./withAuthRedirect";

export default function withAuth<P>(WrappedComponent: NextPage<P>, location = "/users/signin"): NextPage<P> {
    return withAuthRedirect({
        WrappedComponent,
        location,
        expectedAuth: true,
    });
}
