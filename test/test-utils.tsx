import { render, RenderOptions } from "@testing-library/react";
import { NextPage } from "next";
import { FC } from "react";
import { ReactElement } from "react";

const Providers: FC = ({ children }) => {
    return children;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
    render(ui, { wrapper: Providers, ...options });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
