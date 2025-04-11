//1 способ стилизации - использование обычного css в отдельном файле
import './styles.css'
// 3 способ стилизации - импортируем стилизованные компоненты emotion
import { BoxInfo, TitleCard, AvatarImg } from './styles'
import Avatar from '../../assets/avatar.jpg'


function Lesson09() {
  //Объект для inline стилей (2 способ)
  const textStyles = { color: 'burlywood', fontSize: '28px' }

  return (
    <div className="lesson09-container">
      <h1>Styling components</h1>
      {/* 2 способ стилизации - inline styles (передача объекта стилей в атрибут style тега) */}
      <div style={{ color: 'blueviolet', fontSize: '24px' }}>Inline styles example</div>
      <p style={textStyles}>Inline styles example 1</p>
      <div style={textStyles}>Inline styles example 2</div>
      {/* 3 способ стилизации - использование стилизованных компонентов emotion */}
      {/* <BoxInfo primary={true}>Emotion example 1</BoxInfo>
      <BoxInfo primary={false}>Emotion example 2</BoxInfo> */}
      <BoxInfo primary>
         <TitleCard>Marta</TitleCard>
         <AvatarImg src={Avatar}/>
      </BoxInfo>
      <BoxInfo>Emotion example 2</BoxInfo>
    </div>
  )
}

export default Lesson09