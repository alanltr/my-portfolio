// == Import npm
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Infos from 'src/components/Infos';

// == Import
import './home.scss';

// == Composant
const Home = () => (
  <motion.div
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    exit={{ scaleX: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="home-component">
      <h1 className="home-title">Welcome to my world</h1>
      <div className="about-link link">
        <Link to="/about">
          ABOUT
          <br />
          ME
        </Link>
      </div>
      <div className="projects-link link">
        <Link to="/projects">
          MY
          <br />
          WORK
        </Link>
      </div>
      <div className="infos-container">
        <Infos />
      </div>
      <div className="home-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        ornare finibus nisi sed porttitor.
        Morbi suscipit enim sagittis nisi iaculis maximus.
        Cras quis velit nec leo porttitor elementum. Suspendisse
        rutrum porttitor tellus, id tincidunt magna. Ut aliquet
        odio nunc, et tristique ipsum varius a. Pellentesque
        feugiat laoreet velit, sed tempus odio cursus in. Aenean
        venenatis vel justo et imperdiet. Nam venenatis, eros
        ac accumsan tempus, lacus metus ultricies nulla, quis
        ullamcorper nisi quam non nunc. Nullam pulvinar iaculis
        quam, eu luctus elit iaculis id. Sed eget odio at elit
        ornare luctus vitae in velit. Cras consectetur ut risus
        id ultrices. Maecenas maximus orci velit, non vestibulum nunc tincidunt sit amet.
        <br />
        <br />
        Proin bibendum ultricies purus a venenatis. Ut euismod
        sem ut turpis commodo vehicula. Vivamus vulputate purus sed
        risus maximus eleifend. Curabitur at vehicula massa. In
        lacinia blandit convallis. Curabitur eget malesuada nisl.
        Aenean porttitor sodales felis, quis aliquet massa varius
        quis. Sed fermentum in neque et volutpat. Maecenas euismod
        sagittis dui nec pharetra. Fusce tincidunt metus vitae orci
        venenatis consequat. Nam feugiat arcu imperdiet erat varius,
        sed vestibulum purus scelerisque. Aliquam nec justo et magna
        dictum cursus. Etiam porttitor varius quam nec tincidunt.
        <br />
        <br />
        Donec ornare, felis a blandit ornare, nisi libero elementum est, vitae
        porttitor turpis turpis vel ipsum. Vestibulum pretium
        consectetur ex, a blandit odio ullamcorper id. Cras sodales ultricies
        nibh nec porttitor. Suspendisse quis risus ac metus aliquet
        varius. Phasellus et sem turpis. Cras ultricies scelerisque ipsum, vel
        suscipit nisl lobortis eu. Sed eleifend volutpat lorem, quis
        pellentesque diam auctor a. Ut luctus, neque et varius pellentesque,
        nisi massa commodo neque, et suscipit augue dui vitae metus.
        Nullam lectus quam, aliquet in consequat convallis, luctus id eros.
        Quisque fermentum sed nisi quis hendrerit. In non nisl imperdiet
        purus maximus accumsan. Nulla eu odio eget purus tempor hendrerit.
        Aenean facilisis libero eget ipsum commodo sagittis. Nunc fringilla
        consectetur dolor, non vulputate tortor porttitor ac. Sed id est quis
        magna lobortis bibendum vitae auctor odio.
        <br />
        <br />
        In convallis purus ac nulla facilisis, nec varius risus egestas. Aenean sit
        amet nisi posuere, suscipit velit vitae, faucibus lorem. Praesent
        porta vel nisl pellentesque laoreet. Donec nulla nisl, commodo a justo nec,
        faucibus commodo sapien. Integer vitae odio pulvinar, tincidunt est
        consequat, fringilla urna. Suspendisse auctor odio sit amet rhoncus rutrum.
        Donec ligula metus, pulvinar sit amet tincidunt quis, pharetra at
        tellus. Aliquam pharetra neque eu rutrum euismod. Sed vel commodo ipsum, vel
        sagittis tortor. Proin eget ornare dolor. Donec nunc arcu, mollis
        a gravida at, elementum eu magna. Proin blandit ex est, id ullamcorper
        magna ullamcorper nec. Sed at vehicula massa.
      </div>
    </div>
  </motion.div>
);
// == Export
export default Home;
