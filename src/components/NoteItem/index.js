import {NotesListItem, Heading, Description} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, notesText} = noteDetails
  return (
    <NotesListItem>
      <Heading>{title}</Heading>
      <Description>{notesText}</Description>
    </NotesListItem>
  )
}
export default NoteItem
