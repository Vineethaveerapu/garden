import gardenDesign from "../assets/service-img1.jpg";
import gardenInstallation from "../assets/service-img2.jpg";
import gardenRenovation from "../assets/service-img3.jpg";
import gardenMaintenance from "../assets/garden-img2.jpg";
import irrigationSolutions from "../assets/service-img2.jpg";
import gardenConsultations from "../assets/service-img3.jpg";

class GardenService {
  constructor({ image, title, description }) {
    this.image = image;
    this.title = title;
    this.description = description;
  }
}

const gardenServices = [
  new GardenService({
    image: gardenDesign,
    title: "Garden Design",
    description:
      "Transform your space with eco-friendly landscape designs that celebrate and biodiversity."
  }),
  new GardenService({
    image: gardenInstallation,
    title: "New Garden Installation",
    description:
      "Bring your garden to life with UrbanMali's expert installation services, creating lush, sustainable green spaces from the ground up."
  }),
  new GardenService({
    image: gardenRenovation,
    title: "Garden Renovation",
    description:
      "If you want to give your garden a facelift, UrbanMali's garden renovation services blending sustainability with fresh, vibrant designs."
  }),
  new GardenService({
    image: gardenMaintenance,
    title: "Garden Maintenance",
    description:
      "Keep your garden flourishing year-round with UrbanMali's expert maintenance services, designed to nurture every plant naturally."
  }),
  new GardenService({
    image: irrigationSolutions,
    title: "Irrigation Solutions and Care",
    description:
      "Ensure your garden stays lush and water-efficient with UrbanMali's sustainable irrigation solutions, tailored to each plant's needs."
  }),
  new GardenService({
    image: gardenConsultations,
    title: "Garden Consultations",
    description:
      "Start your green journey with UrbanMali's personalized garden consultation, where our experts help bring your vision to life sustainably."
  })
];

export default gardenServices;
