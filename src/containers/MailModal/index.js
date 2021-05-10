import { connect } from 'react-redux';

// on importe le composant de présentation
import MailModal from 'src/components/Content/MailModal';

import { changeField, sendEmail } from 'src/actions/homeActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  email: state.main.email,
  mailObject: state.main.mailObject,
  mailContent: state.main.mailContent,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue.target.value, newValue.target.name));
  },
  sendEmail: () => {
    dispatch(sendEmail());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(MailModal);
