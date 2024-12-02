import Icon from "../Icon";

interface SearchProps {
  showTextIcon: boolean;
}

const Search = ({ showTextIcon = false }:SearchProps) => {
  
  return (
    <div className="search">
      <Icon type="Search" />
      <input type="text" placeholder="Search" />
      {showTextIcon && <Icon type="Text" />}
    </div>
  );
  
};

export default Search;
