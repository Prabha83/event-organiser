import Signin from "@pages/users/signin";
import { render } from "@testing-library/react";

describe("Signin page", () => {
  it("should display the signin form", () => {
    const { container, getByText } = render(<Signin />);

    expect(container.getElementsByClassName("title").item(0)?.innerHTML).toBe("Sign in");
  });
});
