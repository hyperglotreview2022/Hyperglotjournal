import React from 'react';
import styles from '../../src/styles/Home/mentions.module.css'; // Replace with the correct path to your CSS module file

const Mentions = () => {
  return (
    <>
      <div className={styles.frombigcont}>
        <div className={styles.frommedcont}>
          <div className={styles.newcontainer}>
            <img className={styles.fixedimg} src="/heroimages/5.jpg" alt="img" />
            <div className={styles.fromcontainer}>
              <img className={styles.fromimg} src="/users/1.png" alt="img" />
              <div className={styles.fromleft}>
                <div className={styles.from1}>Lorem ipsum dolor sit amet.</div>
                <div className={styles.from2}>by lorem</div>
                <div className={styles.from3}>Read More</div>
              </div>
              <div className={styles.fromright}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ab eos minus. Commodi vel, non earum, excepturi doloremque quidem harum facilis magni qui a tenetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ab eos minus.
              </div>
            </div>
          </div>
          <div className={styles.blankspace}>
            <div className={styles.blankspacel}>
              <div className={styles.blankspacel1}></div>
              <div className={styles.blankspacel2}></div>
              <div className={styles.blankspacel3}></div>
            </div>
            <div className={styles.blankspacer}></div>
          </div>
        </div>
      </div>

      <div className={styles.frombigcont}>
        <div className={styles.frommedcont1}>
          <div className={styles.newcontainer}>
            <img className={styles.fixedimg} src="/heroimages/5.jpg" alt="img" />
            <div className={styles.fromcontainer}>
              <img className={styles.fromimg} src="/users/2.png" alt="img" />
              <div className={styles.fromleft}>
                <div className={styles.from1}>Lorem ipsum dolor sit amet.</div>
                <div className={styles.from2}>by lorem</div>
                <div className={styles.from3}>Read More</div>
              </div>
              <div className={styles.fromright}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ab eos minus. Commodi vel, non earum, excepturi doloremque quidem harum facilis magni qui a tenetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam ab eos minus.
              </div>
            </div>
          </div>
          <div className={styles.blankspace}>
            <div className={styles.blankspacel}>
              <div className={styles.blankspacel1}></div>
              <div className={styles.blankspacel2}></div>
              <div className={styles.blankspacel3}></div>
            </div>
            <div className={styles.blankspacer}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mentions;
