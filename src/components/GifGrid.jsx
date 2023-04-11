import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({ category }) => {

     const {images,isLoading} = useFetchGifs( category );

    return (
    <div>
        <div className="card-grid">
            {
                isLoading && <h2>Cargando...</h2>
            }
            {
            images.map( (image) => (

                <GifGridItem 
                    key={ image.id } 
                    { ...image }
                />
            ) )
            }
        </div>
    </div>
  )

}

