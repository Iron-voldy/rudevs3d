import React from 'react'

const Jumbotron = () => {
  const handleLearnMore = () => {
    const element = document.querySelector('.sound-section');
    window.scrollTo({
      top: element?.getBoundingClientRect().top,
      left:0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className='jumbotron-section wrapper'>
      <h2 className="title">Welcome To</h2>
     
      <p className="text">Rudevs Coparation 3D World</p>
      <span className="description">
      
      </span>

      <ul className="links">
        <li>
         
        </li>

        <li>
          <a className="link" onClick={handleLearnMore}>Learn more</a>
        </li>
      </ul>
    </div>
  )
}

export default Jumbotron