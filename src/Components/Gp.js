import React ,{useRef , useEffect} from 'react'
import '../Styles/Gp.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import LogoB from '../assets/pdf_logo.png';
import Logo from '../assets/bg.jpg'
import { useReactToPrint } from 'react-to-print';

function Gp() {
  const componentRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:false,
    // pageStyle: '@page { size: A4 landscape; margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; padding: 0mm; } }',
    onAfterPrint: () => alert('Print success!')
  })

  const location = useLocation();
  // const propsalN = location.state.propsalN
  const brandN = location.state.brandN
  const clientN = location.state.clientN
  const projectD = location.state.projectD
  console.log(projectD);

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
        <img src={Logo} alt='' />
      </div>
      <div className="logoC">
        <img src={LogoB} alt='' />
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
        <p>Motion Poster</p>
        <p>Photography</p>
        </div>

        <div className='c'>
        <h4 className='d'>Duration:</h4>
        <p>{projectD}</p>

        </div>

        <div className='e'>
        <h4 className='d'>The Team:</h4>
        <p>Director</p>
        <p>Cinematographer</p>
        <p>Makeup Artist</p>
        </div>

        <div className='f'>
          <p>-------------------------------------------------------------------------------</p>
          <h4>BombayCat Flims Pvt Ltd.</h4>
          <p>NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad, Gujarat 380007 </p>
          <p><strong>Ph:</strong> +91-63 5881 5887     E-mail: <strong>hi@bombaycatflims.com</strong></p>
          <p>WEB:<strong> www.bombaycatflims.com</strong></p>
          </div>
        </div>

        </div>
        <div className='B'>
        <div className='f'>
          <p>-------------------------------------------------------------------------------</p>
          <h4>BombayCat Flims Pvt Ltd.</h4>
          <p>NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad, Gujarat 380007 </p>
          <p><strong>Ph:</strong> +91-63 5881 5887     E-mail: <strong>hi@bombaycatflims.com</strong></p>
          <p>WEB:<strong> www.bombaycatflims.com</strong></p>
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
