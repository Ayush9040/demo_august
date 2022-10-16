import React, { Fragment, useEffect, useState } from 'react'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import ShopCard from '../../../../Components/ShopCard/ShopCard'
import CommonBtn from '../../../../Components/commonbtn'
import { fetchSingleProduct } from '../../Shop.api'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SingleProduct = () => {
  const { productID } = useParams()
  const singleProduct = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const [productDetail, setProductDetail] = useState({})
  const navigate = useNavigate()

  const getSingleProducts = async() => {
    const { data } = await fetchSingleProduct(productID)
    setProductDetail(data.data)
  }

  useEffect(() => {
    getSingleProducts()
  }, [])

  const buyProduct=()=>{
    if (!localStorage.getItem('cart')) localStorage.setItem('cart',JSON.stringify([{ productId:productDetail._id,quantity:1 }]))
    const prevCart = JSON.parse(localStorage.getItem('cart'))
    if(prevCart.some(item=>item.productId===productDetail._id)){
      prevCart.forEach(element => {
        if(element.productId===productDetail._id){
          element.quantity = element.quantity+1
        }
      })
      
      localStorage.setItem('cart',JSON.stringify(prevCart))
    }else{
      localStorage.setItem('cart',JSON.stringify([...prevCart,{ productId:productDetail._id, quantity:1 }]))
      
    }
    navigate('/shop/cart')
  }

  return (
    <div className="single_product_div">
      <InnerNavComponent abc={singleProduct} />
      <div className="product_section">
        <div className="product_background">
          <div className="single_prod_bg">
            <div className="price_prod_div">
              <div className="price_div">
                <div className="product_details">{productDetail?.name}</div>
                <div className="product_details">₹ {productDetail?.price}</div>
                <div className="prod_desc">{productDetail?.description}</div>
              </div>

              <div className="product_img_div">
                <div className="product_image">
                  <img src={productDetail?.productThumbnail} alt="" />
                </div>
                <div className="other_product_images">
                  {productDetail?.productImage?.map((item, i) => (
                    <div className="more_options2" key={i}>
                      <img src={item} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lower_box">
              
            </div>
            <div className="buy_now_btn"  >
              <CommonBtn text="Buy Now" buttonAction={ buyProduct } />
            </div>
          </div>
          <div className="other_similar_product">
            <div className="similar_prod"> Other Similar Product:</div>
            <div className="similar_prod_card">
              {productDetail?.similarProducts?.map((item, i)=>(
                <Fragment key={i} >
                  <ShopCard  />
                </Fragment>
              ))}
            </div>
          </div>
          <div className="view_more_btn">
            <CommonBtn text="View More" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
