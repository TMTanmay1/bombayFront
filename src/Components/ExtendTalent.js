import React, { useState } from 'react';
import '../Styles/ExtendTalent.css';
import Hire from '../Components/Hire';
import In_house from '../Components/In_house.js';

function ExtendTalent() {
  const [talentType, setTalentType] = useState('in-house');
    
  
  const handleTalentTypeChange = (event) => {
    setTalentType(event.target.value);
  };

  return (
    <div className='extend-talent-container'>
      <div className='form-field'>
        <label htmlFor='talent-type'>Talent Type:</label>
        <select id='talent-type' value={talentType} onChange={handleTalentTypeChange}>
          <option value='in-house'>In-house</option>
          <option value='hire'>Hire</option>
        </select>
      </div>
      
      {talentType === 'in-house' && <In_house />}
      {talentType === 'hire' && <Hire />}

    </div>
  );
}

export default ExtendTalent;