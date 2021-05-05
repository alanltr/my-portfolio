import { connect } from 'react-redux';

// on importe le composant de présentation
import MailModal from 'src/components/Content/MailModal';

import { changeField, sendEmail } from 'src/actions/homeActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  email: state.home.email,
  mailObject: state.home.mailObject,
  mailContent: state.home.mailContent,
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
