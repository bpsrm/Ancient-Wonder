/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Grid,
  Divider,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

import Link from "next/link";

async function WonderGroup() {
  const res = await fetch("http://localhost:3002/wonder-list", {
    method: "GET",
  });
  return res.json();
}

type WonderType = {
  id: number;
  name: string;
  th_name: string;
  location: string;
  image: string;
};

export default async function page() {
  const data = await WonderGroup();
  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Ancient Wonders
      </h1>
      <Grid container spacing={2}>
        {data.map((wonders: WonderType) => (
          <Grid item xs={12} md={4} key={wonders.id}>
            <Card>
              <CardMedia
                sx={{ height: 200 }}
                image={wonders.image}
                title={wonders.name}
              />
              <CardContent>
                <Typography variant="subtitle2" component="div">
                  <span className="text-gray">{wonders.th_name}</span>
                </Typography>
                <Typography variant="subtitle1" component="div">
                  {wonders.name}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "space-between" }}>
                <Typography variant="body2" component="div">
                  {wonders.location}
                </Typography>
                <Divider
                  orientation="vertical"
                  component="div"
                  style={{ height: "30px", margin: "0 10px" }}
                />
                <Link href={"/" + wonders.id}>
                  <Button variant="contained">Learn More</Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
