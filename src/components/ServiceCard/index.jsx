import styles from "./ServiceCard.module.css";

const ServiceCard = ({ service }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={service.image} alt={service.title} width={300} height={300} />
      <div className={styles.serviceCardContent}>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
