import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCartPlus } from 'react-icons/fa'

import { useState } from 'react';



const Products = ({product}) => {


  return (
    <ProductWrapper 
      
    >
      <div className='card'>
        <div className='img-container p-5' onClick={() => {
          console.log('you clicked me on the image')
        }
        }>
          <Link to={`/details`}>
            <img 
              src={product.img}
              alt={product.title}
              className='card-img-top'
            />
          </Link>
          <button
            className='cart-btn'
            disabled={product.inCart? true: false}
            onClick={() =>{
              console.log('added to cart')
            }}
          >
            {
              product.inCart? (<p className='text-capitalize mb-0' disabled>
                {""} in cart
              </p>):
              <FaCartPlus />
            }
          </button>
        </div>
        {/*card footer*/}
        <div 
          className='card-footer d-flex justify-content-between'
        >
          <p className='align-self-center mb-0'>
            {product.title}
          </p>
          <h5 className='text-blue font-italic mb-0'>
            <span className='mr-1'>$</span>
            {product.price}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  .card{
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover{
    .card{
      border: .04rem solid rgba(0,0,0, .2);
      box-shadow: 2px 2px 5px 0 rgba(0,0,0, .2);
    }
    .card-footer{
      background: rgb(247, 247, 247);
    }
  }
  .img-container{
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.2);
  }
  .cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: .2rem .4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius:.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear
  }
  .img-container:hover .cart-btn{
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;

export default Products
