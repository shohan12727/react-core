import { use } from "react"
import Album from "./Album"
export default function Albums ({fetchAlbams}) {

    const albams = use(fetchAlbams)
    
    return (
        <>
        <div className="card">
            <h3>
                Albums details...
            </h3>
            {
             albams.map(albam => <Album albam={albam}></Album> )   
            }
        </div>
        </>
    )
}