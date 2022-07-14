import React, {useEffect, useState} from 'react'
import Modal from './Modal'
import axios from 'axios'
import Card from './Card'
import Lottie from 'react-lottie';
import animationData from '../loader.json';
import '../css/container.css'

const Container = () => {

    const [cardInfo, setCardInfo] = useState([])
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({})
    const [loader, setloader] = useState(false)
  
    useEffect(()=>{
      axios.get('https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts')
        .then((result)=>{
          setCardInfo(result.data)
        })
        .catch((err)=>{
          console.log(err.message)
        })
    }, [])

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }
  
    const showModal = (id) => {
        setModal(!modal)
        setloader(true)
        axios.get(`https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts/${id}`)
        .then((response)=>{
            setModalData(response.data)
            setloader(false)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
  
    const hideModal = () => {
      setModal(!modal)
    }

  return (
    <div className='container'>
      {cardInfo.length>0 && cardInfo.map(ele=>{
        return (
          <div key={ele.id} onClick={()=>{showModal(ele.id)}}>
            <Card
              thumbnail={ele.thumbnail.small}
              title={ele.title}
              content={ele.content}
              name={ele.author.name}
              role={ele.author.role}
              date={ele.date}
            />
          </div>
        )
      })}
    {modal && <Modal modal={modal} hideModal={hideModal}>
      {loader && <Lottie options={defaultOptions} height={56} width={56}/>}
      {Object.keys(modalData).length>0 && 
      <div>
        <div>
          <img className='modalImage' src={modalData.thumbnail.small} alt=""/>
        </div>
        <div className='modalMeta'>
          <h3 className='modalTitle'>{modalData.title}</h3>
          <p className='modalDescription'>{modalData.content}</p>
          <div className='modalBottomData'>
            <img className='modalAvatar' src={modalData.author.avatar} alt=""/>
            <p className='modalNameRole'>{modalData.author.name} - {modalData.author.role}</p>
          </div>
        </div>
      </div>}
    </Modal>}
    </div>
  )
}

export default Container