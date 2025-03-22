import styles from "./Garden.module.css";
import MediaText from "../MediaText";
import gardenImg2 from "/src/assets/garden-img2.jpg";
import gardenImg3 from "/src/assets/garden-img3.jpg";

const Garden = () => {
  return (
    <>
      <div className={styles.gardenContainer}>
        <h2>Create your dream Garden at Home</h2>
      </div>
      <div className={styles.gardenContent}>
        <h3>From the ground up</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
        <MediaText
          image={gardenImg2}
          alt="Garden"
          title="Site Visit and design process"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
        <MediaText
          mediaOnRight={true}
          image={gardenImg3}
          alt="Garden"
          title="Installation Content"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        />
      </div>
    </>
  );
};

export default Garden;
