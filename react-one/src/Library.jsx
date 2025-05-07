export default function Library ({book,price,key}) {
    return (
        <>
        <div style={{
            color:'green',
            border:'2px solid red',
            padding:'10px',
            margin:'10px',
            borderRadius:'20px'
        }}>
            <h3>My central Library {book.length} {key}</h3>
            <p>Here you can find lots of books on various topics {key} </p>
            <p>Book name:{book}</p>
            <p>Their price:{price}</p>
        </div>
        </>
    )
}