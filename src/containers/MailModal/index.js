import { connect } from 'react-redux';

// on importe le composant de présentation
import MailModal from 'src/components/Content/MailModal';

import { changeField, sendEmail, setCheckboxAgreement } from 'src/actions/homeActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.main.email,
  mailObject: state.main.mailObject,
  mailContent: state.main.mailContent,
  checkboxAuth: state.main.checkboxAuth,
  captchaToken: state.main.captchaToken,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue.target.value, newValue.target.name));
  },
  setCheckboxAgreement: () => {
    dispatch(setCheckboxAgreement());
  },
  sendEmail: () => {
    dispatch(sendEmail());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MailModal);
