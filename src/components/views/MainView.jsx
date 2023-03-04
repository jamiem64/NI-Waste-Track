import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextInputForm from "../TextInputForm";
import '/Users/jamiemccay/Desktop/Personal/Projects/OuterHeaven/react-multi-page-website/src/App.css';

const MainView = (props) => {
    return (
        <div className='App'>
            <div className='Main-Header'>WordSter</div>
            <TextInputForm />
        </div>
      );
}
export default MainView;