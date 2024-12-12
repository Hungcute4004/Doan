import React from "react";
import ProductDetail from "./productDetail";
import { IoCartOutline } from "react-icons/io5";
import { FaRegEye } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa6";
import './product.css'
import { FaRegWindowClose } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";

const Product = ({product, setproduct, detail, view, close, setClose}) => {

    const filtterproduct = (product) =>
    {
        const update = ProductDetail.filter((x) =>
        {
            return x.Cat === product;
        })
        setproduct(update);
    }
    const Allproduct = () =>
    {
        setproduct(ProductDetail)
    }
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

        <div  className="product">
        <h2># Product</h2>
        <p>Home . Product</p>
            <div className="container">
                <div className="filter">
                    <div className="categories">
                        <h3>categories</h3>
                        <ul>
                        <li onClick={() => Allproduct ()}>All product</li>
                            <li onClick={() => filtterproduct ("Samsung")}>Samsung</li>
                            <li onClick={() => filtterproduct ("Oppo")}>Oppo</li>
                            <li onClick={() => filtterproduct ("Iphone")}>Iphone</li>
                            <li onClick={() => filtterproduct ("Redmi")}>Redmi</li>
                            <li onClick={() => filtterproduct ("Huwei")}>Huwei</li>
                        </ul>
                    </div>
                </div>
                <div className="productbox">
                    <div className="contact">
                        {
                            product.map((curElm) =>
                            {
                                return(
                                    <>
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
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product