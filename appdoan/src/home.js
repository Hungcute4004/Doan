import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiTruck } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { HiOutlineReceiptPercent } from "react-icons/hi2";
import { FaHeadphones } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import Homeproduct from "./homeproduct";
import { FaRegWindowClose } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

import './home.css'

const Home = ({detail, view, close, setClose}) => {

    return(
        <>
        {
        close ?
        
            <div  className="product_detail">
                <div  className="container">
                    <button onClick={() => setClose(false)} className="closebtn"><FaRegWindowClose /></button>
                    {
                        detail.map((curElm) =>
                        {
                            return(
                                <div className="product_box">
                                    <div className="img-box">
                                        <img src={curElm.img} alt={curElm.Title}></img>
                                    </div>
                                    <div className="detail">
                                        <h4>{curElm.Cat}</h4>
                                        <h2>{curElm.Title}</h2>
                                        <p>Co the ban se thich</p>
                                        <h3>{curElm.price}</h3>
                                        <button><BsFillCartPlusFill /> Them vao gio hang</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="product_box"></div>
                </div>
            </div> :null
        }
        <div className="top_banner">
            <div className="container">
                <div className="detail">
                    <h2>The best Note Book Collection 2024</h2>
                    <Link to='/product' className="link">Shop now <FaArrowRight /></Link>
                </div>
                <div className="img_box">
                    <img src='./image/8aaeb2006650dc0e8541.png' alt='sliderimg'></img>
                </div>
            </div>
        </div>
        <div className="product_type">
            <div className="container">
                <div className="box">
                    <div className="img_box">
                        <img src="./image/001 (1).jpg" alt='mobile'></img>
                    </div>
                    <div className="detail">
                        <p>23 product</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="./image/001 (2).jpg" alt='mobile'></img>
                    </div>
                    <div className="detail">
                        <p>24 product</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="./image/001 (3).jpg" alt='mobile'></img>
                    </div>
                    <div className="detail">
                        <p>25 product</p>
                    </div>
                </div>
                <div className="box">
                    <div className="img_box">
                        <img src="./image/001 (4).jpg" alt='mobile'></img>
                    </div>
                    <div className="detail">
                        <p>26 product</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="about">
            <div className="container">
                <div className="box">
                    <div className="icon">
                    <FiTruck />
                    </div>
                    <div className="detail">
                        <h3>Free Shipping</h3>
                        <p>Oder about $1000</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <FiDollarSign />
                    </div>
                    <div className="detail">
                        <h3>Return & Refund</h3>
                        <p>Money Back Gaurenty</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <HiOutlineReceiptPercent />
                    </div>
                    <div className="detail">
                        <h3>Member Discount</h3>
                        <p>On every Oder</p>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                    <FaHeadphones />
                    </div>
                    <div className="detail">
                        <h3>Customer Support</h3>
                        <p>every Time Call Support</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="product">
            <h2>Top Products</h2>
            <div className="container">
                {
                    Homeproduct.map((curElm) => 
                    {
                        return(
                            <div className="box" key={curElm.id}>
                                <div className="img_box">
                                    <img src={curElm.img} alt={curElm.Title}></img>
                                    <div className="icon">
                                    <li><IoCartOutline /></li>
                                    <li onClick={() => view (curElm)}><FaRegEye /></li>
                                    <li><FaRegHeart /></li>
                                    </div>
                                </div>
                                <div className="detail">
                                    <p>{curElm.Cat}</p>
                                    <h3>{curElm.Title}</h3>
                                    <h4>{curElm.price}</h4>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="box"></div>
            </div>
        </div>
        <div className="banner">
            <div className="container">
                <div className="detail">
                    <h4>Last Technology </h4>
                    <h3>Apple iPad 10.2  9th Gen - 2021</h3>
                    <p><FiDollarSign /> 986</p>
                    <Link to='/product' className="link">Shop Now <aArrowRight/></Link>
                </div>
                <div className="img_box">
                    <img src='./image/8aaeb2006650dc0e8541.png' alt='slidering'></img>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home