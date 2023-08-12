import React ,{useRef , useEffect} from 'react'
import '../Styles/Gp.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LogoB from '../assets/pdf_logo.png';
import Logo from '../assets/bg.jpg'
import { useReactToPrint } from 'react-to-print';

function Gp(props) {
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:false,
    pageStyle: '@page { size: A4 potrait; margin: 0mm; }',
    onAfterPrint: () => alert('Print success!')
  })

  const location = useLocation();
  // const propsalN = location.state.propsalN
  const brandN = location.state.brandN
  const clientN = location.state.clientN
  const projectD = location.state.projectD
  const deli = location.state.deli
  const talop = location.state.talop
  const clientLogo = location.state.clientLogo;

  // console.log(talop);
  // console.log(projectD);
  // console.log(deli);

  useEffect(() => {
    const pdfContainer = componentRef.current;
    if (pdfContainer) {
      const contentHeight = pdfContainer.clientHeight;
      pdfContainer.style.height = `${contentHeight}px`; // Set PDF container height
    }
  }, []);

  return (
    <div className='big'>
    <div ref={componentRef} className='.pdf-container'>
      <div className='A'>
      <div className='logo_container'>
      <div className="logoA">
      {clientLogo && <img src={URL.createObjectURL(clientLogo)} alt='Client Logo' />}
      </div>
      <div className="logoC">
        <img className='LogC' src={LogoB} alt='Company Logo' />
      </div>
      </div>
      <div className='top'>
        <p>To,</p>
        <p>{clientN}</p>
        <p>{brandN}</p>
      </div>
      <div className='middle'>
        <div>
        <h4 className='d'>About Project:</h4>
        <p className='t' >A 60 year old family run plant-business that has supplied
          the green demands of enterprises and people alike, finds
          itself at a pivotal junction with the reigns to its destiny
          being shared with the next generation of the family,
          the Satyarthy brothers.</p>
        </div>

        <div className='a'>
        <h4 className='d'>Deliverable:</h4>
                    {deli.map((item, index) => (
              <div key={item.id}>
                {item.option !== 'other' ? (
                  <p><span className="colored-dot">&#8226;</span> <span className="light-font">{item.option}</span></p>
                ) : (
                  <p><span className="colored-dot">&#8226;</span> <span className="light-font">{item.otherOption}</span></p>
                )}
              </div>
            ))}
        </div> 

        <div className='c'>
        <h4 className='d'>Duration:</h4>
        <p><span className="light-font">{projectD}</span></p>

        </div>

        <div className='e'>
        <h4 className='d'>The Team:</h4>
        
        {talop.map((teamMember, index) => (
              <p key={index} ><span className="colored-dot">&#8226;</span> <span className="light-font">{teamMember}</span></p>
            ))}
        </div>

        <div className='foot'>
          <div>
          <div className="solid-line"></div>
          <h4>BombayCat Flims Pvt Ltd.</h4>
          <p><span className="light-font">NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad, Gujarat 380007</span> </p>
          <p><strong>Ph:</strong><span className="light-font">+91-63 5881 5887 </span>  E-mail: <strong>hi@bombaycatflims.com</strong> WEB:<strong> www.bombaycatflims.com</strong></p>
          </div>
          <div className='pg'>
            <p><strong>1</strong></p>
          </div>
          </div>

        </div>

        </div>
        <div className='B'>
          <div className='l'>
          <p><strong>This is second page.</strong></p>
          </div>
        </div>
    </div>
    
        <button className='b' onClick={handlePrint}>
        PDF
      </button>
    </div>
  )
}

export default Gp
