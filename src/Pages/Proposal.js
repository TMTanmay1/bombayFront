import React , {useState} from 'react'
import '../Styles/Proposal.css'
import Header from '../Components/Header'
import Body from '../Components/Body'

function Proposal() {
  const [selectedService, setSelectedService] = useState('');

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <div>
      <div className='h'>
      <h1 className='head'>Proposal Form</h1>
      </div>
      <Header></Header>
      <div className='form-container'>
      <div className='form-field'>
        <label id='PNumber' htmlFor='Proposal_N'>Proposal Number:</label>
        <input  id='PNumber' type='text' ></input>
        </div>
        <div className='form-row'>
          <div className='form-field'>
            <label htmlFor='brandName'>Brand Name:</label>
            <input id='brandName' type='text' />
          </div>
          <div className='form-field'>
            <label htmlFor='clientName'>Client Name:</label>
            <input id='clientName' type='text' />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-field'>
            <label htmlFor='contactNo'>Contact No:</label>
            <input id='contactNo' type='text' />
          </div>
          <div className='form-field'>
            <label htmlFor='emailId'>Email ID:</label>
            <input id='emailId' type='email' />
          </div>
        </div>
        
      </div>
      <div className='radio-group'>
              <input className='rad_cir'
                type='radio'
                id='contentCreation'
                name='serviceType'
                value='Content Creation'
                checked={selectedService === 'Content Creation'}
                onChange={handleServiceChange}
              />
              <label htmlFor='contentCreation'>Content Creation</label>
              <input  className='rad_cir'
                type='radio'
                id='experimentalMarketing'
                name='serviceType'
                value='Experimental Marketing'
                checked={selectedService === 'Experimental Marketing'}
                onChange={handleServiceChange}
              />
              <label htmlFor='experimentalMarketing'>Experimental Marketing</label>
              <input  className='rad_cir'
                type='radio'
                id='metaverseServices'
                name='serviceType'
                value='Metaverse Services'
                checked={selectedService === 'Metaverse Services'}
                 onChange={handleServiceChange}
              />
              <label htmlFor='metaverseServices'>Metaverse Services</label>
            </div>

            {selectedService === 'Content Creation' && <Body />}
            
          </div>
           
  )
}

export default Proposal

