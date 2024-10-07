import Value from './Value/Value'

const courseMap = {
    Angular : Value[0].Angular,
    Bootstrap : Value[1].Bootstrap,
    Csharp : Value[2].Csharp,
    ComplyWeb : Value[3].ComplyWeb
}

// eslint-disable-next-line react/prop-types
const Course = ({courseName}) => {
  return (
    <div>
        <img src={courseMap[courseName]} alt="" />
    </div>
  )
}

export default Course
