import Signup from "@pages/users/signup";
import { render } from "@testing-library/react";

describe("Signup page", () => {
  it("should display the signup form", () => {
    const { container } = render(<Signup />);

    expect(container.getElementsByClassName("title").item(0)?.innerHTML).toBe("Sign up");
  });
});
