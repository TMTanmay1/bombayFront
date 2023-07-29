import React , {useState} from 'react';
import Switch from 'react-switch';
import '../Styles/Payment_Method.css';

function Payment_Method() {
  const [gstChecked, setGstChecked] = useState(true);
  const [showSecondInput, setShowSecondInput] = useState(gstChecked);

  const handleToggleChange = (checked) => {
    setGstChecked(checked);
    setShowSecondInput(checked);
  };
  const generateOptions = () => {
    const options = [<option key="select" value="">Select an option</option>];
    for (let percentage = 30; percentage <= 150; percentage += 10) {
      options.push(<option key={percentage} value={`${percentage}%`}>{`${percentage}%`}</option>);
    }
    return options;
  
  };

  const generateOption = () => {
    const option = [<option key="select" value="">Select an option</option>];
    for (let percentage = 20; percentage <= 100; percentage += 10) {
      option.push(<option key={percentage} value={`${percentage}%`}>{`${percentage}%`}</option>);
    }
    return option;
  
  };

  return (
    <div>
      <div className="payment-method-container">
      <label className="payment-method-label" htmlFor="ProjectDuration">Project Duration</label>
      <input id="ProjectDuration" className="payment-method-input" type="text" />
     </div>
     <div className="big-container">
        {/* Left Content */}
        <div className="left-content">
          <table className="milestone-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>Payment Method</th>
                <th>.</th>
                <th>GST</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <input className='mile' type="text" />
                </td>
                <td>
                <select className="payment-method-select">
                    {generateOption()}
                  </select>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                <input className='mile' type="text" />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td> <input className='mile' type="text" /></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div className="reference-url-container">
            <label className="reference-url-label" htmlFor="ReferenceUrl">Reference Url:</label>
            <input id="ReferenceUrl" className="reference-url-input" type="url" />
            <button className="reference-url-plus">+</button>
          </div>

          <div className="client-logo-container">
            <label className="client-logo-label" htmlFor="ClientLogo">Upload Client Logo:</label>
            <input id="ClientLogo" className="client-logo-input" type="file" accept=".jpg, .jpeg" />
          </div>
        </div>

        <div className="right-content">
          {/* Talent Cost */}
          <div className="talent-cost-container">
            <label className="talent-cost-label" htmlFor="TalentCost">Talent Cost:</label>
            <input id="TalentCost" className="talent-cost-input" type="text" />
          </div>

          {/* Post Production Cost */}
          <div className="post-production-cost-container">
            <label className="post-production-cost-label" htmlFor="PostProductionCost">Post Production Cost:</label>
            <input id="PostProductionCost" className="post-production-cost-input" type="text" />
          </div>

          {/* Equipment Cost */}
          <div className="equipment-cost-container">
            <label className="equipment-cost-label" htmlFor="EquipmentCost">Equipment Cost:</label>
            <input id="EquipmentCost" className="equipment-cost-input" type="text" />
          </div>

          {/* Total Cost */}
          <div className="total-cost-container">
            <label className="total-cost-label" htmlFor="TotalCost">Total Cost:</label>
            <input id="TotalCost" className="total-cost-input" type="text" />
          </div>

          <div className="company-profit-container">
            <label className="company-profit-label" htmlFor="CompanyProfit">Company Profit:</label>
            <select id="CompanyProfit" className="company-profit-select">
              {generateOptions()}
            </select>
          </div>

          <div className="gst-toggle-container">
            <label className="gst-label" htmlFor="GstToggle">GST 18%:</label>
            <div className="toggle-bar">
              <Switch
                id="GstToggle"
                className="react-switch"
                onChange={() => setGstChecked(!gstChecked)}
                checked={gstChecked}
                onColor="#86d3ff"
                onHandleColor="#2693e6"
                handleDiameter={20}
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </div>
          </div>

          <div className="project-cost-container">
            <label className="project-cost-label" htmlFor="ProjectCost">Project Cost:</label>
            <input id="ProjectCost" className="project-cost-input" type="text" />
            {gstChecked && (
              <>
                <span className="plus-symbol">+</span>
                <input id="SecondInput" className="second-input" type="text" />
              </>
            )}
          </div>

          <div className="total-project-cost-container">
            <label className="total-project-cost-label" htmlFor="TotalProjectCost">Total Project Cost:</label>
            <input id="TotalProjectCost" className="total-project-cost-input" type="text" />
          </div>

          <div className="proposal-authorized-container">
            <label className="proposal-authorized-label" htmlFor="ProposalAuthorized">Proposal Authorized by:</label>
            <select id="ProposalAuthorized" className="proposal-authorized-select">
              <option value="">Select an option</option>
              <option value="Maqbool Shaikh">Maqbool Shaikh</option>
              <option value="Kushan Shah">Kushan Shah</option>
              <option value="Kumar Rohit">Kumar Rohit</option>
            </select>
            <button className="generate-pdf-button">Generate PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment_Method;
