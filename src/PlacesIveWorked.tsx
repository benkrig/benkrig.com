import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { listOfPlaces } from "./data";

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
