import React, { useState } from 'react';
import '../Styles/PostProduction.css';
import ReactSwitch from 'react-switch';
import ExtendTalent from './ExtendTalent.js';
import Payment_Method from './Payment_Method.js';

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
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherInputValue, setOtherInputValue] = useState('');
  const [showEquipmentRent, setShowEquipmentRent] = useState(false);
  const [showOtherEquipmentInput, setShowOtherEquipmentInput] = useState(false);

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
      setSelectedOptions((prevSelectedOptions) => [...prevSelectedOptions, otherInputValue]);
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
            <label>{option}</label>
            <ExtendTalent talentType={option} />
          </div>
        ))}
      </div>
    <Payment_Method></Payment_Method>
    </div>
  );
}

export default Postproduction;
