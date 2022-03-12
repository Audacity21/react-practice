import '../Styles/Students.css';

function Student () {
    const newList = [1, 2, 3, 4, "Ankit"]

    return (
        <div className="list">
            List: 
            {newList.map((listvalues) => <div className='list-space'>{listvalues}, </div>)}
        </div>
    );
}

export default Student;