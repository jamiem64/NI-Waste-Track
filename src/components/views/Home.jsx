import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CDropdown, 
      CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider,
      CButton, CFormSelect } from '@coreui/react';
import '../../App.css';
import '@coreui/coreui/dist/css/coreui.min.css';

import BarChart from "../charts/BarChart.jsx";
import PieChart from '../charts/PieChart.jsx';
import StackedBarChart from '../charts/StackedBarChart.jsx';
import CompareBarChart from '../charts/CompareBarChart.jsx';
import WasteDestBarChart from '../charts/WasteDestBar.jsx';

// import kpi_json_file from '../data/kpi_json_file.json';
import per_capita_kpi_json_file from '../data/per_capita_kpi_json_file.json';

import selectable_fin_years from '../data/selectable_fin_years.json';

// import chart_json_file from '../data/chart_json_file.json';
// import standard_chart_json_file from '../data/standard_chart_json_file.json';
import per_capita_chart_json_file from '../data/per_capita_chart_json_file.json';

import { useEffect, useState } from 'react';

function Home() {
  let chart_json_file = per_capita_chart_json_file
  let kpi_json_file = per_capita_kpi_json_file

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

  const [chart1LAValues, setChart1LAValues] = React.useState([]);
  const [chart1HHValues, setChart1HHValues] = React.useState([]);
  const [chart1Labels, setChart1Labels] = React.useState([]);
  const [chart1AvgLAValues, setChart1AvgLAValues] = React.useState(0);
  const [chart1AvgHHValues, setChart1AvgHHValues] = React.useState(0);

  const [chart2LAReuseValues, setChart2LAReuseValues] = React.useState([]);
  const [chart2HHReuseValues, setChart2HHReuseValues] = React.useState([]);
  const [chart2LADryRecycleValues, setChart2LADryRecycleValues] = React.useState([]);
  const [chart2HHDryRecycleValues, setChart2HHDryRecycleValues] = React.useState([]);
  const [chart2LACompostValues, setChart2LACompostValues] = React.useState([]);
  const [chart2HHCompostValues, setChart2HHCompostValues] = React.useState([]);
  const [chart2LALandfillValues, setChart2LALandfillValues] = React.useState([]);
  const [chart2HHLandfillValues, setChart2HHLandfillValues] = React.useState([]);
  const [chart2Labels, setChart2Labels] = React.useState([]);

  const [chart3LAValues, setChart3LAValues] = React.useState([]);
  const [chart3HHValues, setChart3HHValues] = React.useState([]);
  const [chart3Labels, setChart3Labels] = React.useState([]);
  const [chart3AvgLAValues, setChart3AvgLAValues] = React.useState(0);
  const [chart3AvgHHValues, setChart3AvgHHValues] = React.useState(0);

  const [chart4LAValues, setChart4LAValues] = React.useState([]);
  const [chart4HHValues, setChart4HHValues] = React.useState([]);
  const [chart4Labels, setChart4Labels] = React.useState([]);
  const [chart4AvgLAValues, setChart4AvgLAValues] = React.useState(0);
  const [chart4AvgHHValues, setChart4AvgHHValues] = React.useState(0);

  const [chart5RecycleValues, setChart5RecycleValues] = React.useState([]);
  const [chart5LandfillValues, setChart5LandfillValues] = React.useState([]);
  const [chart5Labels, setChart5Labels] = React.useState([]);
  const [chart5AvgRecycleValues, setChart5AvgRecycleValues] = React.useState(0);
  const [chart5AvgLandfillValues, setChart5AvgLandfillValues] = React.useState(0);

  const [chart6Values, setChart6Values] = React.useState([]);
  const [chart6Labels, setChart6Labels] = React.useState([]);

  const [trendChart1RecycleValues, setTrendChart1RecycleValues] = React.useState([]);
  const [trendChart1LandfillValues, setTrendChart1LandfillValues] = React.useState([]);
  const [trendChart1Labels, setTrendChart1Labels] = React.useState([]);

  const [trendChart2LAReuseValues, setTrendChart2LAReuseValues] = React.useState([]);
  const [trendChart2HHReuseValues, setTrendChart2HHReuseValues] = React.useState([]);
  const [trendChart2LADryRecycleValues, setTrendChart2LADryRecycleValues] = React.useState([]);
  const [trendChart2HHDryRecycleValues, setTrendChart2HHDryRecycleValues] = React.useState([]);
  const [trendChart2LACompostValues, setTrendChart2LACompostValues] = React.useState([]);
  const [trendChart2HHCompostValues, setTrendChart2HHCompostValues] = React.useState([]);
  const [trendChart2LALandfillValues, setTrendChart2LALandfillValues] = React.useState([]);
  const [trendChart2HHLandfillValues, setTrendChart2HHLandfillValues] = React.useState([]);
  const [trendChart2Labels, setTrendChart2Labels] = React.useState([]);

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
    setKpiValue7Max(kpi_json_file.kpi_7_output.min_values[finYearsSelected]);
    setKpiValue7Min(kpi_json_file.kpi_7_output.max_values[finYearsSelected]);
    setKpiValue8Max(kpi_json_file.kpi_8_output.min_values[finYearsSelected]);
    setKpiValue8Min(kpi_json_file.kpi_8_output.max_values[finYearsSelected]);

    // setChart1Values(chart_json_file.chart_1[finYearsSelected].values);
    // setChart1Labels(chart_json_file.chart_1[finYearsSelected].labels);
    // setChart2Values(chart_json_file.chart_2[finYearsSelected].values);
    // setChart2Labels(chart_json_file.chart_2[finYearsSelected].labels);
    // setChart3Values(chart_json_file.chart_3[finYearsSelected].values);
    // setChart3Labels(chart_json_file.chart_3[finYearsSelected].labels);
    // setChart4Values(chart_json_file.chart_4[finYearsSelected].values);
    // setChart4Labels(chart_json_file.chart_4[finYearsSelected].labels);

    setChart1HHValues(chart_json_file.chart_1[finYearsSelected].hh);
    setChart1LAValues(chart_json_file.chart_1[finYearsSelected].la);
    setChart1Labels(chart_json_file.chart_1[finYearsSelected].labels);
    setChart1AvgLAValues(chart_json_file.chart_1[finYearsSelected].avg_la);
    setChart1AvgHHValues(chart_json_file.chart_1[finYearsSelected].avg_hh);

    setChart2HHReuseValues(chart_json_file.chart_2[finYearsSelected].hh.reuse);
    setChart2LAReuseValues(chart_json_file.chart_2[finYearsSelected].la.reuse);
    setChart2HHDryRecycleValues(chart_json_file.chart_2[finYearsSelected].hh.dry_recycle);
    setChart2LADryRecycleValues(chart_json_file.chart_2[finYearsSelected].la.dry_recycle);
    setChart2HHCompostValues(chart_json_file.chart_2[finYearsSelected].hh.compost);
    setChart2LACompostValues(chart_json_file.chart_2[finYearsSelected].la.compost);
    setChart2HHLandfillValues(chart_json_file.chart_2[finYearsSelected].hh.landfill);
    setChart2LALandfillValues(chart_json_file.chart_2[finYearsSelected].la.landfill);
    setChart2Labels(chart_json_file.chart_2[finYearsSelected].labels);

    setChart3LAValues(chart_json_file.chart_3[finYearsSelected].la);
    setChart3HHValues(chart_json_file.chart_3[finYearsSelected].hh);
    setChart3Labels(chart_json_file.chart_3[finYearsSelected].labels);
    setChart3AvgLAValues(chart_json_file.chart_3[finYearsSelected].avg_la);
    setChart3AvgHHValues(chart_json_file.chart_3[finYearsSelected].avg_hh);

    setChart4LAValues(chart_json_file.chart_4[finYearsSelected].la);
    setChart4HHValues(chart_json_file.chart_4[finYearsSelected].hh);
    setChart4Labels(chart_json_file.chart_4[finYearsSelected].labels);
    setChart4AvgLAValues(chart_json_file.chart_4[finYearsSelected].avg_la);
    setChart4AvgHHValues(chart_json_file.chart_4[finYearsSelected].avg_hh);

    setChart5RecycleValues(chart_json_file.chart_5[finYearsSelected].recycle_values);
    setChart5LandfillValues(chart_json_file.chart_5[finYearsSelected].landfill_values);
    setChart5Labels(chart_json_file.chart_5[finYearsSelected].labels);
    setChart5AvgRecycleValues(chart_json_file.chart_5[finYearsSelected].avg_recycle);
    setChart5AvgLandfillValues(chart_json_file.chart_5[finYearsSelected].avg_landfill);

    setChart6Values(chart_json_file.chart_6[finYearsSelected].values);
    setChart6Labels(chart_json_file.chart_6[finYearsSelected].labels);

    setTrendChart1RecycleValues(chart_json_file.trend_chart_1.recycle_values);
    setTrendChart1LandfillValues(chart_json_file.trend_chart_1.landfill_values);
    setTrendChart1Labels(chart_json_file.trend_chart_1.labels);

    setTrendChart2LAReuseValues(chart_json_file.trend_chart_2.la_reuse);
    setTrendChart2HHReuseValues(chart_json_file.trend_chart_2.hh_reuse);
    setTrendChart2LADryRecycleValues(chart_json_file.trend_chart_2.la_dry_recycle);
    setTrendChart2HHDryRecycleValues(chart_json_file.trend_chart_2.hh_dry_recycle);
    setTrendChart2LACompostValues(chart_json_file.trend_chart_2.la_compost);
    setTrendChart2HHCompostValues(chart_json_file.trend_chart_2.hh_compost);
    setTrendChart2LALandfillValues(chart_json_file.trend_chart_2.la_landfill);
    setTrendChart2HHLandfillValues(chart_json_file.trend_chart_2.hh_landfill);
    setTrendChart2Labels(chart_json_file.trend_chart_2.labels);

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
                      <CCardHeader className='TileTitle'>Recycle Rate (%) - LA vs HH</CCardHeader>
                      <CCardBody className='ChartContainer'>
                        <CompareBarChart 
                          chartLabel1='Household'
                          chartValues1={chart1HHValues}
                          chartAvg1={chart1AvgHHValues}
                          chartLabel2='Local Authority'
                          chartValues2={chart1LAValues}
                          chartAvg2={chart1AvgLAValues}
                          chartLabels={chart1Labels}
                        />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Breakdown of Waste Destination (Tonnes) - LA vs HH (Per Capita)</CCardHeader>
                      <CCardBody className='ChartContainer'>
                        <WasteDestBarChart 
                            chart2LAReuseValues={chart2LAReuseValues}
                            chart2LADryRecycleValues={chart2LADryRecycleValues}
                            chart2LACompostValues={chart2LACompostValues}
                            chart2LALandfillValues={chart2LALandfillValues}
                            chart2HHReuseValues={chart2HHReuseValues}
                            chart2HHDryRecycleValues={chart2HHDryRecycleValues}
                            chart2HHCompostValues={chart2HHCompostValues}
                            chart2HHLandfillValues={chart2HHLandfillValues}
                            chart2Labels={chart2Labels}
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
                      <CCardHeader className='TileTitle'>Total Waste (Tonnes) - LA vs HH (Per Capita)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <CompareBarChart 
                            chartLabel1='Household'
                            chartValues1={chart3HHValues}
                            chartAvg1={chart3AvgHHValues}
                            chartLabel2='Local Authority'
                            chartValues2={chart3LAValues}
                            chartAvg2={chart3AvgLAValues}
                            chartLabels={chart3Labels}
                          />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Total Landfill Waste (Tonnes) - LA vs HH (Per Capita)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <CompareBarChart 
                              chartLabel1='Household'
                              chartValues1={chart4HHValues}
                              chartAvg1={chart4AvgHHValues}
                              chartLabel2='Local Authority'
                              chartValues2={chart4LAValues}
                              chartAvg2={chart4AvgLAValues}
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
                      <CCardHeader className='TileTitle'>Total to Landfill vs Total to Recycling (Tonnes) - by LA (Per Capita)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <CompareBarChart 
                              chartLabel1='To Recycling'
                              chartValues1={chart5RecycleValues}
                              chartAvg1={chart5AvgRecycleValues}
                              chartLabel2='To Landfill'
                              chartValues2={chart5LandfillValues}
                              chartAvg2={chart5AvgLandfillValues}
                              chartLabels={chart5Labels}
                            />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Destination of Waste in NI (Actual)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <PieChart 
                              chartData={chart6Values}
                              chartLabels={chart6Labels}
                          />
                        </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </div>

              <div>
                <hr style={{ border: '1px dashed black' }} />
                <h2 style={{ textAlign: 'center' }}>Trend Charts</h2>
              </div>


              <div className='large-tile-row-2'>
                <CRow>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Total to Landfill vs Total to Recycling, Trend (Tonnes) - by LA (Per Capita)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <CompareBarChart 
                              chartLabel1='To Recycling'
                              chartValues1={trendChart1RecycleValues}
                              chartLabel2='To Landfill'
                              chartValues2={trendChart1LandfillValues}
                              chartLabels={trendChart1Labels}
                            />
                      </CCardBody>
                    </CCard>
                  </CCol>
                  <CCol>
                    <CCard>
                      <CCardHeader className='TileTitle'>Breakdown of Waste Destination, Trend (Tonnes) (Per Capita)</CCardHeader>
                        <CCardBody className='ChartContainer'>
                          <WasteDestBarChart 
                              chart2LAReuseValues={trendChart2LAReuseValues}
                              chart2LADryRecycleValues={trendChart2LADryRecycleValues}
                              chart2LACompostValues={trendChart2LACompostValues}
                              chart2LALandfillValues={trendChart2LALandfillValues}
                              chart2HHReuseValues={trendChart2HHReuseValues}
                              chart2HHDryRecycleValues={trendChart2HHDryRecycleValues}
                              chart2HHCompostValues={trendChart2HHCompostValues}
                              chart2HHLandfillValues={trendChart2HHLandfillValues}
                              chart2Labels={trendChart2Labels}
                            />
                        </CCardBody>
                    </CCard>
                  </CCol>
                </CRow>
              </div>
              

        </div>
   
    );
}

export default Home;