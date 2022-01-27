import { render } from "../../../utils/renderComponent";
import { Header } from "../index";

describe("Header", () => {
  it("should display company's name and list title", () => {
    // given
    const { getByText } = render(<Header />);

    // then
    expect(getByText("LEOCODE")).toBeVisible();
    expect(getByText("User list")).toBeVisible();
  });
});
