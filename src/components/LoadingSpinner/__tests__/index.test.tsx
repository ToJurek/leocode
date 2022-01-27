import { render } from "../../../utils/renderComponent";
import { LoadingSpinner } from "../index";

describe("LoadingSpinner", () => {
  it("should display 3 dots", () => {
    // given
    const { getAllByTestId } = render(<LoadingSpinner />);

    // then
    expect(getAllByTestId("dot-element")).toHaveLength(3);
  });
});
