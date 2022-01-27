import { render } from "../../../utils/renderComponent";
import { SearchField } from "../index";
import { fireEvent } from "@testing-library/react";

describe("SearchField", () => {
  let setQueryMock: jest.Mock;

  beforeEach(() => {
    setQueryMock = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should display typed value and pass it to mocked function", () => {
    // given
    const { getByRole } = render(<SearchField setQuery={setQueryMock} />);

    // when
    fireEvent.input(getByRole("textbox"), { target: { value: "Max" } });

    // then
    expect(getByRole("textbox")).toHaveValue("Max");
    expect(setQueryMock).toBeCalledWith("max");
  });

  it("should display special characters typed value and pass it to mocked function", () => {
    // given
    const { getByRole } = render(<SearchField setQuery={setQueryMock} />);

    // when
    fireEvent.input(getByRole("textbox"), { target: { value: "#$%^" } });

    // then
    expect(getByRole("textbox")).toHaveValue("#$%^");
    expect(setQueryMock).toBeCalledWith("#$%^");
  });
});
