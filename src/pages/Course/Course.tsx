import { v4 } from "uuid"

import { CourseWrapper, Title, ListItem } from "./styles"
import { lessonsData } from "./data"

function Course (){
const lessons = lessonsData.map((lesson: string)=>{
  return <ListItem key={v4()}>{lesson}</ListItem>
})

  return (
    <CourseWrapper>
      <Title>React Lessons</Title>
      {lessons}
    </CourseWrapper>
  )
}

export default Course