import React, {useState} from "react"
import Nav from './nav'
import Rout from "./rout"
import Footer from "./footer"
import { BrowserRouter } from "react-router-dom"
import ProductDetail from "./productDetail";


const App = () => {
  const [close, setClose] = useState(false)
  const [detail, setDetail] = useState([])

  const [product, setproduct] = useState(ProductDetail)
  const searchbtn = (product) => 
  {
    const Change = ProductDetail.filter((x) => 
    {
      return x.Cat === product
    })
    setproduct(Change)
  }

  const view = (product) =>
  {
    setDetail([{...product}])
    setClose(true)
  }

  return (
    <>
    <BrowserRouter>
    <Nav searchbtn={searchbtn}/>
    <Rout product={product} setproduct={setproduct} detail={detail} view={view} close={close} setClose={setClose}/>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App