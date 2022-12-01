import React, { useState } from "react"
import './NavbarSearchbar.css';
import { Nav, Form } from "react-bootstrap"
import useOnclickOutside from "react-cool-onclickoutside"
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [search, setSearch] = useState()

  const toggle = () => {
    setSearch(true)
  }

  const closeSearch = () => (search === true ? setSearch(false) : null)

  const ref = useOnclickOutside(() => {
    closeSearch()
  })

  return (
    <Nav className="my-auto" ref={ref}>
      <Form
        className={
          search === false
            ? "searchbar fadeOutWidth"
            : search === true
            ? "searchbar fadeInWidth"
            : "searchbar"
        }
      >
        {search === true && (
          <input
            ref={ref}
            className={
              search === true
                ? "search-input fadeIn"
                : search === false
                ? "search-input fadeOut"
                : "search-input"
            }
            type="text"
            name=""
            placeholder="Search WorkLab"
          />
        )}
        <div
          className={
            search === true
              ? "icon-bg fadeOut"
              : search === false
              ? "icon-bg fadeIn"
              : "icon-bg"
          }
        >
          {search !== true && (
            <SearchIcon
            onClick={toggle}
            className={
              search === true
                ? "search-icon fadeOut"
                : search === false
                ? "search-icon fadeIn"
                : "search-icon"
            }/>
          )}
        </div>
      </Form>
    </Nav>
  )
}

export default Search
