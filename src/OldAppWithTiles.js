import logo from './logo.svg';
import './App.css';
import { CContainer, CRow, CCol } from "@coreui/react";

import ContentCard from './components/cards/ContentCard';

function App() {
  return (
    <CContainer fluid className='Main-Container'>
       <div className="App">
      <CContainer>
        <CRow>
          <CCol sm="auto">
            <ContentCard 
              title="Card Number 1"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
              image="https://picsum.photos/200/300"
              button="Go somewhere"
            />
          </CCol>
          <CCol sm="auto">
            <ContentCard 
              title="Card Number 2"
              text="What more do you want from me?"
              image="https://picsum.photos/200/300"
              button="Go somewhere"
            />
          </CCol>
          <CCol sm="auto">
            <ContentCard 
              title="Card Number 3"
              text="Lee Me Alo e"
              image="https://picsum.photos/200/300"
              button="Go somewhere"
              />
          </CCol>
        </CRow>
      </CContainer>

    </div>
    </CContainer>

   
  );
}

export default App;
