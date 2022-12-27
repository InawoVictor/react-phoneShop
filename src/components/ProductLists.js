import { useState } from "react";
import Products from "./Products";
import Title from "./Title";
import { storeProducts } from "../data";

const ProductLists = () => {
  const [products, setProducts] = useState(storeProducts)

  return (
    <>
      <div className="py-5">
        <div className='container'>
          <Title name="our" title='products' />
          <div className="row">
            {
              products.map(product => {
                return(
                  <div className='col-9 mx-auto col-md-6 col-lg-3 my-3' key={product.id}>
                    <Products product={product} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductLists
