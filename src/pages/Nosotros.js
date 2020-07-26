import React from "react";
import imgWS from '../img/WS2020.jpg';
import { Link } from 'react-router-dom';


const Nosotros = () => {
  return (
    <>


      <div className="container mt-5">
        <h3><bold>About us</bold></h3>
        <br></br>
        <p>We are an independent app design and development studio, continuously experimenting in app stores. </p>
        <p>Our experience is the result of various successes and failures, and we do our best to deliver applications that enhance the user experience.</p>

        <p>Our fist app, called “Chyster jokes” was one of the most downloaded adult jokes apps some years ago.</p>

        <p>In 2019, we developed “The joker”, designed for a larger audience, and in 2020 it reached the top charts in jokes apps in Spain, Mexico and USA in the Google Play store.</p>

        <p>Our last app launched also in 2020 is called “Tweetline Podcast”, and with it we pretend to offer a new wat to get news from the Twitter social network.</p>

        <p>If you want to see more details about our apps, do not hesitate to visit the <Link to="/productlist">Apps</Link>  section of this website.</p>

      </div>
      <div className="container mt-5">
        <div>
          <img src={imgWS} className="img" alt="" />

        </div>
      </div>

    </>
  );
};

export default Nosotros;

/*

  <div className="container mt-5">
        <h3><bold>Quienes somos</bold></h3>
        <br></br>
        <p>Somos un estudio independiente de diseño y desarrollo de aplicaciones que estamos experimentando constantemente en las tiendas de apps. </p>
        <p>Nuestra experiencia es el resultado de varios éxitos y fracasos, y hacemos lo mejor para poder brindar apps que mejoren la experiencia de los usuarios.</p>

        <p>Nuestra primera app Chyster chistes logró estar entre las aplicaciones de chistes más descargadas para público adulto.</p>

        <p>Luego lanzamos en 2019 Chistesparatodos destinada a todo público, la cual está actualmente en las primeras posiciones de Google Play en apps de chistes.</p>

        <p>Nuestra última aplicación, lanzada en 2020 es Twetline Podcast, con la cual pretendemos ofrecer una manera diferente de informarse en la red social Twitter.</p>

        <p>Si querés concoer más sobre nuestros productos, no dudes en ir a la sección Apps </p>

      </div>
      <div className="container mt-5">
        <div>
          <img src={imgWS} className="img" alt="" />

        </div>
      </div>


*/
