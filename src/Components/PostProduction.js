import React, { useState } from 'react';
import '../Styles/PostProduction.css';
import ReactSwitch from 'react-switch';
import ExtendPost from './ExtendPost.js';
import ExtendEquip from './ExtendEquip';
import Payment_Method from './Payment_Method.js';
import { useSelector } from "react-redux";

const postproductionOptions = [
  'Editing',
  'Sound Design/Folly',
  'Mix Master',
  'System Rent',
  'Render Form',
  'License/Software Subscription',
  'DI/Color Grading',
  'Miscellaneous',
  'Other',
];

function Postproduction() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selop , setSelop] = useState([])
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');
  const [showEquipmentRent, setShowEquipmentRent] = useState(false);
  const [showOtherEquipmentInput, setShowOtherEquipmentInput] = useState(false);

  const data3 = useSelector((state) => state.user3);
  const data4 = useSelector((state) => state.user4);

  const [showContent, setShowContent] = useState(false);

  const handleToggleContent = () => {
    setShowContent(!showContent);
  };

  const handleOptionChange = (option) => {
    if (option === 'Other') {
      setShowOtherInput(!showOtherInput);
      if (!showOtherInput) {
        // Reset the value when showing the input
        setOtherInputValue('');
      }
    } else {
      setSelectedOptions((prevSelectedOptions) =>
        prevSelectedOptions.includes(option)
          ? prevSelectedOptions.filter((item) => item !== option)
          : [...prevSelectedOptions, option]
      );
    }
  };

  const handleOtherInputChange = (event) => {
    setOtherInputValue(event.target.value);
  };

  const handleToggleChange = (checked) => {
    setShowEquipmentRent(checked);
    setShowOtherEquipmentInput(false); // Hide the other input when toggling
    // Reset the equipment name and other input value when hiding the section
    if (!checked) {
      setOtherInputValue('');
      setShowOtherInput(false);
    }
  };

  const handleAddOtherEquipment = () => {
    if (otherInputValue.trim() !== '') {
      setSelop((prevSelectedOptions) => [...prevSelectedOptions, otherInputValue]);
      setOtherInputValue('');
      setShowOtherInput(false);
    }
  };

  return (
    <div>
    <div className='postproduction-container'>
      <div className='right'>
        <label className='heading'>Postproduction:</label>
        <div className='postproduction-options'>
          {postproductionOptions.map((option, index) => (
            <div key={index} className='postproduction-option'>
              <input
                type='checkbox'
                id={`postproduction-${index}`}
                name={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              <label htmlFor={`postproduction-${index}`}>{option}</label>
            </div>
          ))}
        </div>
        {showOtherInput && (
          <div className='other-option'>
            <input
              className='other-option-input'
              type='text'
              value={otherInputValue}
              onChange={handleOtherInputChange}
              placeholder='Enter other option'
            />
            <button className='plus-button' onClick={handleAddOtherEquipment}>+</button>
          </div>
        )}
      </div>

      <div className='left'>
        <div className='toggle-container'>
          <div className='s'>
          <label className='toggle-label'>Any Equipment Rent:</label>
          <ReactSwitch
            className='switch'
            checked={showEquipmentRent}
            onChange={handleToggleChange}
            onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
          />  
          </div>
          {showEquipmentRent && (
            <div className='equipment-rent'>
              <div className='r'>
              <input
                type='checkbox'
                id='equipmentCheckbox'
                checked={showOtherEquipmentInput}
                onChange={() => setShowOtherEquipmentInput(!showOtherEquipmentInput)}
              />
              <label htmlFor='equipmentCheckbox'>Equipment Name</label>
              </div>
              {showOtherEquipmentInput && (
                <div className='equipment-input'>
                  <input
                    type='text'
                    value={otherInputValue}
                    onChange={handleOtherInputChange}
                    placeholder='Enter equipment name'
                  />
                  <button className='plus-button' onClick={handleAddOtherEquipment}>+</button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

    </div>
      <div className='map'>
        {selectedOptions.map((option, index) => (
          <div key={index}>
            <label id="index">{option}</label>
            <ExtendPost talentType={option} />
          </div>
        ))}

        {selop.map((option,index) => (
          <div  key={index}>
            <label id='index'>{option}</label>
            <ExtendEquip talentType={option} />
          </div>
        ))}
      </div>
      <div className='form-field'>
              <div className='tt'>
                <label htmlFor='postproduction_talent'>Total PostProduction:</label>
                <input
                id='total_postproduction' 
                type='text'
                name='total_postproduction'
                value={data3+data4}
                readOnly/>
                </div>
            </div>
    <Payment_Method></Payment_Method>
    </div>
  );
}

export default Postproduction;
