// src/mockData.js
export const domains = ["Power", "Agriculture", "Technology"];

export const mockHeadings = {
  Power: [
    {
      id: 1,
      heading: "Energy Sources",
      subheadings: ["Renewable Energy", "Non-Renewable Energy"],
    },
    {
      id: 2,
      heading: "Power Transmission",
      subheadings: ["High Voltage Transmission", "Smart Grids"],
    },
  ],
  Agriculture: [
    {
      id: 1,
      heading: "Crop Management",
      subheadings: ["Irrigation", "Fertilizers"],
    },
    {
      id: 2,
      heading: "Harvesting Techniques",
      subheadings: ["Manual Harvesting", "Machine Harvesting"],
    },
  ],
  Technology: [
    {
      id: 1,
      heading: "Software Development",
      subheadings: ["Agile Methodology", "DevOps"],
    },
    {
      id: 2,
      heading: "Emerging Technologies",
      subheadings: ["Artificial Intelligence", "Blockchain"],
    },
  ],
};

export const generateDocument = (heading, subheading) => {
  return `This is a generated document based on the ${heading} and ${subheading}.`;
};
