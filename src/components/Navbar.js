import {Link} from 'react-router-dom'
import logo from "../logo.svg"
import {FaCartPlus} from 'react-icons/fa';
import {ButtonContainer} from './Button'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <NavWrapper 
      className='navbar navbar-expand-sm navbar-dark px-sm-5'
    >
      {
        /* 
        https://www.iconfinder.com/icons/1243689/call_phone_icon
        Creative Commons (Attribution 3.0 Unported);
        https://www.iconfinder.com/Makoto_msk */
      }
      <Link to='/'>
        <img src={logo} alt='store logo' className='navbar-brand'/>
      </Link>
      
      <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'>
          <Link to='/' className='nav-link'>
            products
          </Link>
        </li>
      </ul>
      <BtnLink to='/cart'>
        <ButtonContainer>
          <FaCartPlus />
          my cart
        </ButtonContainer>
      </BtnLink>
      
     
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`

const BtnLink = styled(Link)`
  margin-left: auto;
`

export default Navbar
