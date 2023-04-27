import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CDropdown, 
      CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider,
      CButton, CFormSelect } from '@coreui/react';
import "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/App.css";
import '@coreui/coreui/dist/css/coreui.min.css';

import StackedBarChart from "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/StackedBarChart.jsx";
// "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/StackedBarChart.jsx"
import PieChart from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/PieChart.jsx';

import kpi_json_file from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/data/kpi_json_file.json';
import selectable_fin_years from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/data/selectable_fin_years.json';
import { useEffect, useState } from 'react';

function Home() {
  // const [kpiData, setKpiData] = React.useState(kpi_json_file);
  // console.log('kpiData', kpiData);

  const [finYearsSelected, setFinYearsSelected] = React.useState("2022/23");

  // const [kpiValue1, setKpiValue1] = React.useState(kpi_json_file.kpi_1_output.values[finYearsSelected.value]);
  const [kpiValue1, setKpiValue1] = React.useState(0);
  // const [kpiValue1New, setKpiValue1New] = React.useState(0);
  // const [kpiValue1, setKpiValue1] = React.useState(kpiData.kpi_1_output.values["2022/23"]);
  // const [kpiValue2, setKpiValue2] = React.useState(0);
  // const [kpiValue3, setKpiValue3] = React.useState(0);

  const [finYearsItems, setFinYearsItems] = React.useState([]);

  const [finYearPanel, setFinYearPanel] = React.useState("2022/23");

  // const [ready, setReady] = React.useState(true);

  // const [submitClicked, setSubmitClicked] = React.useState(false);
  // const toggleSubmitClicked = () => setSubmitClicked(!submitClicked);

  useEffect (() => {
    if (finYearsItems.length === 0) {
      setFinYearsItems(selectable_fin_years);
    }
  }, []);

  useEffect (() => {
    console.log('finYearsItems', finYearsItems)
  }, [finYearsItems]);

  function submitButton() {
    setFinYearsSelected(finYearPanel);
    // toggleSubmitClicked();
  }

  useEffect (() => {
    console.log('finYearsSelected', finYearsSelected);
    console.log('kpi_json_file.kpi_1_output.values[finYearsSelected.value]', kpi_json_file.kpi_1_output.values[finYearsSelected]);

    setKpiValue1(kpi_json_file.kpi_1_output.values[finYearsSelected]);
  }, [finYearsSelected]);

  useEffect (() => {
    console.log('finYearPanel', finYearPanel)
  }, [finYearPanel]);


  // const [options, setOptions] = useState([]);
  // useEffect (() => {
  //   const getOptions = async () => {
  //     try {
  //       const response = await fetch("/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/data/kpi_json_file.json");
  //       const options = await response.json();
  //       console.log(options);
  //       setOptions(
  //         options.map(({ id, jurisdiction, code }) => ({
  //           id,
  //           label: jurisdiction,
  //           value: code
  //         }))
  //       );
  //     } catch (error) {
  //       // ignore
  //     }
  //   };
  //   getOptions();
  // }, [finYearPanel]);
  // useEffect (() => {
  //   console.log('options', options)
  // }, [options]);


  // function getValue(periodStr) {
  //   let value = kpiData.kpi_1_output.values[periodStr];
  //   return value;
  // }

  // function updateValues() {
  //   setKpiValue1(getValue(finYearsSelected.value));
  // }

  // useEffect (() => {
  //   updateValues();
  // }, [finYearsSelected]);

  // useEffect (() => {
  //   setKpiValue1(getValue(finYearPanel.value));
  //   setKpiValue2(kpiData.kpi_2_output.values[finYearPanel.value]);
  //   setKpiValue3(kpiData.kpi_3_output.values[finYearPanel.value]);
  // }, [finYearPanel]);
  

    return (
        <div>
            <div className='PageHeaderBar'>
                <div className='PageHeader'>Waste Track</div>
            </div>
              <div className='ControlPanelKPIRow'>
                <div className='ControlPanelKPIRowLeft'>
                  <CRow>
                    <CCol>
                      <CCard className='NewControlPanel'>
                        <CCardHeader className='ControlPanelTitle'>Control Panel</CCardHeader>
                        <CCardBody>
                          <div>
                            <div>
                              <div className='ControlPanelFilterText'>Year:</div>
                              <div className='ControlPanelFilterPanel'>
                                <CFormSelect 
                                  options={finYearsItems}
                                  // value={finYearPanel}
                                  // value={finYearPanel}
                                  onChange={(e) => setFinYearPanel(e.currentTarget.value)}
                                />
                              </div>
                            </div>
                            <div className='SubmitButtonPanel'>
                                <CButton color="primary" onClick={submitButton}>Submit</CButton>
                            </div>
                          </div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                  
                </div>
                <div className='ControlPanelKPIRowRight'>
                  <CRow>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Avg. Recycle Rate % (Household)</CCardHeader>
                        <CCardBody className='KPITileText'>{kpiValue1}%</CCardBody>
                      </CCard>
                    </CCol>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Avg. Recycle Rate % (Local Authority)</CCardHeader>
                        <CCardBody className='KPITileText'>%</CCardBody>
                      </CCard>
                    </CCol>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Landfill Waste Per Household (Tonnes)</CCardHeader>
                        <CCardBody className='KPITileText'></CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </div>
                
              </div>

              <div className='large-tile-row-2'>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Recycled Waste vs To Landfill - Household (Tonnes)</CCardHeader>
                      <CCardBody className='ChartContainer'>
                        <StackedBarChart />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Destination of Annual Waste - Household (Tonnes)</CCardHeader>
                      <CCardBody className='ChartContainer'>
                        <PieChart />
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </div>

              <div className='large-tile-row-2'>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Recycled Waste vs To Landfill - Local Authority (Tonnes)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <StackedBarChart />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Destination of Annual Waste - Household (Tonnes)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <PieChart />
                        </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </div>

        </div>
   
    );
}

export default Home;