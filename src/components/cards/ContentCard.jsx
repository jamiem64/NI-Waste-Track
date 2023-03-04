import { CCard, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from "@coreui/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import logo from '../../assets/img/brand/coreui-base.svg';
// import './App.css';


const ContentCard = (props) => {

    return (
        <div>
            <CCard style={{ width: '18rem' }}>
                <CCardImage orientation="top"/>
                <CCardBody>
                <CCardTitle>{props.title}</CCardTitle>
                <CCardText>
                    {props.text}
                </CCardText>
                <CButton href="#">{props.button}</CButton>
                </CCardBody>
            </CCard>

        </div>
    )
}
export default ContentCard;

