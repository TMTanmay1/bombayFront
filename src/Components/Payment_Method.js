import React , {useState} from 'react';
import Switch from 'react-switch';
import '../Styles/Payment_Method.css';
import { useSelector } from "react-redux";

function Payment_Method() {

  const data1 = useSelector((state) => state.users);
  const data2 = useSelector((state) => state.users2);
  const data3 = useSelector((state) => state.user3);
  const data4 = useSelector((state) => state.user4);
  const data5 = useSelector((state) => state.user5);
  const data6 = useSelector((state) => state.user6);

  const [companyProfitOption, setCompanyProfitOption] = useState('');
  const [talentCost, setTalentCost] = useState('');
  const [postProductionCost, setPostProductionCost] = useState('');
  const [equipmentCost, setEquipmentCost] = useState('');
  const [duplicatedReferenceUrls, setDuplicatedReferenceUrls] = useState([]);
  
  const [tableRows, setTableRows] = useState([
    { milestone: '', paymentMethod: '', value1: '', value2: '' },
  ]);
  const handleAddRow = () => {
    setTableRows([...tableRows, { milestone: '', paymentMethod: '', value1: '', value2: '' }]);
  };

  // Function to handle changing data in a row
  const handleChangeRowData = (index, field, value) => {
    const updatedRows = [...tableRows];
    updatedRows[index][field] = value;
    if (field === 'paymentMethod') {
      const profitPercentage = parseFloat(companyProfitOption) / 100;
      const selectedPercentage = parseFloat(value.replace('%', '')) / 100;
      updatedRows[index].value = (parseFloat(calculateTotalProjectCost()) * selectedPercentage).toFixed(2);
      updatedRows[index].gst = (parseFloat(calculateTotalProjectCost()) * selectedPercentage * 0.18).toFixed(2);
    }
    setTableRows(updatedRows);
  };

  const handleDuplicateReferenceUrl = () => {
    setDuplicatedReferenceUrls([...duplicatedReferenceUrls, duplicatedReferenceUrls.length]);
  };

  // Function to remove a duplicated container
  const handleRemoveReferenceUrl = (indexToRemove) => {
    const updatedReferenceUrls = duplicatedReferenceUrls.filter((_, index) => index !== indexToRemove);
    setDuplicatedReferenceUrls(updatedReferenceUrls);
  };


  const calculateTotalCost = (talentCost, postProductionCost, equipmentCost) => {
    // Convert input values to numbers and sum them up
    const total = parseFloat(talentCost) + parseFloat(postProductionCost) + parseFloat(equipmentCost);
    return isNaN(total) ? '' : total.toFixed(2);
  };
  
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

  const calculateTotalProjectCost = () => {
    const totalCost = calculateTotalCost(data1 + data2, data3 + data4, data5+data6);
    if (gstChecked) {
      // Calculate total cost including 18% GST and company profit
      const profitPercentage = parseFloat(companyProfitOption) / 100;
      const gstAmount = (parseFloat(companyProfitValue) + parseFloat(calculateTotalCost(data1 + data2, data3 + data4, data5+data6))).toFixed(2) * 0.18;
      const totalProjectCost = parseFloat(totalCost) + gstAmount + parseFloat(totalCost) * profitPercentage;
      return isNaN(totalProjectCost) ? '' : totalProjectCost.toFixed(2);
    } else {
      // Calculate total cost including company profit but excluding GST
      const profitPercentage = parseFloat(companyProfitOption) / 100;
      const totalProjectCost = parseFloat(totalCost) * (1 + profitPercentage);
      return isNaN(totalProjectCost) ? '' : totalProjectCost.toFixed(2);
    }
  };

  const calculateCompanyProfitValue = () => {
    const profitPercentage = parseFloat(companyProfitOption) / 100;
    const totalCost = calculateTotalCost(data1 + data2, data3 + data4, data5+data6);
    
    return (parseFloat(totalCost) * profitPercentage).toFixed(2);
  };
  const companyProfitValue = calculateCompanyProfitValue();

  return (
    <div>
      <div className="payment-method-container">
      <label className="payment-method-label" htmlFor="ProjectDuration">Project Duration</label>
      <input id="ProjectDuration" className="payment-method-input" type="text" />
     </div>
     <div className="big-container">
        {/* Left Content */}
        <div className="left-content">
          <label>Payment Method:</label>
          <table className="milestone-table">
            <thead>
              <tr>
                <th>Milestone</th>
                <th>Payment Method</th>
                <th>value</th>
                {/* <th>GST</th> */}
                {gstChecked && <th>GST</th>}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((rowData, index) => (
                <tr key={`row_${index}`}>
                  <td>
                    <input
                      className="mile"
                      type="text"
                      value={rowData.milestone}
                      onChange={(e) => handleChangeRowData(index, 'milestone', e.target.value)}
                    />
                  </td>
                  <td>
                    <select
                      className="payment-method-select"
                      value={rowData.paymentMethod}
                      onChange={(e) => handleChangeRowData(index, 'paymentMethod', e.target.value)}
                    >
                      {generateOption()}
                    </select>
                  </td>
                  <td>
                    <input
                      className="mile"
                      type="text"
                      value={rowData.value}
                      onChange={(e) => handleChangeRowData(index, 'value', e.target.value)}
                    />
                  </td>
                  {gstChecked && (
                    <td>
                      <input
                        className="mile"
                        type="text"
                        value={rowData.gst}
                        onChange={(e) => handleChangeRowData(index, 'gst', e.target.value)}
                      />
                    </td>
                  )}
                  
                    <button className="row-action-button" onClick={handleAddRow}>
                      +
                    </button>
                  
                </tr>
              ))}
            </tbody>
          </table>

          <div className="reference-url-container">
            <label className="reference-url-label" htmlFor="ReferenceUrl">Reference Url:</label>
            <input id="ReferenceUrl" className="reference-url-input" type="url" />
            <button className="reference-url-plus" onClick={handleDuplicateReferenceUrl}>+</button>
          </div>

          {duplicatedReferenceUrls.map((index) => (
            <div key={`referenceUrl_${index}`} className="reference-url-container">
              <label className="reference-url-label" htmlFor="ReferenceUrl">
                Reference Url:
              </label>
              <input id="ReferenceUrl" className="reference-url-input" type="url" />
              <button className="reference-url-delete" onClick={() => handleRemoveReferenceUrl(index)}>
                Delete
              </button>
            </div>
          ))}



          <div className="client-logo-container">
            <label className="client-logo-label" htmlFor="ClientLogo">Upload Client Logo:</label>
            <input id="ClientLogo" className="client-logo-input" type="file" accept=".jpg, .jpeg" />
          </div>
        </div>

        <div className="right-content">
          {/* Talent Cost */}
          <div className="talent-cost-container">
            <label className="talent-cost-label" htmlFor="TalentCost">Talent Cost:</label>
            <input id="TalentCost" className="talent-cost-input" type="text" value={data1+data2}
              onChange={(e) => setTalentCost(e.target.value)}
              readOnly
              />
          </div>

          {/* Post Production Cost */}
          <div className="post-production-cost-container">
            <label className="post-production-cost-label" htmlFor="PostProductionCost">Post Production Cost:</label>
            <input id="PostProductionCost" className="post-production-cost-input" type="text" value={data3+data4}
             onChange={(e) => setPostProductionCost(e.target.value)}
             readOnly
             />
          </div>

          {/* Equipment Cost */}
          <div className="equipment-cost-container">
            <label className="equipment-cost-label" htmlFor="EquipmentCost">Equipment Cost:</label>
            <input id="EquipmentCost" className="equipment-cost-input" type="text" value={data5+data6}
            onChange={(e) => setEquipmentCost(e.target.value)}
            readOnly/>
          </div>

          {/* Total Cost */}
          <div className="total-cost-container">
            <label className="total-cost-label" htmlFor="TotalCost">Total Cost:</label>
            <input id="TotalCost" className="total-cost-input" type="text" value={calculateTotalCost(data1 + data2, data3 + data4, data5+data6)}
            readOnly/>
          </div>

          <div className="company-profit-container">
            <label className="company-profit-label" htmlFor="CompanyProfit">Company Profit:</label>
            <select id="CompanyProfit" className="company-profit-select" value={companyProfitOption}
              onChange={(e) => setCompanyProfitOption(e.target.value)}>
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
            <input id="ProjectCost" className="project-cost-input" type="text" value={(parseFloat(companyProfitValue) + parseFloat(calculateTotalCost(data1 + data2, data3 + data4, data5+data6))).toFixed(2)}
          readOnly/>
            {gstChecked && (
              <>
                <span className="plus-symbol">+</span>
                <input id="SecondInput" className="second-input" type="text" value={(parseFloat(companyProfitValue) + parseFloat(calculateTotalCost(data1 + data2, data3 + data4, data5+data6))).toFixed(2) * 0.18}
              readOnly />
              <span>for gst 18%</span>
              </>
            )}
          </div>

          <div className="total-project-cost-container">
            <label className="total-project-cost-label" htmlFor="TotalProjectCost">Total Project Cost:</label>
            <input id="TotalProjectCost" className="total-project-cost-input" type="text" value={calculateTotalProjectCost()}
          readOnly/>
          </div>

          <div className="proposal-authorized-container">
            <label className="proposal-authorized-label" htmlFor="ProposalAuthorized">Proposal Authorized by:</label>
            <select id="ProposalAuthorized" className="proposal-authorized-select">
              <option value="">Select an option</option>
              <option value="Maqbool Shaikh">Maqbool Shaikh</option>
              <option value="Kushan Shah">Kushan Shah</option>
              <option value="Kumar Rohit">Kumar Rohit</option>
            </select>
            <button className="generate-pdf-button" >Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment_Method;
