import styles from "./MediaText.module.css";

const MediaText = ({ image, alt, title, content, mediaOnRight }) => {
  return (
    <div className={styles.MediaText}>
      <img
        className={styles.MediaTextImage}
        src={image}
        alt={alt}
        width={"100%"}
      />
      <div
        className={styles.MediaTextContent}
        style={{ order: mediaOnRight ? -1 : 0 }}
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default MediaText;
