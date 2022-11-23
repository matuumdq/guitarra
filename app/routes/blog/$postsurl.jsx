import { useLoaderData } from "@remix-run/react"
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers"
import styles from '~/styles/blog.css'

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}


export async function loader({params}){
    const { postsurl } = params
    const post = await getPost(postsurl)

    if (post.data.length === 0 ) {
        throw new Response('', {
            status: 404,
            statusText: 'Post no Encontrado'
        })
    }

    return post
}

export function meta({data}){
    if(!data){
        return {
            title: 'GuitarLA - Blog no encontrado', 
            descripcion: `Guitarras, venta de guitarras, Blog no encontrado`
        }
    }

    return {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        descripcion: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.titulo}`
    }
}

export default function postsUrl() {
    const post = useLoaderData()
    const {titulo, contenido, imagen, publishedAt} = post?.data[0].attributes
  return (
    <article className="post mt-3 ">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen Blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto"> {contenido}</p>
        </div>
    </article>
  )
}

