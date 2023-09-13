  import React , {useState,useEffect} from 'react'
  import '../Styles/Proposal.css'
  import Header from '../Components/Header'
  import Body from '../Components/Body'
  import EBody from '../Components/EBody'
  import MBody from '../Components/MBody'
  import { useSelector, useDispatch } from 'react-redux';
  import { updateFormData, updateBr, updateCn,selectService } from '../store/slice/formSlice';
  


  function Proposal() {
    const dispatch = useDispatch();

    const [pn , SPn] = useState()

    const handlePnumber = (event) => {
      const value = event.target.value;
      dispatch(updateFormData(value))
      console.log(value);
      SPn(value);  
    }

    const [bn , SBn] = useState()
    const handleBname= (event) =>{
      const value = event.target.value;
      dispatch(updateBr(value))
      console.log(value);
      SBn(value);
    }

    const [cn , SCn] = useState()
    const handleCname= (event) =>{
      const value = event.target.value;
      dispatch(updateCn(value))
      console.log(value);
      SCn(value);
    }

    const [selectedService, setSelectedService] = useState('');

    const handleServiceChange = (event) => {
      const p = event.target.value;
      console.log(p);
      setSelectedService(event.target.value)
     dispatch(selectService(p)) ;
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
          <input  id='PNumber' type='text'  onBlur={handlePnumber}></input>
          </div>
          <div className='form-row'>
            <div className='form-field'>
              <label htmlFor='brandName'>Brand Name:</label>
              <input id='brandName' type='text' onBlur={handleBname} />
            </div>
            <div className='form-field'>
              <label htmlFor='clientName'>Client Name:</label>
              <input id='clientName' type='text' onBlur={handleCname}/>
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
              {selectedService === 'Experimental Marketing' && <EBody/>}
              {selectedService === 'Metaverse Services' && <MBody/>}
              
            </div>
            
    )
  }
  
  export default Proposal

