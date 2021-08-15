import Home from "@pages/index";
import { render } from "@testing-library/react";

describe("Home page", () => {
  it("should display the title", () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Welcome to/)).toBeInTheDocument();
  });

  it("should have sign up & sign in links", () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Sign up/)).toBeInTheDocument();
    expect(getByText(/Sign in/)).toBeInTheDocument();
  });
});
