import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div>
        <img src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt="" width="100%"/>
        <button className='btn btn-danger'style={{marginTop:"-450px",width:"100%"}} onClick={()=>navigate("/")}>Home Back</button>
    </div>
  )
}

export default NotFound
