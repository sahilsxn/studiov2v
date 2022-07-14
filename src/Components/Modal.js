
import React from 'react'
import ReactDOM from 'react-dom'
import '../css/modal.css'

const Modal = (props) => {

    const {modal, hideModal, children} = props

    const showHideClassName = modal ? "modal display-block" : "modal display-none";

  return ReactDOM.createPortal(
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className='modalTop' onClick={hideModal}>
          <span className="material-symbols-outlined">close</span>
        </div>
        {children}
      </section>
    </div>,
  document.getElementById('portal'))
}

export default Modal