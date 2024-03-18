import React, { useState } from 'react';
import Websiteheader from './Websiteheader.jsx'
import ComputerScience from './computerscienceinfor.jsx';
import DataScienceinfo from './DataScienceinfo.jsx';
import '../cssstyling/Carousel.css';

function Carousel() {
  
  const words = [
    { id: 0, value: <Websiteheader/> },
    { id: 1, value: <ComputerScience/> },
    { id: 2, value: <DataScienceinfo/> },
    
  ];

  const [wordData, setWordData] = useState(words[0].value);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
   

   
  
    setWordData(words[index].value);
    setActiveIndex(index);
  };

  return (
    <div className = "carousel-container">
    <div className="main">
      <div className={`text-box ${activeIndex >= 0 ? 'active-text' : ''}`}>
        {wordData}
      </div>
      <div className='flex_row'>
        {words.map((data, i) =>
          <button
            key={data.id}
            className={activeIndex === i ? 'active' : 'nonactive'}
            onClick={() => handleClick(i)}
          >
             <span
                  className={`material-symbols-outlined `}
                >
                  radio_button_checked
                </span>
          </button>
        )}
        
      </div>
      
      
    </div>
    
    <button
  className="forward-button"
  onClick={() => {
    const nextIndex = activeIndex + 1 < words.length ? activeIndex + 1 : 0;
    handleClick(nextIndex);
  }}
>
  <span className="material-symbols-outlined">
    arrow_forward_ios
  </span>
</button>

<button
className="backward-button"
onClick={() => {
  const prevIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : words.length - 1;
  handleClick(prevIndex);}}>
<span class="material-symbols-outlined">
arrow_back_ios_new
</span>
</button>
    </div>
    
  );
}

export default Carousel;
