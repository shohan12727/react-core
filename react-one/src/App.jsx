
import './App.css'
import Book from './Book';
import Friend from './Friend';
import Singer from './Singer';
import Teacher from './Teacher';
import Library from './Library';
// import ToDo from './ToDo';
import Users from './Users';

function App() {



  const users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      age: 28
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      age: 34
    },
    {
      id: 3,
      name: 'Charlie Davis',
      email: 'charlie@example.com',
      age: 22
    }
  ];



  const friends = ['Rakib', 'Sakib', 'Raju', 'Sizan'];
  const singers = ['atif aslam', 'sazal', 'mc akib', 'mtm cd'];
  const teachers = ['mtn', 'akib', 'anis', 'ponkos', 'narayan'];
  const books = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    isAvailable: true
  };


  const library = [
    { id: 1, book: 'mathematics', price: 205 },
    { id: 2, book: 'physice', price: 205 },
    { id: 3, book: 'chemistry', price: 205 },
    { id: 4, book: 'english', price: 205 },
  ]
  // const time = 50;

  return (
    <>
      <h1>React</h1>
      <Users users={users}></Users>


      {
        library.map((element) => <Library
          key={element.id}
          book={element.book}
          price={element.price}></Library>)
      }


      {
        <Book title={books.title}
          author={books.author}
          pages={books.pages}
        ></Book>
      }

      {
        teachers.map(teacher => <Teacher teacher={teacher}></Teacher>)
      }

      {
        friends.map((friend) => <Friend friend={friend}></Friend>)
      }
      {
        singers.map((singer => <Singer singer={singer}></Singer>))
      }










      {/* <ToDo
        task='Learn React'
        isDone={true}
        time={time}>
      </ToDo>
      <ToDo
        task='Learn React'
        isDone={true}
        time={time}>
      </ToDo>
      <ToDo
        task='Practise react'
        isDone={false}>
      </ToDo> */}


      <Salami person='Sister' ammount='100' ></Salami>
      <Salami person='Brother' ammount='150' ></Salami>
      <Player name='Raju' run='5000'></Player>
      <Player name='Sakib' run='1000'></Player>
      <Salami person='Neighbour' ammount='75' ></Salami>
      <Develper name="Shohan" uni="NSU" lan="JavaScript" ></Develper>
      <Develper name="Rajesh" uni="NSU" lan="C"></Develper>
      <Develper name="Pal" uni="IUB" lan="Python" ></Develper>

      <Student></Student>
      <Student></Student>
      <Person></Person>
      <RandomOne></RandomOne>
      <RandomOne></RandomOne>
      <Rajesh></Rajesh>
      <Rajesh></Rajesh>
      <Doctor></Doctor>


    </>
  )
}

const Salami = ({ person, ammount }) => {

  return (
    <>
      <div className='pal'>
        <p>Salami for: {person}</p>
        <p>Salami Ammount: {ammount}</p>
      </div>
    </>
  )
}





const Player = ({ name, run }) => {
  return (
    <>
      <div style={{
        color: 'orange',
        border: '2px solid red',
        borderRadius: '20px',
        margin: '10px'
      }}>
        <p>Player name : {name} </p>
        <p>Player run :{run}</p>
      </div>

    </>
  )

}





const Develper = (props) => {
  // console.log(props.age);
  // console.log(props.name);
  // console.log(props);
  // console.log(props.uni);   
  // const name = 'Raka'
  // const lan = 'javaScript'
  return (
    <>
      <div style={{
        border: '3px solid red',
        borderRadius: '20px',
        padding: '20px',
        color: 'green',
        margin: '20px'
      }}>
        <h2>Developer</h2>
        <h4>
          Name: {props.name}
        </h4>
        <h4>
          University: {props.uni}
        </h4>
        <h4>
          Language: {props.lan}
        </h4>
      </div>

    </>
  )
}





const Student = () => {
  const name = 'PewDiePie';
  const age = 32;
  const studentStyle = {
    color: 'green',
    border: '2px solid blue',
    borderRadius: '20px',
    textAlign: 'center',
    margin: '20px'

  }

  return (
    <>
      <div style={studentStyle}>
        <h3>Student Information</h3>
        <p>Hi , I am {name}. I am {age}.I am a professional content
          creator in YT.. </p>
      </div>
    </>
  )

}





function Person() {
  const age = 20;
  const name = 'Ashraful Islam Shohan';
  return (
    <>
      <div>
        <h1>My profile</h1>
        <p>Hi i am {name}, i am {age} years old.
          Curretnly I am studing at NSU. Curretnly i aim
          is to be a professional web developer
          before the end of this year. Hopefully
          i will able to to it InShaAllah....</p>
      </div>
    </>
  )
}

const RandomOne = () => {
  const name = 'Pal Sagar';
  const age = 20;
  const likes = ['Ice-Cream ', 'Poteto ', 'Nondini'];
  const dislikes = ['Gandu Rajesh ', 'King Shohan ', ' Lovely Joysree'];
  const uni = 'Independent University, Bangladesh';
  const hobbies = 'mastervation';

  return (
    <>
      <div className='pal'>
        <h1>Poop Pal</h1>
        <p>Hi, everyone my name is {name}.
          I am {age} old . I am like the gay people most,
          but i like these things too {likes}. And my dislikes
          things are {dislikes} . Curretnly i am studing at {uni}.
          And my favourite part time activity is {hobbies}.

        </p>
      </div>
    </>
  )
}

const Rajesh = () => {

  const name = 'Rajesh';
  const nickName = 'Gandu';
  const age = 20;
  const uni = 'nsu';
  const hobby = 'getting fucked by barca';
  const favClub = "bap's club";
  const favHobby = 'Mastervation';
  const web = '___hub'

  return (
    <>
      <div className='rajesh'>
        <h1>Gandu Raj</h1>
        <p>Hi my is {name}. My nick name is {nickName}. I am {age}
          years old. I studied at {uni}. My fav hobby is {hobby}.
          I am supprting {favClub} since my childhood.
          My favourite part time activity is {favHobby}.
          And i love to do this stuff duing every night cause (keu dey na amare)
          MY most often website where i visit is : {web}. </p>
      </div>

    </>
  )

}

const Doctor = () => {


  return (
    <>
      <div className='rajesh'>
        <h1>List of Doctor most use elements :</h1>
        <ol>
          <li>Patient Profile Cards</li>
          <li> Appointment Scheduling</li>
          <li>Medical Records</li>
        </ol>
      </div>

    </>
  )
}





export default App
