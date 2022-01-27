import { filterUserByQuery } from "../filterUserByQuery";
import { mockedUser } from "../../../mocks/users";

describe("filterUserByQuery", () => {
  it("should return user based on name", () => {
    expect(filterUserByQuery(mockedUser, "leanne")).toHaveLength(1);
  });

  it("should be sensitive for letter case", () => {
    expect(filterUserByQuery(mockedUser, "Leanne")).toHaveLength(0);
  });

  it("should return based on username", () => {
    expect(filterUserByQuery(mockedUser, "bret")).toHaveLength(1);
  });

  it("should return no result based on username", () => {
    expect(filterUserByQuery(mockedUser, "abret")).toHaveLength(0);
  });

  it("should be sensitive for character", () => {
    expect(filterUserByQuery(mockedUser, "Bret")).toHaveLength(0);
  });

  it("should return empty array on empty array", () => {
    expect(filterUserByQuery([], "bret")).toHaveLength(0);
  });

  it("should return empty array on empty array and query", () => {
    expect(filterUserByQuery([], "")).toHaveLength(0);
  });

  it("should return entry array on empty query", () => {
    expect(filterUserByQuery(mockedUser, "")).toHaveLength(2);
  });
});
