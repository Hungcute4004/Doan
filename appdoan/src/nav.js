import React, { useState } from "react"
import { FaTruck } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import './nav.css'
const Nav = ({searchbtn}) => {
    const {search, setSearch} = useState()
    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  return (
    <>
    <div className="free">
        
            <div className="icon"><FaTruck /></div>
            <p>free ship when shopping upto $1000</p>
    </div>
    <div className="main_header">
        <div className="container">
            <div className="logo">
                <img src="" alt="logo"></img>
            </div>
            <div className="search_box">
                <input type="text" value={search} placeholder="Search your product....." autoComplete="off" onChange={(e) => setSearch(e.target.value)}></input>
                <button onClick={() => searchbtn (search)}>Search</button>
            </div>
            <div className="icon">
                {
                isAuthenticated &&
                (
                <div className="account">
                    <div className="user_icon">
                        <FaRegUserCircle />
                    </div>
                    <p>Hello, {user.name}</p>
                </div>
                )
                }
                
                <div className="second_icon">
                    <Link to="/" className="link"><FaSearch /></Link>
                    <Link to="/cart" className="link"><IoBag /></Link>
                </div>
            </div>
        </div>
    </div>
    <div className="header">
        <div className="container">
            <div className="nav">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/product'>product</Link>
                </li>
                <li>
                    <Link to='/about'>about</Link>
                </li>
                <li>
                    <Link to='/contact'>contact</Link>
                </li>
            </ul>
            </div>
            <div className="auth">
            {
            isAuthenticated ?
            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><AiOutlineLogout /></button>
            :
            <button onClick={() => loginWithRedirect()}><AiOutlineLogin /></button>
            }
            </div>
        </div>
    </div>
    </>
  )
}

export default Nav