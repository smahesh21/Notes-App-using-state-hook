import {useState} from 'react'
import {v4} from 'uuid'
import {
  MainContainer,
  Heading,
  Title,
  NotesText,
  NotesContainer,
  ButtonContainer,
  AddButton,
  NotesList,
  BottomContainer,
  Image,
  EmptyHeading,
  Description,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notesText, setNotesText] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNotesText = event => {
    setNotesText(event.target.value)
  }

  const onClickAddButton = event => {
    event.preventDefault()
    const newNote = {
      id: v4(),
      title,
      notesText,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNotesText('')
  }
  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <NotesContainer onSubmit={onClickAddButton}>
        <Title
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <NotesText
          placeholder="Take a Note..."
          value={notesText}
          rows="3"
          col="60"
          onChange={onChangeNotesText}
        />
        <ButtonContainer>
          <AddButton type="submit">Add</AddButton>
        </ButtonContainer>
      </NotesContainer>
      {notesList.length === 0 ? (
        <BottomContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyHeading>No Notes Yet</EmptyHeading>
          <Description>Notes you add will appear here</Description>
        </BottomContainer>
      ) : (
        <NotesList>
          {notesList.map(eachNote => (
            <NoteItem key={eachNote.id} noteDetails={eachNote} />
          ))}
        </NotesList>
      )}
    </MainContainer>
  )
}

export default Notes
