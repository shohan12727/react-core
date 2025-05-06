
import './App.css'

function App() {


  return (
    <>
      <h1>React</h1>
      <Person></Person>
      <RandomOne></RandomOne>
      <RandomOne></RandomOne>
      <Rajesh></Rajesh>
      <Rajesh></Rajesh>
      <Doctor></Doctor>


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


  return(
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
