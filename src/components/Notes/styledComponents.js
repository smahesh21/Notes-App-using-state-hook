// Write your code here
import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Heading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 24px;
  color: #4c63b6;
`

export const NotesContainer = styled.form`
  height: 20vh;
  width: 70%;
  box-shadow: 2px 2.8px 2.2px 2px #aab8c8;
  padding: 10px;
`
export const Title = styled.input`
  outline: none;
  cursor: pointer;
  padding-left: 10px;
  width: 100%;
  border: none;
  margin-bottom: 10px;
`
export const NotesText = styled.textarea`
  outline: none;
  cursor: pointer;
  padding-left: 10px;
  width: 100%;
  border: none;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const AddButton = styled.button`
  height: 30px;
  width: 60px;
  background-color: #4c63b6;
  color: #ffffff;
  border-radius: 4px;
  border: none;
`
export const NotesList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
`
export const BottomContainer = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  height: 100px;
  width: 100px;
`
export const EmptyHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #334155;
`
export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #334155;
`
