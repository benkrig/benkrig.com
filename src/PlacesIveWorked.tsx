import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Card, CardContent, CardHeader, Grid } from "@mui/material";

type Place = {
  logo: string;
  name: string;
  description: string;
  titles: string[];
  year: string;
};

const listOfPlaces: Place[] = [
  {
    logo: "images/vertical-logo-gradient-blue-atlassian.png",
    name: "Atlassian",
    description:
      "Initially I worked on Atlassian's internal PaaS, Micros. Currently, I work on a new product at Atlassian called Compass.",
    titles: ["Software Engineer I", "Software Engineer II"],
    year: "2020 - Current",
  },
];

export default function PlacesIveWorked() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={12} md={4}>
        {listOfPlaces.map((place) => (
          <Card>
            <CardHeader
              avatar={<Avatar src={place.logo} variant="square" />}
              title={place.name}
              subheader={place.year}
            />
            <CardContent>
              <Typography variant="body1">My work</Typography>
              <Typography variant="body2" gutterBottom color="text.secondary">
                {place.description}
              </Typography>
              <Typography variant="body1">Titles</Typography>
              {place.titles.map((title) => (
                <Typography variant="body2" color="text.secondary">
                  {title}
                </Typography>
              ))}
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
}
