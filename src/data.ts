type Place = {
  logo: string;
  name: string;
  description: string;
  titles: string[];
  year: string;
};

export const listOfPlaces: Place[] = [
  {
    logo: "images/vertical-logo-gradient-blue-atlassian.png",
    name: "Atlassian",
    description:
      "Initially I worked on Atlassian's internal PaaS, Micros. Currently, I work on a new product at Atlassian called Compass.",
    titles: [
      "Senior Software Engineer",
      "Software Engineer II",
      "Software Engineer I",
    ],
    year: "2020 - Current",
  },
];
