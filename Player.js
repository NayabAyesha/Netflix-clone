import React from 'react'
import './Player.css'
import carot from '../../assets/caret_icon.png'
const Player = () => {
  return (
    <div className='player'>
      <img src={carot} alt="" />
      <iframe width="90%" height="90%" src="https://www.youtube.com/@Netflix/videos" title="trailer" allowFullScreen></iframe>
      <div className="player-info">
        <p>Publish Date</p>
        <p>Name</p>
        <p>Type</p>
      </div>
    
    </div>
  )
}

export default Player
