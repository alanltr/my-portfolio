import { connect } from 'react-redux';

// on importe le composant de présentation
import PersonalSnackbar from 'src/components/DesignElements/PersonalSnackbar';

import { toggleIsOpenSnackbar } from 'src/actions/homeActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isASuccess: state.main.isASuccess,
  successMessage: state.main.successMessage,
  isOpenSnackbar: state.main.isOpenSnackbar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleIsOpenSnackbar: () => {
    dispatch(toggleIsOpenSnackbar());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(PersonalSnackbar);
