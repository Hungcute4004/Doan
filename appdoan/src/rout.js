import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Product from "./product";

const Rout = ({product, setproduct, detail, view, close, setClose}) =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home detail={detail} view={view} close={close} setClose={setClose}/>} />
            <Route path="/product" element={<Product product={product} setproduct={setproduct} detail={detail} view={view} close={close} setClose={setClose}/>} />
        </Routes>
        </>
    )
}

export default Rout