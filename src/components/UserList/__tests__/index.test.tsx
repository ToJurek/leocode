import { render } from "../../../utils/renderComponent";
import { UserList } from "../index";
import { mockedUser } from "../../../../mocks/users";

describe("UserList", () => {
  it("should not display any user", () => {
    // given
    const { queryByText } = render(<UserList />);

    // then
    expect(queryByText("@")).not.toBeInTheDocument();
  });

  it("should not display two users", () => {
    // given
    const { getByText } = render(<UserList users={mockedUser} />);

    // then
    expect(getByText("@Bret")).toBeVisible();
    expect(getByText("@Antonette")).toBeVisible();
  });
});
