import { render } from "../../../utils/renderComponent";
import { AppWrapper } from "../index";

describe("AppWrapper", () => {
  it("should display React Element", () => {
    // given
    const { getByText } = render(
      <AppWrapper>
        <div>Test</div>
      </AppWrapper>
    );

    // then
    expect(getByText("Test")).toBeVisible();
  });

  it("should display React Node", () => {
    // given
    const { getByText } = render(<AppWrapper>2022</AppWrapper>);

    // then
    expect(getByText("2022")).toBeVisible();
  });
});
