import React, { useEffect, useState } from 'react'
import './style.scss'
import InnerNavComponent from '../../../../Components/InnerNavComponent'
import ShopCard from '../../../../Components/ShopCard/ShopCard'
import CommonBtn from '../../../../Components/commonbtn'
import { fetchSingleProduct } from '../../Shop.api'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  const { productID } = useParams()
  const singleProduct = {
    title: 'Shop',
    color: 'orange',
    menuColor: 'orange',
    menuItems: [],
  }

  const [productDetail, setProductDetail] = useState({})

  const getSingleProducts = async() => {
    const { data } = await fetchSingleProduct(productID)
    setProductDetail(data.data)
  }

  useEffect(() => {
    getSingleProducts()
  }, [])

  return (
    <div className="single_product_div">
      <InnerNavComponent abc={singleProduct} />
      <div className="search_bar">
        <div>All Categories</div>
        <div>Search</div>
      </div>
      <div className="product_section">
        <div className="product_background">
          <div className="single_prod_bg">
            <div className="price_prod_div">
              <div className="price_div">
                <div className="product_details">{productDetail.name}</div>
                <div className="product_details">{productDetail.price}</div>
                <div className="prod_desc">{productDetail.description}</div>
              </div>

              <div className="product_img_div">
                <div className="product_image">
                  <img src={productDetail.productThumbnail} alt="" />
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
            <div className="buy_now_btn">
              <CommonBtn text="Buy Now" />
            </div>
          </div>
          <div className="other_similar_product">
            <div className="similar_prod"> Other Similar Product:</div>
            <div className="similar_prod_card">
              {/* {productDetail?.similarProducts?.map((item, i)=>(
                <ShopCard />
              ))} */}
              {/* <ShopCard />
              <ShopCard />
              <ShopCard /> */}
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
