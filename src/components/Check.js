import React, {useState} from 'react'
import Button from './Button'
import Modal from './Modal'
import Input from './Input'

export default function Check() {

  const [showModal, setshowModal] = useState(false)

  return (
    <>
      <Button children="Open Modal" onClick={() => setshowModal(true)}/>
      <Modal showModal={showModal} closeModal={() => setshowModal(false)}  header={'This is the modal Header'}>
        <div>
          This is where every other thing will be put
          <Input type="text"/>
          <Input type="text"/>
          <Input type="text"/>
          <Input type="text"/>
          <Input type="text"/>
          <Input type="text"/>
          <Input type="text"/>
          <Input type="text"/>
          
     
        </div>
          </Modal>
    </>
  )
}
