import { render } from "../../../utils/renderComponent";
import { User } from "../index";

describe("User", () => {
  it("should display user's name and username", () => {
    // given
    const { getByText } = render(
      <User name={"Jerry Smith"} index={12} username={"js"} />
    );

    // then
    expect(getByText("Jerry Smith")).toBeVisible();
    expect(getByText("13")).toBeVisible();
    expect(getByText("@js")).toBeVisible();
  });

  it("should display only @ when no passed username", () => {
    // given
    const { getByText } = render(
      <User name={"Jerry Smith"} index={12} username={""} />
    );

    // then
    expect(getByText("Jerry Smith")).toBeVisible();
    expect(getByText("13")).toBeVisible();
    expect(getByText("@")).toBeVisible();
  });
});
