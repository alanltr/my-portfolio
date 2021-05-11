import lineUpImageHome from 'src/assets/projects/lineup-home.png';
import portfolioImageHome from 'src/assets/projects/portfolio-home.png';
import gifUnderContruction from 'src/assets/projects/gif-under-construction.gif';
import reactLogo from 'src/assets/logos/react.png';
import symfonyLogo from 'src/assets/logos/symfony.png';
import threejsLogo from 'src/assets/logos/threejs.png';
import reduxLogo from 'src/assets/logos/redux.png';
import mysqlLogo from 'src/assets/logos/mysql.png';
import backadmin from 'src/assets/projects/lineup/back-admin.png';
import backresto from 'src/assets/projects/lineup/back-resto.png';
import home from 'src/assets/projects/lineup/home.png';

export default [
  {
    title: 'LineUp',
    description: 'LineUp is my graduation project, an application for restaurants and them clients to manage their waiting line. The app has three interfaces, a first for the restaurant, its back office, a second for its customers and a third, which is the administrator\'s back office.',
    infos: 'We were 5 developers on this project. I was the scrum master and front developer.',
    front: [reactLogo, reduxLogo],
    back: [symfonyLogo, mysqlLogo],
    image: lineUpImageHome,
    carousel: [
      {
        title: 'Home',
        image: home,
      },
      {
        title: 'Restaurant Back Office',
        image: backresto,
      },
      {
        title: 'Admin Back Office',
        image: backadmin,
      },
    ],
  },
  {
    title: 'My Portfolio',
    description: 'The project you are currently on. I developed it with React & Redux, most of animations are made with only Css until for the smoky background which was made by hand with ThreeJs',
    infos: 'The recipe ? A slice of react, a lot of Css and we season with Threejs',
    front: [reactLogo, reduxLogo, threejsLogo],
    back: [''],
    image: portfolioImageHome,
    carousel: [
      {
        title: 'No preview for this project',
        image: '',
      },
      {
        title: 'You think you need it ?',
        image: '',
      },
      {
        title: 'Hum.. Still no preview.',
        image: '',
      },
    ],
  },
  {
    title: 'Next Project',
    description: 'Stay tuned. This will soon be replaced by a brand new project.',
    infos: 'Silence. We work',
    front: [''],
    back: [''],
    image: gifUnderContruction,
    carousel: [
      {
        title: 'No preview for this project',
        image: '',
      },
      {
        title: 'You think you need it ?',
        image: '',
      },
      {
        title: 'Hum.. Still no preview.',
        image: '',
      },
    ],
  },
];
