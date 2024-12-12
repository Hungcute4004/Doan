import React from "react";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="about">
                    <div className="logo">
                        <img src='./img/'alt='logo'></img>
                    </div>
                    <div className="detail">
                        <p>Team: Ngo Tuan Anh, Hoang Cong Lam, Le Van Truyen, Dao Tuan Hung, Do Duc Cuong</p>
                        <div className="icon">
                            <li><FaFacebook/></li>
                            <li><FaFacebook/></li>
                            <li><FaFacebook/></li>
                            <li><FaFacebook/></li>
                            <li><FaFacebook/></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer