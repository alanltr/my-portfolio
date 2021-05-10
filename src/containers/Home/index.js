import { connect } from 'react-redux';

// on importe le composant de présentation
import Home from 'src/components/Pages/Home';

import { toggleIsOpenSocialMedia, toggleIsOpenModalMail } from 'src/actions/homeActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  isOpenSocialMedia: state.main.isOpenSocialMedia,
  isOpenModalMail: state.main.isOpenModalMail,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  toggleIsOpenSocialMedia: () => {
    dispatch(toggleIsOpenSocialMedia());
  },
  toggleIsOpenModalMail: () => {
    dispatch(toggleIsOpenModalMail());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
