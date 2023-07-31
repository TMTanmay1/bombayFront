// TalentReq.js
import React, { useState } from 'react';
import '../Styles/TalentReq.css';
import ExtendTalent from '../Components/ExtendTalent.js';

const talentOptions = [
  'Script Writer',
  'Creative Director',
  'DI Artist',
  'Storyboard',
  'Assistant Director',
  'Sound Recordist',
  'DOP',
  'DIT',
  'Graphic Designer',
  'Assistant Cinematographer',
  'Editor',
  'Voice Over Artist',
  'Director',
  'Assistant Editor',
  'Production',
  'Light Attendant',
  'Online Editor',
  'Makeup',
  'Extra',
];

function TalentReq() {
  const [selectedTalents, setSelectedTalents] = useState([]);
  const [extraTalent, setExtraTalent] = useState('');
  const [isExtraSelected, setIsExtraSelected] = useState(false);

  const handleTalentChange = (talent) => {
    if (talent === 'Extra') {
      setIsExtraSelected(!isExtraSelected);
    } else {
      if (selectedTalents.includes(talent)) {
        setSelectedTalents(selectedTalents.filter((item) => item !== talent));
      } else {
        setSelectedTalents([...selectedTalents, talent]);
      }
    }
  };

  const handleExtraTalentChange = (event) => {
    setExtraTalent(event.target.value);
  };

  const handlePlusButtonClick = () => {
    setSelectedTalents([...selectedTalents, 'Extra']);
    setIsExtraSelected(true);
  };

  return (
    <div>
      <label className='heading'>Talent Required:</label>
      <div className='talent-container'>
        {talentOptions.map((talent, index) => (
          <div key={index} className='talent-option'>
            <input
              type='checkbox'
              id={`talent-${index}`}
              name={talent}
              checked={selectedTalents.includes(talent)}
              onChange={() => handleTalentChange(talent)}
            />
            <label htmlFor={`talent-${index}`}>{talent}</label>
          </div>
        ))}
        {isExtraSelected && (
          <div className='extra-talent'>
            <input
              className='tal'
              type='text'
              value={extraTalent}
              onChange={handleExtraTalentChange}
              placeholder='Enter extra talent'
            />
            <button className='plus-button' onClick={handlePlusButtonClick}>+</button>
          </div>
        )}
      </div>

      {selectedTalents.map((talent, index) => (
        <div key={index}>
          <label>{talent}</label>
          {talent === 'Extra' && <ExtendTalent talentType={extraTalent} />}
          {talent !== 'Extra' && <ExtendTalent talentType={talent} />}
        </div>
      ))}
    </div>
  );
}

export default TalentReq;
