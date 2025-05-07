export default function ToDo({task,isDone}) {
    return (
        <>
            <div>
                <ul>
                    <li>Task: {task} </li>
                    <li>Learn: {isDone}</li>
                </ul>
            </div>
        </>
    )
}  

export default function ToDo ({task,isDone,time=0}) {
    if(isDone === true) {
        return  <li>Situation: {task} and Duration:{time}</li>
    }   else {
        return <li>Pending: {task}</li>
    }
}
ternary operator 
export default function ToDo ({task,isDone,time=0}) {
    return isDone ? 
    <li>Done: {task} Duration: {time} </li> : 
    <li> Try Again  </li>
}
next 

export default function ToDo ({task,isDone,time}) {
  return  isDone &&  <li>Done: {task} Duration: {time} </li>
    
}


export default function ToDo ({task,isDone,time=0}) {
    return isDone || <li>Done:  {task} and  Duration: {time} </li>
}

export default function ({task,isDone,time}) {
    let listItem  ;

    if (isDone === true) {
        listItem = <li>Done: {task} Duration: {time} </li>
    } else {
        listItem = <li>Pending: {task} </li>
    }
    return listItem ;
}

