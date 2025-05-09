import { use } from "react"

export default function Photos ({fetchPhotos}) {

    const photos = use(fetchPhotos);
    console.log(photos)
    return (
        <>
        <div style={{
            border:'2px solid green',
            borderRadius:'10px',
            padding:'10px',
            margin:'10px'
        }}>
           <h3>All photos: {photos.length}</h3>
        </div>
        </>
    ) 
}