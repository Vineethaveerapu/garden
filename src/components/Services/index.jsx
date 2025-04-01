import gardenServices from "../../data/services";
import styles from "./Services.module.css";
import ServiceCard from "../ServiceCard";
const Services = () => {
  return (
    <>
      <div className={styles.servicesHeader}>
        <h1>Our Services</h1>
        <p className={styles.servicesHeaderText}>
          We offer a wide range of services to help you create and maintain your
          dream garden.
        </p>
      </div>
      <div className={styles.servicesContainer}>
        {gardenServices.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </>
  );
};

export default Services;
