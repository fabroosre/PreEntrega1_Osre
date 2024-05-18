import styled from 'styled-components'
import CartWidget from "../components/CartWidget"


function Navbar() {
  return (
    <>
    <NavContainer>
        <h2>Busca <span>Tu Proxima Nave</span></h2>
        <div className='links active'>
          <a href="">Quienes Somos</a>
          <a href="">Nuestra Política</a>
          <a href="">Galeria</a>
          <a href="">Contacto</a>
          <CartWidget/>          
        </div>
    </NavContainer>
    </>
  )
}



const NavContainer = styled.nav`
h2{
  color: white;
  font-weight: 400;
  span{
    font-weight: bold;
  }
}
padding: .4rem;
background-color: #333;
display: flex;
aling-items: center;
justify-content: space-between;
a{
  color: white;
  text-decoration: none;
  margin-right: 1.5rem;
}
`
export default Navbar