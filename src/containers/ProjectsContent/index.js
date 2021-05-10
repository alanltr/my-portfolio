import { connect } from 'react-redux';

// on importe le composant de présentation
import ProjectsContent from 'src/components/Content/ProjectsContent';

import { previousItem, nextItem } from 'src/actions/projectsActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  slides: state.main.slides,
  slideIndex: state.main.slideIndex,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  previousItem: () => {
    dispatch(previousItem());
  },
  nextItem: () => {
    dispatch(nextItem());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContent);
