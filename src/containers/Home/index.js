import { connect } from 'react-redux';

// on importe le composant de présentation
import Home from 'src/components/Home';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isOpenSocialMedia: state.home.isOpenSocialMedia,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
