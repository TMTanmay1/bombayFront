// TalentReq.js
import React, { useState } from 'react';
import '../Styles/TalentReq.css';
import ExtendTalent from '../Components/ExtendTalent.js';
import {
  addSelectedTalent,
  removeSelectedTalent,
  addExtraTalent,
  removeExtraTalent,
} from "../store/slice/formSlice";
import { useSelector, useDispatch } from "react-redux";

const talentOptions = [
  'Unity Developer',
  'Unreal Developer',
  'Flutter Developer',
  'Front end Developer',
  'Back end Developer',
  'UI Designer',
  'UX Designer',
  'Graphic Designer',
  'Concept Artist',
  'Sound Design',
  'Project Manager',
  'Sr. 3D Modeling Artist',
  'Jr. 3D Modeling Artist'
];

function TalentReq() {
  const [selectedTalents, setSelectedTalents] = useState([]);
  const [extraTalent, setExtraTalent] = useState('');
  const [isExtraSelected, setIsExtraSelected] = useState(false);
  const dispatch = useDispatch();

  // const handleTalentChange = (talent) => {
  //   if (talent === 'Extra') {
  //     setIsExtraSelected(!isExtraSelected);
  //   } else {
  //     if (selectedTalents.includes(talent)) {
  //       setSelectedTalents(selectedTalents.filter((item) => item !== talent));
  //     } else {
  //       setSelectedTalents([...selectedTalents, talent]);
  //     }
  //   }
  // };

  const handleTalentChange = (talent) => {
    if (talent === 'Extra') {
      setIsExtraSelected(!isExtraSelected);
      if (isExtraSelected) {
        // dispatch(removeSelectedTalent('Extra'));
      } else {
        // dispatch(addSelectedTalent('Extra'));
      }
    } else {
      if (selectedTalents.includes(talent)) {
        setSelectedTalents(selectedTalents.filter((item) => item !== talent));
        dispatch(removeSelectedTalent(talent));
      } else {
        setSelectedTalents([...selectedTalents, talent]);
        dispatch(addSelectedTalent(talent));
      }
    }
  };

  const handleExtraTalentChange = (event) => {
    setExtraTalent(event.target.value);
  };

  // const handlePlusButtonClick = () => {
  //   setSelectedTalents([...selectedTalents, 'Extra']);
  //   setIsExtraSelected(true);
  // };

  const handlePlusButtonClick = () => {
    setSelectedTalents([...selectedTalents, 'Extra']);
    setIsExtraSelected(true);
    // dispatch(addSelectedTalent('Extra'));
    dispatch(addSelectedTalent(extraTalent));
    
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

      {/* {selectedTalents.map((talent, index) => (
        <div  key={index}>
          <div className='o'>
          <label id="index">{talent}</label>
          {talent === 'Extra'  && <ExtendTalent talentType={extraTalent} />}
          {talent !== 'Extra' && <ExtendTalent talentType={talent} />}
          </div>
        </div>
      ))} */}

{selectedTalents.map((talent, index) => (
  <div key={index}>
    <div className='o'>
      {talent === 'Extra' ? (
        <label id="index">{extraTalent}</label>
      ) : (
        <label id="index">{talent}</label>
      )}
      {talent === 'Extra' && extraTalent && <ExtendTalent talentType={extraTalent} />}
      {talent !== 'Extra' && <ExtendTalent talentType={talent} />}
    </div>
  </div>
))}
    </div>
  );
}

export default TalentReq;
