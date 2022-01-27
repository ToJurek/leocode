import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { UserList } from "./components/UserList";
import { AppWrapper } from "./components/AppWrapper";
import { useGetUsersQuery } from "./store/services/user";
import { useState } from "react";
import { filterUserByQuery } from "./utils/filterUserByQuery";
import { ErrorAlert } from "./components/ErrorAlert";

function App() {
  const { data, error, isLoading } = useGetUsersQuery();
  const [query, setQuery] = useState("");
  return (
    <AppWrapper>
      <Header />
      <SearchField setQuery={setQuery} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && data && (
        <UserList users={filterUserByQuery(data, query)} />
      )}
      {!isLoading && error && <ErrorAlert />}
    </AppWrapper>
  );
}

export default App;
