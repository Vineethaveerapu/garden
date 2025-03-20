import styles from "./MainHome.module.css";
import gardenersTaskList from "../../data";

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

        <div className={styles.taskContainer}>
          {gardenersTaskList.map((task) => (
            <div key={task.title} className={styles.taskItem}>
              <figure className={styles.taskImage}>
                <img src={task.image} alt={task.title} width={70} />
              </figure>
              <div className={styles.taskContent}>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MainHome;
