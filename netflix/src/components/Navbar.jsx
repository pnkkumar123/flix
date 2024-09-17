import React from 'react'
import styled from 'styled-components'
import { FaSearch, FaBell } from "react-icons/fa";

function Navbar() {
  return (
    <Wrapper>
      <div className="logo">
        <h1>Netflix</h1>
      </div>
      <div className="nav-items">
        <span>Browse</span>
        <span>Genre</span>
        <span>Home</span>
        <span>Movies</span>
        <span>TV Shows</span>
      </div>
      <div className="actions">
      <FaBell className="icon bell" />
        <div className="search">
          <FaSearch className="icon" />
          <input type="search" placeholder="Search..." />
        </div>
       
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:5rem;
 
  background-color: #141414;
  color: white;
  width: 100%;

  .logo h1 {
    color: red;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }

  .nav-items {
    display: flex;
    gap: 2rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .nav-items span {
    cursor: pointer;
    transition: color 0.3s ease;
  }

  .nav-items span:hover {
    color: #e50914;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 1.5rem; /* Increase spacing between search and bell icon */
  }

  .search {
    display: flex;
    align-items: center;
    position: relative;
  }

  .search input {
    padding: 0.5rem 2rem 0.5rem 0.5rem; /* Add padding to the right for the icon */
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    background-color: #333;
    color: white;
  }

  .search input::placeholder {
    color: #ccc;
  }

  .search input:focus {
    outline: none;
    box-shadow: 0 0 5px #e50914;
  }

  .search .icon {
    position: absolute;
    right: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    color: #fff;
  }

  .icon.bell {
    font-size: 1.5rem;
    cursor: pointer;
  }
`
export default Navbar;
