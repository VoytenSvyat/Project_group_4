import Input from "../../components/Input/Input";
import {
  Lesson10Container,
  SectionWrapper,
  SectionTitle,
  Description,
  NoteBlock,
  NoteDescription,
  NoteTitle,
  NotesContainer,
  MainSection
} from "./styles";

function Lesson10() {
  return (
    <Lesson10Container>
      {/* <Input name='search' placeholder="Search" search={true}/> */}
      <Input name='search' placeholder="Search" search/>
      <SectionWrapper>
        <SectionTitle>Важность путешествий в жизни человека
        </SectionTitle>
        <Description>
          Путешествия – это не просто перемещение из одного места в другое,
          а возможность расширить границы своего мировоззрения, обрести новые знания и
          пережить незабываемые эмоции.
        </Description>
        <Description>
          Путешествия обогащают культурный опыт. Посещая новые страны и города,
          человек знакомится с традициями, языками, кухней и образом жизни других народов.
          Это помогает лучше понять мир и избавиться от стереотипов.
        </Description>
      </SectionWrapper>
      <SectionWrapper>
        <SectionTitle>Заметки путешественника
        </SectionTitle>
        <NotesContainer>
          <NoteBlock>
            <NoteTitle>Путешествуйте налегке</NoteTitle>
            <NoteDescription>
              Чем меньше вещей в вашем рюкзаке, тем легче и приятнее передвигаться.
              Берите только самое необходимое – документы, деньги, удобную одежду и гаджеты.
            </NoteDescription>
          </NoteBlock>
          <NoteBlock>
            <NoteTitle>Изучите базовые фразы на местном языке
            </NoteTitle>
            <NoteDescription>
              Даже несколько слов вроде "Привет", "Спасибо" и "Сколько это стоит?"
              помогут наладить контакт с местными жителями и проявить уважение к их культуре.
            </NoteDescription>
          </NoteBlock>
          <NoteBlock>
            <NoteTitle>Будьте открыты к новому опыту
            </NoteTitle>
            <NoteDescription>
              Пробуйте местную кухню, участвуйте в традиционных праздниках, знакомьтесь с людьми.
              Настоящая магия путешествий – в моментах, которые нельзя запланировать.
            </NoteDescription>
          </NoteBlock>
        </NotesContainer>
      </SectionWrapper>
      <MainSection>
        <SectionTitle>Эйфелева башня</SectionTitle>
        <Description>
          Эйфелева башня – один из самых узнаваемых символов Франции и мира.
          Она была построена к Всемирной выставке 1889 года и первоначально воспринималась с критикой,
          но вскоре стала главным украшением Парижа. Башня достигает высоты 330 метров и состоит из
          металлических конструкций весом более 10 000 тонн.
        </Description>
      </MainSection>
    </Lesson10Container>
  )
}

export default Lesson10;