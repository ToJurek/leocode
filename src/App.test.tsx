import App from "./App";
import { render } from "./utils/renderComponent";
import { mockedUser } from "../mocks/users";

describe("App", () => {
  it("should render a loading spinner", () => {
    const spy = jest.spyOn(
      require("./store/services/user"),
      "useGetUsersQuery"
    );
    spy.mockReturnValue({
      data: [],
      isLoading: true,
      error: "",
    });
    // given
    const { getAllByTestId } = render(<App />);

    // then
    expect(getAllByTestId("dot-element")).toHaveLength(3);
  });

  it("should render an error alert", () => {
    const spy = jest.spyOn(
      require("./store/services/user"),
      "useGetUsersQuery"
    );
    spy.mockReturnValue({
      data: [],
      isLoading: false,
      error: "Alert",
    });
    // given
    const { getByText } = render(<App />);

    // then
    expect(getByText("Error")).toBeVisible();
    expect(getByText("Something not ideal might be happening.")).toBeVisible();
  });

  it("should render a list of user", () => {
    const spy = jest.spyOn(
      require("./store/services/user"),
      "useGetUsersQuery"
    );
    spy.mockReturnValue({
      data: mockedUser,
      isLoading: false,
      error: "",
    });
    // given
    const { getByText } = render(<App />);

    // then
    expect(getByText("@Bret")).toBeVisible();
    expect(getByText("@Antonette")).toBeVisible();
  });
});
