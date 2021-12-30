import * as React from "react";
import Link from "@mui/material/Link";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Grid,
} from "@mui/material";

function LightBulbIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z" />
    </SvgIcon>
  );
}

type Place = {
  logo: string;
  name: string;
  description: string;
  titles: string[];
  year: string;
};

const listOfPlaces: Place[] = [
  {
    logo: "https://www.pngfind.com/pngs/m/432-4329153_atlassian-logo-triangle-hd-png-download.png",
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
