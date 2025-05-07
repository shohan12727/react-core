
import './App.css';
const Teacher = ({teacher}) => {
    return (
        <div className="teacher">
            <h3>Single Teacher Name</h3>
            <p>Meet: {teacher} </p>

        </div>
    );
};

export default Teacher;