import React from 'react'

const DisplaySection = ({triggerPreview}) => {
  
  const handleScrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  };
  
  return (
    <div className='display-section wrapper'>
      <p className="text">Let's Visit 3D.</p>
      

      <button className="button" onClick={triggerPreview}>Try me!</button>
      <button className="back-button" onClick={handleScrollToTop}>TOP</button>
    </div>
  )
}

export default DisplaySection