import React, {useState} from 'react'
import '../css/card.css'

const Card = ({thumbnail, title, content, name, role, date}) => {

    const [hover, setHover] = useState(false)

    const epochToJsDate = date => {
        return new Date(date*1000);
    }

    const handleMouseEnter = () => {
        setHover(!hover)
    }

    const handleMouseLeave = () => {
        setHover(!hover)
    }

  return (
    <div className='postCard' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div style={{position: 'relative', height:'200px'}}>
            {hover && <div className='imageFilter'></div>}
            {hover && <p className='learnMore'>Learn More</p>}
            <img className='cardImage' src={thumbnail} alt=''/> <br/>
        </div>
        <div className='meta'>
            <svg className='blueSvg' width="8" height="8" viewBox="0 0 56 56" fill="none" alt=''>
                <circle cx="28" cy="28" r="28" fill="#53B9D1"/>
            </svg>
            <svg className='yellowSvg' width="8" height="8" viewBox="0 0 56 56" fill="none" alt=''>
                <circle cx="28" cy="28" r="28" fill="#F5C245"/>
            </svg>
            <h3 className='title'>{title}</h3>
            <p className='description'>{content}</p>
            <div className='bottomData'>
                <p className='nameRole'>{name} - {role}</p>
                <p className='date'>{`${epochToJsDate(date).toLocaleString('default', { month: 'short' })} ${epochToJsDate(date).getDate()}, ${epochToJsDate(date).getFullYear()}`}</p>
            </div>
        </div>
    </div>
  )
}

export default Card