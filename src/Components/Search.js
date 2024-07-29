import "../Css of components/Search.css";
import { Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
function Search({ children, searchInput = false }){
    return(
        <>
          <Header searchInput={searchInput}>{children}</Header>
           {searchInput ? (
          <div className="srch">
             <i className="fa-solid fa-magnifying-glass"></i> 
            <input
              className="searchholder"
              placeholder=" What do you want to play?"
            />
          </div>
        ) : (
          ""
        )}
        </>
    );
}
export default Search;