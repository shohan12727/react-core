import './App.css'
export default function Singer({singer}) {
    return (
        <>
            <div className='singer'>
                <h3>Single of Singers </h3>
                <p>Here is their : {singer}  </p>
                
                
            </div>

        </>
    );
}