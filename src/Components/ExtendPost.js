import React, { useState } from 'react';
import '../Styles/ExtendPost.css';
import PHire from '../Components/PHire';
import PIn_house from '../Components/PIn_house.js';

function ExtendPost() {
    const [talentType, setTalentType] = useState('in-house');
      
    
    const handleTalentTypeChange = (event) => {
      setTalentType(event.target.value);
    };
  
    return (
      <div className='extend-talent-container'>
        <div className='form-field'>
          {/* <label htmlFor='talent-type'>Talent Type:</label> */}
          <select id='talent-type' value={talentType} onChange={handleTalentTypeChange}>
            <option value='in-house'>In-house</option>
            <option value='hire'>Hire</option>
          </select>
        </div>
        <div className='form-field'>
        {talentType === 'hire' && <PHire />}
        {talentType === 'in-house' && <PIn_house />}
        </div>
      </div>
    );
  }
  
  export default ExtendPost;