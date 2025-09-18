import React from 'react'

const Modal = ({data, btncomps}) => {
  return (
    <>
      <h1>This is the modal component {data}</h1>
      {btncomps}
    </>
  )
}

export default Modal