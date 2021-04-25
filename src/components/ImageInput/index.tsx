import { useState, useCallback } from 'react'
import { Container, DropContainer, DropUl, DropStrong } from './styles'

import Dropzone from 'react-dropzone'

export default function ImageInput() {
  // const [fileNames, setFileNames] = useState([])
  // const handleDrop = acceptedFiles =>
  //   setFileNames(acceptedFiles.map(file => file.name))
  const [fileNames, setFileNames] = useState([])
  const handleDrop = useCallback(acceptedFiles => {
    setFileNames(acceptedFiles.map(file => file.name))
  }, [])

  return (
    <Container>
      <Dropzone
        onDrop={handleDrop}
        accept="image/*"
        minSize={1024} // bytes
        maxSize={2097152} // bytes
      >
        {({ getRootProps, getInputProps }) => (
          <DropContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Arraste uma imagem ou clique para selecionar</p>
          </DropContainer>
        )}
      </Dropzone>
      <div>
        <DropStrong>Files:</DropStrong>
        <DropUl>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </DropUl>
      </div>
    </Container>
  )
}
