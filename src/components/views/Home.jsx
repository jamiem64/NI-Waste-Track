import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CDropdown, 
      CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider,
      CButton, CFormSelect } from '@coreui/react';
import "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/App.css";
import '@coreui/coreui/dist/css/coreui.min.css';

import BarChart from "../charts/BarChart.jsx";
// "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/StackedBarChart.jsx"
import PieChart from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/PieChart.jsx';
import StackedBarChart from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/StackedBarChart';

import kpi_json_file from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/data/kpi_json_file.json';
import selectable_fin_years from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/data/selectable_fin_years.json';
import chart_json_file from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/data/chart_json_file.json';

import { useEffect, useState } from 'react';

function Home() {
  const [finYearsSelected, setFinYearsSelected] = React.useState("2022/23");
  const [finYearPanel, setFinYearPanel] = React.useState("2022/23");

  const [finYearsItems, setFinYearsItems] = React.useState([]);

  const [kpiValue1, setKpiValue1] = React.useState(0);
  const [kpiValue2, setKpiValue2] = React.useState(0);
  const [kpiValue3, setKpiValue3] = React.useState(0);
  const [kpiValue4, setKpiValue4] = React.useState(0);

  const [kpiValue5Min, setKpiValue5Min] = React.useState("");
  const [kpiValue5Max, setKpiValue5Max] = React.useState("");
  const [kpiValue6Min, setKpiValue6Min] = React.useState("");
  const [kpiValue6Max, setKpiValue6Max] = React.useState("");
  const [kpiValue7Min, setKpiValue7Min] = React.useState("");
  const [kpiValue7Max, setKpiValue7Max] = React.useState("");
  const [kpiValue8Min, setKpiValue8Min] = React.useState("");
  const [kpiValue8Max, setKpiValue8Max] = React.useState("");

  const [chart1Values, setChart1Values] = React.useState([]);
  const [chart1Labels, setChart1Labels] = React.useState([]);

  const [chart2Values, setChart2Values] = React.useState([]);
  const [chart2Labels, setChart2Labels] = React.useState([]);

  const [chart3Values, setChart3Values] = React.useState([]);
  const [chart3Labels, setChart3Labels] = React.useState([]);

  const [chart4Values, setChart4Values] = React.useState([]);
  const [chart4Labels, setChart4Labels] = React.useState([]);

  const [chart5RecycleValues, setChart5RecycleValues] = React.useState([]);
  const [chart5LandfillValues, setChart5LandfillValues] = React.useState([]);
  const [chart5Labels, setChart5Labels] = React.useState([]);


  // const [chartData, setChartData] = React.useState({
  //   labels: ['Antrim and Newtownabbey', 'Ards and North Down', 'Armagh, Banbridge and Craigavon'],
  //   datasets: {
  //     'Recycled': [44.3, 50.8, 55.7],
  //     'Landfill': [55.7, 49.2, 44.3]
  //   }
  // });

  useEffect (() => {
    if (finYearsItems.length === 0) {
      setFinYearsItems(selectable_fin_years);
    }
  }, []);

  function submitButton() {
    setFinYearsSelected(finYearPanel);
  }

  useEffect (() => {
    setKpiValue1(kpi_json_file.kpi_1_output.values[finYearsSelected]);
    setKpiValue2(kpi_json_file.kpi_2_output.values[finYearsSelected]);
    setKpiValue3(kpi_json_file.kpi_3_output.values[finYearsSelected]);
    setKpiValue4(kpi_json_file.kpi_4_output.values[finYearsSelected]);
    // setKpiValue4Min(kpi_json_file.kpi_4_output.min_values[finYearsSelected]);
    // setKpiValue4Max(kpi_json_file.kpi_4_output.max_values[finYearsSelected]);
    setKpiValue5Min(kpi_json_file.kpi_5_output.min_values[finYearsSelected]);
    setKpiValue5Max(kpi_json_file.kpi_5_output.max_values[finYearsSelected]);
    setKpiValue6Min(kpi_json_file.kpi_6_output.min_values[finYearsSelected]);
    setKpiValue6Max(kpi_json_file.kpi_6_output.max_values[finYearsSelected]);
    setKpiValue7Min(kpi_json_file.kpi_7_output.min_values[finYearsSelected]);
    setKpiValue7Max(kpi_json_file.kpi_7_output.max_values[finYearsSelected]);
    setKpiValue8Min(kpi_json_file.kpi_8_output.min_values[finYearsSelected]);
    setKpiValue8Max(kpi_json_file.kpi_8_output.max_values[finYearsSelected]);

    setChart1Values(chart_json_file.chart_1[finYearsSelected].values);
    setChart1Labels(chart_json_file.chart_1[finYearsSelected].labels);
    setChart2Values(chart_json_file.chart_2[finYearsSelected].values);
    setChart2Labels(chart_json_file.chart_2[finYearsSelected].labels);
    setChart3Values(chart_json_file.chart_3[finYearsSelected].values);
    setChart3Labels(chart_json_file.chart_3[finYearsSelected].labels);
    setChart4Values(chart_json_file.chart_4[finYearsSelected].values);
    setChart4Labels(chart_json_file.chart_4[finYearsSelected].labels);

    setChart5RecycleValues(chart_json_file.chart_5[finYearsSelected].recycle_values);
    setChart5LandfillValues(chart_json_file.chart_5[finYearsSelected].landfill_values);
    setChart5Labels(chart_json_file.chart_5[finYearsSelected].labels);

  }, [finYearsSelected]);

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
                        <CCardHeader className='TileTitle'>Avg. Recycle Rate % - Household</CCardHeader>
                        <CCardBody className='KPITileText'>
                          <div className='KPIValue'>{kpiValue1}%</div>
                          <div className='KPITextMax'>{kpiValue5Max}</div>
                          <div className='KPITextMin'>{kpiValue5Min}</div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Avg. Recycle Rate % - Local Authority</CCardHeader>
                        <CCardBody className='KPITileText'>
                          <div className='KPIValue'>{kpiValue2}%</div>
                          <div className='KPITextMax'>{kpiValue6Max}</div>
                          <div className='KPITextMin'>{kpiValue6Min}</div>
                        </CCardBody>
                        
                      </CCard>
                    </CCol>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Landfill Waste Per Household (Tonnes)</CCardHeader>
                        <CCardBody className='KPITileText'>
                          <div className='KPIValue'>{kpiValue3}</div>
                          <div className='KPITextMax'>{kpiValue7Max}</div>
                          <div className='KPITextMin'>{kpiValue7Min}</div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Landfill Waste per capita (Tonnes)</CCardHeader>
                        <CCardBody className='KPITileText'>
                          <div className='KPIValue'>{kpiValue4}</div>
                          <div className='KPITextMax'>{kpiValue8Max}</div>
                          <div className='KPITextMin'>{kpiValue8Min}</div>
                        </CCardBody>
                      </CCard>
                    </CCol>
                  </CRow>
                </div>
                
              </div>

              <div className='large-tile-row-2'>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Recycle rate (%) by Local Authority</CCardHeader>
                      <CCardBody className='ChartContainer'>
                        <BarChart 
                          // chartData={chartData}
                          chartTitle='Recycle Rate (%)'
                          chartValues={chart1Values}
                          chartLabels={chart1Labels}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Destination of Annual Waste - Household (Tonnes)</CCardHeader>
                      <CCardBody className='ChartContainer'>
                        <PieChart 
                          chartData={chart2Values}
                          chartLabels={chart2Labels}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </div>

              <div className='large-tile-row-2'>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Recycle rate (%) by Household</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <BarChart
                            // <StackedBarChart 
                            // chartData={chartData}
                            chartTitle='Recycle Rate (%)'
                            chartValues={chart3Values}
                            chartLabels={chart3Labels}
                          />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Destination of Annual Waste - Household (Tonnes)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <PieChart 
                            chartData={chart4Values}
                            chartLabels={chart4Labels}
                          />
                        </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </div>

              <div className='large-tile-row-2'>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Recycle rate (%) by Household</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <StackedBarChart
                            chartTitle1='Recycled (Tonnes)'
                            chartValues1={chart5RecycleValues}
                            chartTitle2='Landfill (Tonnes)'
                            chartValues2={chart5LandfillValues}
                            chartLabels={chart5Labels}
                          />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    {/* <CCard>
                      <CCardHeader className='TileTitle'>Destination of Annual Waste - Household (Tonnes)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <PieChart 
                            chartData={chart4Values}
                            chartLabels={chart4Labels}
                          />
                        </CCardBody>
                    </CCard> */}
                  </CCol>
                </CRow>
              </div>

        </div>
   
    );
}

export default Home;