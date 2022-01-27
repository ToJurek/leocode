import { render } from "../../../utils/renderComponent";
import { ErrorAlert } from "../index";

describe("ErrorAlert", () => {
  it("should display error alert", () => {
    // given
    const { getByText } = render(<ErrorAlert />);

    // then
    expect(getByText("Error")).toBeVisible();
    expect(getByText("Something not ideal might be happening.")).toBeVisible();
  });
});
