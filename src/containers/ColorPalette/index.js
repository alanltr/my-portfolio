import { connect } from 'react-redux';

// on importe le composant de présentation
import ColorPalette from 'src/components/DesignElements/ColorPalette';

import { setColorToDisplay } from 'src/actions/homeActions';

// === mapStateToProps
const mapStateToProps = (state) => ({
  colorToDisplay: state.main.colorToDisplay,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setColorToDisplay: (color) => {
    dispatch(setColorToDisplay(color));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette);
