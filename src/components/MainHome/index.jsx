import styles from "./MainHome.module.css";

const MainHome = () => {
  return (
    <>
      <div className={styles.mainHome}>
        <div className={styles.mainHomeContent}>
          <h1>Nurturing Gardens, Changing Lives</h1>
          <p>
            Gardening is a rewarding hobby that allows you to cultivate beauty
            and tranquility. Whether you plant flowers, herbs, or vegetables,
            each garden reflects your personality.
          </p>
        </div>
      </div>
      <section className={styles.mainHomeSection}>
        <h2>What We Offer</h2>
        <p>
          We offer a wide range of services to help you create and maintain your
          garden.
        </p>
      </section>
    </>
  );
};

export default MainHome;
