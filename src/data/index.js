import weeding from "../assets/weeding.png";
import watering from "../assets/watering.png";
import pruning from "../assets/pruning.png";
import fertilizing from "../assets/fertilizing.png";
import pest from "../assets/pest.png";
import seasonalProtection from "../assets/seasonalProtection.png";
import planting from "../assets/planting.png";
import soil from "../assets/soil.png";

class GardeningTask {
  constructor({ image, title, description }) {
    this.image = image;
    this.title = title;
    this.description = description;
  }
}

const gardenersTaskList = [
  new GardeningTask({
    image: weeding,
    title: "Weeding",
    description:
      "Weeding is the process of removing unwanted plants from a garden or lawn. It is a necessary part of maintaining a healthy garden and lawn."
  }),
  new GardeningTask({
    image: watering,
    title: "Watering",
    description:
      "Watering is the process of adding water to a garden or lawn. It is a necessary part of maintaining a healthy garden and lawn."
  }),
  new GardeningTask({
    image: pruning,
    title: "Prunning and Trimming",
    description:
      "Prunning and trimming is the process of cutting back plants to maintain a healthy garden and lawn."
  }),
  new GardeningTask({
    image: fertilizing,
    title: "Fertilizing",
    description:
      "Fertilizing is the process of adding nutrients to a garden or lawn. It is a necessary part of maintaining a healthy garden and lawn."
  }),

  new GardeningTask({
    image: pest,
    title: "Pest Control",
    description:
      "Pest control is the process of controlling pests in a garden or lawn. It is a necessary part of maintaining a healthy garden and lawn."
  }),
  new GardeningTask({
    image: seasonalProtection,
    title: "Seasonal Protection",
    description:
      "Seasonal protection is the process of protecting a garden or lawn from pests and diseases. It is a necessary part of maintaining a healthy garden and lawn."
  }),
  new GardeningTask({
    image: planting,
    title: "Planting",
    description:
      "Planting is the process of planting seeds or plants in a garden or lawn. It is a necessary part of maintaining a healthy garden and lawn."
  }),
  new GardeningTask({
    image: soil,
    title: "Soil Aeration",
    description:
      "Soil aeration is the process of adding air to the soil. It is a necessary part of maintaining a healthy garden and lawn."
  })
];

export default gardenersTaskList;
