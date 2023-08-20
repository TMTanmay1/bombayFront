import React, { useRef, useEffect, useState } from "react";
import "../Styles/Gp.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import LogoB from "../assets/pdf_logo.png";
import Logo from "../assets/bg.jpg";
import { useReactToPrint } from "react-to-print";

function Gp() {
  const componentRef = useRef();
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: false,
    pageStyle: "@page { size: A4 potrait; margin: 0mm; }",
    onAfterPrint: () => alert("Print success!"),
  });
  
  const location = useLocation();
  const propsalN = location.state.proposalNumber;
  const brandN = location.state.brandName;
  const clientName = location.state.clientName;
  const projectD = location.state.projectD;
  const deli = location.state.deli;
  const talop = location.state.talop;
  const clientLogo = location.state.clientLogo;
  const selectService = location.state.selectService;
  const selectedProposalAuthorized = location.state.selectedProposalAuthorized;
  const gstChecked = location.state.gstChecked;
  const proposalDetails = location.state.proposalDetails;
  const pCost = location.state.pCost;
  const hasGST = gstChecked;
  const gstCost = hasGST ? location.state.gstCost : 0;
  const tableRows = location.state.tableRows;
  const duplicatedReferenceUrls = location.state.duplicatedReferenceUrls

  console.log(duplicatedReferenceUrls);
  
  // console.log(talop);
  // console.log(projectD);
  // console.log(deli);

  
  
  const currentDate = new Date().toLocaleDateString("en-GB");

  const [validThroughDate, setValidThroughDate] = useState("");

  useEffect(() => {
    const currentDateObj = new Date();
    const validThroughDateObj = new Date(
      currentDateObj.setDate(currentDateObj.getDate() + 45)
    );
    setValidThroughDate(validThroughDateObj.toLocaleDateString("en-GB"));
  }, []);

  let designation = '';
  let val = selectedProposalAuthorized
  if (val === 'Maqbool Shaikh') {
    designation = 'Co-Founder & CEO';
  } else if (val === 'Kumar Rohit') {
    designation = 'Co-Founder & COO';
  } else if (val === 'Kushan Shah') {
    designation = 'Co-Founder & CTO';
  }

  

  return (
    <div className="big">
      <div ref={componentRef} className=".pdf-container">
        <div className="A">
          <div className="logo_container_A">
            <div className="logoA">
              {clientLogo && (
                <img src={URL.createObjectURL(clientLogo)} alt="Client Logo" />
              )}
            </div>
            <div className="logoC">
              <img className="LogC" src={LogoB} alt="Company Logo" />
            </div>
          </div>

          <div className="date">
            <div className="fie">
              <label htmlFor="date">Date:</label>
              <input id="_date" type="text" value={currentDate} readOnly />
            </div>

            <div className="fiel">
              <div className="fie">
                <label htmlFor="validThrough">Valid Through:</label>
                <input
                  id="_validThrough"
                  type="text"
                  value={validThroughDate}
                  readOnly
                />
              </div>

              <div className="fie">
                <label id="PPNumber" htmlFor="Proposal_N">
                  ProposalNo:
                </label>
                <input id="PPNumber" type="text" value={propsalN}></input>
              </div>
            </div>
          </div>
          <div className="top">
            <div className="top_h">
            <p>To,</p>
            <p>{clientName}</p>
            <p>{brandN}</p>
            </div>
            <div className="field">
              <h4 className="d">Project Category:</h4>
              <input id="PCategory" type="text" value={selectService} />
            </div>
          </div>
          <div className="middle">
            <div className="AP">
              <h4 className="d">About Project:</h4>
              <p className="t">
            
                {proposalDetails}
              </p>
            </div>

            <div className="a">
              <h4 className="d">Deliverable:</h4>
              {deli.map((item, index) => (
                <div key={item.id}>
                  {item.option !== "other" ? (
                    <p>
                      <span className="colored-dot">&#8226;</span>{" "}
                      <span className="light-font">{item.option}</span>
                    </p>
                  ) : (
                    <p>
                      <span className="colored-dot">&#8226;</span>{" "}
                      <span className="light-font">{item.otherOption}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="c">
              <h4 className="d">Project Duration:</h4>
              <p>
                <span className="colored-dot">&#8226;</span>
                <span className="light-font">{projectD}</span>
              </p>

              <p className="sta">
                Time taken by the client for approvals and change requests will
                be not included in provided duration.
              </p>
            </div>

            <div className="foot">
              <div>
                <div className="solid-line"></div>
                <h4>BombayCat Flims Pvt Ltd.</h4>
                <p>
                  <span className="light-font">
                    NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad,
                    Gujarat 380007
                  </span>{" "}
                </p>
                <p>
                  <strong>Ph:</strong>
                  <span className="light-font">
                    +91-63 5881 5887{" "}
                  </span> E-mail: <strong>hi@bombaycatflims.com</strong> WEB:
                  <strong> www.bombaycatflims.com</strong>
                </p>
              </div>
              <div className="pg">
                <p>
                  <strong>1</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="B">
          <div className="logo_container_B">
            <div className="logoA">
              {clientLogo && (
                <img src={URL.createObjectURL(clientLogo)} alt="Client Logo" />
              )}
            </div>
            <div className="logoC">
              <img className="LogC" src={LogoB} alt="Company Logo" />
            </div>
          </div>
        </div>

        <div className="e">
          <h4 className="d">The Team:</h4>

          <div className={talop.length > 13 ? 'two-column-list' : 'normal-list'}>
        {talop.map((teamMember, index) => (
            <p key={index}><span className="colored-dot">&#8226;</span> <span className="light-font">{teamMember}</span></p>
        ))}
          </div>

        </div>

        <div className="Knowledge">
          <h4 className="d">Knowledge Transfer:</h4>
          <p>
            1. All communication/ documents/ Knowledge transfer will be done
            with either party in English.
          </p>
          <p>
            2. Any transfer of the documentation from either side will be done
            in MS word or MS excel sheets in soft copy formats via electronic
            media.
          </p>
          <p>
            3. For communication the project managers will use e-mails, Mobile,
            Skype.
          </p>
          <p>
            4. Complete Contact information of the project managers from either
            side will be made available upon the start of the project.
          </p>
        </div>

        <div className="foot_B">
          <div>
            <div className="solid-line"></div>
            <h4>BombayCat Flims Pvt Ltd.</h4>
            <p>
              <span className="light-font">
                NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad,
                Gujarat 380007
              </span>{" "}
            </p>
            <p>
              <strong>Ph:</strong>
              <span className="light-font">+91-63 5881 5887 </span> E-mail:{" "}
              <strong>hi@bombaycatflims.com</strong> WEB:
              <strong> www.bombaycatflims.com</strong>
            </p>
          </div>
          <div className="pg">
            <p>
              <strong>2</strong>
            </p>
          </div>
        </div>

        <div className="C">
          <div className="logo_container_C">
            <div className="logoA">
              {clientLogo && (
                <img src={URL.createObjectURL(clientLogo)} alt="Client Logo" />
              )}
            </div>
            <div className="logoC">
              <img className="LogC" src={LogoB} alt="Company Logo" />
            </div>
          </div>

          <div className="mid">
            <h4 className="d">Your Investment:</h4>
            <div className="m_head">
              <div className="m">
                <p>
                  <strong>Services</strong>
                </p>
                <div className="line"></div>
                {deli.map((item, index) => (
                  <div key={item.id}>
                    {item.option !== "other" ? (
                      <p>
                        {" "}
                        <span className="light-font">{item.option}</span>
                      </p>
                    ) : (
                      <p>
                        {" "}
                        <span className="light-font">{item.otherOption}</span>
                      </p>
                    )}
                  </div>
                ))}
               {hasGST && (
                  <p>
                    GST
                  </p>
                )}
              </div>
              <div className="n">
                <p>
                  <strong>Subtotal</strong>
                </p>
                <div className="line"></div>
                <p>{pCost}</p>
                {hasGST && (
                    <p>
                      {gstCost}
                    </p>
                  )}
              </div>
            </div>

            <div className="to">
              <p>
                <strong>Total</strong>
              </p>
              <p className="x">
                <strong>{parseFloat(pCost) + parseFloat(gstCost)}</strong>
              </p>
            </div>

            <div className="pay">
              <h4 className="d">Project wise Payment & Milestones:</h4>
              <div id="tab">
              <table className="mile_table">
            <thead>
              
                <th>Milestone</th>
                <th>Payment Method</th>
                <th>value</th>
                {/* <th>GST</th> */}
                {hasGST && <th>GST</th>}
                </thead>
              <tbody>
                

              {tableRows.map((row, index) => (
                <tr  key={index}>
                  <td >{row.milestone}</td>
                  <td>{row.paymentMethod}</td>

                  <td>{row.value}</td>
                  {hasGST && <td>{row.gst}</td>}
                </tr>
              ))}

              
                    
              </tbody>
            
          </table>

          </div>
            </div>

            <div className="det">
              <h4 className="d">Payment Details:</h4>
              {hasGST ? (
                <div className="dic">
                  <p>
                    <strong>BombayCat Films Pvt. Ltd.</strong>
                  </p>
                  <p>Indusind Bank</p>
                  <p>Branch : Sarkhej, Ahmedabad</p>
                  <p>Account No. : 20100 7222 161</p>
                  <p>IFSC : INDB0000962</p>
                </div>
              ) : (
                <div className="dic">
                  <p>
                    <strong>BombayCat Films Pvt. Ltd.</strong>
                  </p>
                  <p>HDFC Bank</p>
                  <p>Branch : Navrangpura, Ahmedabad</p>
                  <p>Account No. : 50100590120049</p>
                  <p>IFSC : HDFC0000006</p>
                </div>
              )}
            </div>
          </div>
          <div className="foot_C">
            <div>
              <div className="solid-line"></div>
              <h4>BombayCat Flims Pvt Ltd.</h4>
              <p>
                <span className="light-font">
                  NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad,
                  Gujarat 380007
                </span>{" "}
              </p>
              <p>
                <strong>Ph:</strong>
                <span className="light-font">
                  +91-63 5881 5887{" "}
                </span> E-mail: <strong>hi@bombaycatflims.com</strong> WEB:
                <strong> www.bombaycatflims.com</strong>
              </p>
            </div>
            <div className="pg">
              <p>
                <strong>3</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="E">
        <div className="logo_container_D">
            <div className="logoA">
              {clientLogo && (
                <img src={URL.createObjectURL(clientLogo)} alt="Client Logo" />
              )}
            </div>
            <div className="logoC">
              <img className="LogC" src={LogoB} alt="Company Logo" />
            </div>
          </div>
          <div className="midE">
            <h4 className="d">Reference URLs:</h4>
            <ul className="duplicated-urls">
              {duplicatedReferenceUrls.map((url, index) => (
                <li key={index}>
                  <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="foot_E">
            <div>
              <div className="solid-line"></div>
              <h4>BombayCat Flims Pvt Ltd.</h4>
              <p>
                <span className="light-font">
                  NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad,
                  Gujarat 380007
                </span>{" "}
              </p>
              <p>
                <strong>Ph:</strong>
                <span className="light-font">
                  +91-63 5881 5887{" "}
                </span> E-mail: <strong>hi@bombaycatflims.com</strong> WEB:
                <strong> www.bombaycatflims.com</strong>
              </p>
            </div>
            <div className="pg">
              <p>
                <strong>4</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="D">
        <div className="logo_container_D">
            <div className="logoA">
              {clientLogo && (
                <img src={URL.createObjectURL(clientLogo)} alt="Client Logo" />
              )}
            </div>
            <div className="logoC">
              <img className="LogC" src={LogoB} alt="Company Logo" />
            </div>
          </div>
          <div className="mid">
          <h4 className="d">Terms & Condition with Important Notes:</h4>
          <div className="terms">
          <p>
          1. All the contents will be provided by client in soft copy format before starting the work.
          If any delay due to pending content will increase the project timeline based on 
          available resource. 
          </p>
          <p>
          2. If any new items design requirement will add other than mentioned above will cost 
          and time extra. 
          </p>
          <p>
          3. We are not responsible for any kind of copyright issues. 
          </p>
          <p>
          4. Service Tax as applicable in INDIA. 
          </p>
          <p>
          5. Proposal is valid for 45 days from given date. 
          </p>
          <p>
          6. If payments from Outside INDIA then Wire Transfer charges will be barred by the client.
          </p>
          <p>
          7. All payments are in favour of BombayCat Films Pvt. Ltd.
          </p>
          <p>
          8. Subject to Ahmedabad Jurisdiction.
          </p>

          <p className="kind">Kindly get back to us for further clarifications.</p>
          </div>
          <div className="akw">
            <div className="designation">
              <p className="kind">For BombayCat Films Pvt. Ltd.</p>
              <p className="kind">{val}</p>
              <p className="kind">{designation}</p>
            </div>
            <div className="y">
              <p className="kind">Acknowledgement: </p>
              <p className="kind">{clientName}</p>
              <p className="kind">{brandN}</p>
            </div>
          </div>

          <p className="greet">We look forward to working with you :)</p>
          </div>
          <div className="foot_D">
            <div>
              <div className="solid-line"></div>
              <h4>BombayCat Flims Pvt Ltd.</h4>
              <p>
                <span className="light-font">
                  NDBI, NID Campus, opposite Tagore Hall, Paldi, Ahmedabad,
                  Gujarat 380007
                </span>{" "}
              </p>
              <p>
                <strong>Ph:</strong>
                <span className="light-font">
                  +91-63 5881 5887{" "}
                </span> E-mail: <strong>hi@bombaycatflims.com</strong> WEB:
                <strong> www.bombaycatflims.com</strong>
              </p>
            </div>
            <div className="pg">
              <p>
                <strong>5</strong>
              </p>
            </div>
          </div>
        </div>
    </div>

      <button className="b" onClick={handlePrint}>
        PDF
      </button>
    </div>
  );
}

export default Gp;
