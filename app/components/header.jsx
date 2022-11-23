import Navegacion from './navegacion'
import Logo from '../../public/img/logo.svg'
import { Link } from '@remix-run/react'

function Header() {

      
  return (
      <header className="header">
            <div className="contenedor barra">
                  <Link to={'/'}>
                        <img className="logo" src={Logo} alt='imagen Logo'/>
                  </Link>
                  
                  <Navegacion/>
            </div>
      </header>
  )
}

export default Header