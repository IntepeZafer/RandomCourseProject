import { useState } from 'react'
import Course from './Course'
import './App.css'

function getRandomCourse() {
  const courseArray = [
    'Angular',
    'Bootstrap',
    'Csharp',
    'ComplyWeb'
  ]
  return courseArray[Math.floor(Math.random() * courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])
  const handleClick = () =>{
    setCourses([...courses , getRandomCourse()]);
  };
  const courseList = courses.map((item , index) => {
    return <Course key={index} courseName={item}/>
  });
  

  return (
    <>
      <div className='App'>
        <button onClick={handleClick}>Kurs Ekle</button>
        <div>{courseList}</div>
      </div>
    </>
  )
}

export default App
