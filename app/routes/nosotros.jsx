import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
    return {
        title: 'GuitarLA - Sobre Nosotros',
        description: 'venta de guitarras, blog de musica'
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {

  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt="imagen sobre Nosotros" />
            <div>
                <p>
                    Ut rutrum sodales urna sed varius. Etiam iaculis neque neque. Quisque orci enim, efficitur ac aliquam sit amet, blandit vitae dolor. Duis interdum ultrices neque, et mollis turpis dictum quis. Sed a molestie tellus. Duis quis tellus ipsum. Duis malesuada eu nulla in tempus. Fusce mattis nisl et ante volutpat vehicula. Vestibulum non nulla venenatis, accumsan ligula sit amet, pulvinar purus. Fusce consectetur massa arcu, eu eleifend justo porttitor at. Cras rutrum vulputate nisi. Aenean euismod lectus eu dolor vestibulum vestibulum. Donec sit amet condimentum lectus. Morbi aliquam leo id orci ornare ultricies.
                </p>

                <p>
                    Ut rutrum sodales urna sed varius. Etiam iaculis neque neque. Quisque orci enim, efficitur ac aliquam sit amet, blandit vitae dolor. Duis interdum ultrices neque, et mollis turpis dictum quis. Sed a molestie tellus. Duis quis tellus ipsum. Duis malesuada eu nulla in tempus. Fusce mattis nisl et ante volutpat vehicula. Vestibulum non nulla venenatis, accumsan ligula sit amet, pulvinar purus. Fusce consectetur massa arcu, eu eleifend justo porttitor at. Cras rutrum vulputate nisi. Aenean euismod lectus eu dolor vestibulum vestibulum. Donec sit amet condimentum lectus. Morbi aliquam leo id orci ornare ultricies.
                </p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros