import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow, CDropdown, 
      CDropdownToggle, CDropdownMenu, CDropdownItem, CDropdownDivider,
      CButton, CFormSelect } from '@coreui/react';
import "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/App.css";
import '@coreui/coreui/dist/css/coreui.min.css';

import StackedBarChart from "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/StackedBarChart.jsx";
// "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/StackedBarChart.jsx"
import PieChart from '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/components/charts/PieChart.jsx';



function Home() {
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
                                  options={[
                                    { label: '2019/20', value: '2019/20' },
                                    { label: '2020/21', value: '2020/21' },
                                    { label: '2021/22', value: '2021/22' }
                                  ]}
                                />
                              </div>
                            </div>
                            <div className='SubmitButtonPanel'>
                                <CButton color="primary">Submit</CButton>
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
                        <CCardBody className='KPITileText'>56.7%</CCardBody>
                      </CCard>
                    </CCol>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Avg. Recycle Rate % (Local Authority)</CCardHeader>
                        <CCardBody className='KPITileText'>49.2%</CCardBody>
                      </CCard>
                    </CCol>
                    <CCol>
                      <CCard className='KPITile'>
                        <CCardHeader className='TileTitle'>Landfill Waste Per Household (Tonnes)</CCardHeader>
                        <CCardBody className='KPITileText'>23.7</CCardBody>
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