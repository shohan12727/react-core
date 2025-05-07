import './App.css';

const Book = ({title,author,pages}) => {
  
    
    return (
        <div className="book">
             <h2>Details::</h2>
            <p>Title name: {title}</p>
            <p>Author name: {author} </p>
            <p>Number of Pages: {pages} </p>

            
        </div>
    );
};

export default Book;