import { connect } from 'react-redux';

// on importe le composant de présentation
import ProjectsContent from 'src/components/Content/ProjectsContent';

import {
  previousItem,
  nextItem,
  previousLittleItem,
  nextLittleItem,
  toggleIsOpenModalProjects,
} from 'src/actions/projectsActions';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  slides: state.main.slides,
  slideIndex: state.main.slideIndex,
  isOpenModalProjects: state.main.isOpenModalProjects,
  littleSlideIndex: state.main.littleSlideIndex,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  previousItem: () => {
    dispatch(previousItem());
  },
  nextItem: () => {
    dispatch(nextItem());
  },
  previousLittleItem: () => {
    dispatch(previousLittleItem());
  },
  nextLittleItem: () => {
    dispatch(nextLittleItem());
  },
  toggleIsOpenModalProjects: () => {
    dispatch(toggleIsOpenModalProjects());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(ProjectsContent);
