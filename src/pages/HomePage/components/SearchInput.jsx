import { BiSearch } from "react-icons/bi";

const SearchInput = ({
  query,
  onQuerySubmit,
  onQueryChange,
  placeholder,
  className,
  submitDisabled
}) => {
  return (
    <form className={className} onSubmit={onQuerySubmit}>
      <div className="input-group ">
        <input
          className="form-control"
          type="search"
          placeholder={placeholder}
          aria-label="Search"
          value={query}
          onChange={onQueryChange}
        />
        <button className="btn btn-success" type="submit" disabled ={submitDisabled()}>
          <BiSearch />{" "}
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
