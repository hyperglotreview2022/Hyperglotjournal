import React, { useState } from 'react';
import styles from "../../src/styles/Home/hero.module.css"; // Replace with the actual path to your CSS file

const HeroContainer = () => {
    const [image, setImage] = useState("/heroimages/1.jpg")
  const changeURL1 = () => {
    setImage("/heroimages/1.jpg")
  };

  const changeURL2 = () => {
    setImage("/heroimages/2.jpg")
  };

  const changeURL3 = () => {
    setImage("/heroimages/3.jpg")
  };

  const changeURL4 = () => {
    setImage("/heroimages/4.jpg")
  };

  return (
    <div className={styles.herocontainer}>
      <div className={styles.imgcontainer}>
        <img className={styles.img} src={image} alt="img" />
      </div>
      <div className={styles.herotextbigcont}>
        <div
            onMouseOver={changeURL1}
            className={styles.herotextcont}>
          <div className={styles.herofirsttext}>In the Current Issue</div>
          <div className={styles.herosectext}>Lorem ipsum dolor sit amet</div>
          <div className={styles.herolasttext}>By lorem ipsum</div>
        </div>
        <div
          id="show2"
          onMouseOver={changeURL2}
          className={styles.herotextcont}
        >
          <div className={styles.herofirsttext}>In the Current Issue</div>
          <div className={styles.herosectext}>Lorem ipsum dolor sit amet</div>
          <div className={styles.herolasttext}>By lorem ipsum</div>
        </div>
        <div
          onMouseOver={changeURL3}
          className={styles.herotextcont}
        >
          <div className={styles.herofirsttext}>In the Current Issue</div>
          <div className={styles.herosectext}>Lorem ipsum dolor sit amet</div>
          <div className={styles.herolasttext}>By lorem ipsum</div>
        </div>
        <div
          onMouseOver={changeURL4}
          className={styles.herotextcont}
        >
          <div className={styles.herofirsttext}>In the Current Issue</div>
          <div className={styles.herosectext}>Lorem ipsum dolor sit amet</div>
          <div className={styles.herolasttext}>By lorem ipsum</div>
        </div>
        <div className={styles.seemore}>SEE MORE...</div>
      </div>
    </div>
  );
};

export default HeroContainer;