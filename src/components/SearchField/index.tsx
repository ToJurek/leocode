interface IProps {
  setQuery: (query: string) => void;
}

export const SearchField = ({ setQuery }: IProps) => (
  <div className="pt-3">
    <input
      type="text"
      className="border-2 p-2 w-80"
      placeholder="Search for Startups..."
      id="search-filter"
      data-cy="search-filter"
      onChange={(event) => setQuery(event.target.value.toLowerCase() as string)}
    />
  </div>
);
