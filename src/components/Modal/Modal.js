// import React from 'react'
import styles from '../Modal/Modal.module.css'

const Modal = ({showModal, closeModal, header, children}) => {
  return (
    <>
      {showModal && <div className={styles.modal}>
            <div className={styles.modalContent}>
                <div className={styles.headerContent}>
                    <p className={styles.headerText}>{header}</p>
                    <span className={styles.close} onClick={closeModal}>&times;</span>
                </div>
                <div className={styles.modalLine}></div>
                {children}
            </div>
        </div>}
    </>
  )
}

export default Modal
