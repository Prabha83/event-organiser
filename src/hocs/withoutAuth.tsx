import { NextPage } from "next";
import withAuthRedirect from "./withAuthRedirect";

export default function withoutAuth<P>(WrappedComponent: NextPage<P>, location = "/conferences"): NextPage<P> {
    return withAuthRedirect({
        WrappedComponent,
        location,
        expectedAuth: false,
    });
}
