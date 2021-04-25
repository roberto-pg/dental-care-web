import styled from 'styled-components'

export const Container = styled.div`
  width: 25rem;
  font-family: sans-serif;
  padding-top: 50px;
`

export const DropContainer = styled.div`
  text-align: center;
  padding: 0px;
  border: 3px dashed var(--save-button-background);
  outline: 0;
  cursor: pointer;
  background: #fafafa;
  color: var(--text-bar);
`

export const DropUl = styled.ul`
  margin: 0;
`

export const DropStrong = styled.strong`
  display: inline-block;
  margin-top: 20px;
  color: var(--text-bar);
`
