import { Link, useLocation } from "@remix-run/react"
import imagen from '../../public/img/carrito.png'

function Navegacion() {

      const location = useLocation();

  return (
      <nav className="navegacion">
      <Link 
      to='/'
      className={location.pathname === '/' ? 'active' : null}
      > Inicio</Link>
      <Link 
      to='/nosotros'
      className={location.pathname === '/nosotros' ? 'active' : null}
      > Nosotros</Link>
      <Link 
      to='/guitarras'
      className={location.pathname === '/guitarras' ? 'active' : null}
      > Tienda</Link>
      <Link 
      to='/blog'
      className={location.pathname === '/blog' ? 'active' : null}
      > Blog</Link>
      <Link 
      to='/carrito'
      >
        <img src={imagen} alt="imagen carrito" />
      </Link>
</nav>
  )
}

export default Navegacion