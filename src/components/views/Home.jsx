import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import "/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/frontend/src/App.css";


function Home() {
    return (
        <div>
            {/* <div className='PageHeaderBar'>
                <div className='PageHeader'>Climate Track</div>
            </div>
            <div> */}
            <CRow>
              <CCol xs="12" sm="6" md="4">
                <CCard>
                  <CCardHeader>Tile 1</CCardHeader>
                  <CCardBody>Content of Tile 1</CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6" md="4">
                <CCard>
                  <CCardHeader>Tile 2</CCardHeader>
                  <CCardBody>Content of Tile 2</CCardBody>
                </CCard>
              </CCol>
              <CCol xs="12" sm="6" md="4">
                <CCard>
                  <CCardHeader>Tile 3</CCardHeader>
                  <CCardBody>Content of Tile 3</CCardBody>
                </CCard>
              </CCol>
            </CRow>

            </div>
        // </div>
   
    );
}

export default Home;