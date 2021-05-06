import { connect } from 'react-redux';

// on importe le composant de présentation
import PersonalSnackbar from 'src/components/DesignElements/PersonalSnackbar';

import { toggleIsOpenSnackbar } from 'src/actions/homeActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isASuccess: state.home.isASuccess,
  successMessage: state.home.successMessage,
  isOpenSnackbar: state.home.isOpenSnackbar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleIsOpenSnackbar: () => {
    dispatch(toggleIsOpenSnackbar());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(PersonalSnackbar);
