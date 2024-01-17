import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

async function StaticWonder(id: string) {
  const res = await fetch(`http://localhost:3002/wonder-list/${id}`, {
    method: "GET",
  });

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await StaticWonder(params.id);
  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {data.length > 0 ? (
            <>
              <Card>
                <CardMedia
                  sx={{ height: 400 }}
                  image={data[0].image}
                  title={data[0].name}
                />
                <CardContent>
                  <Typography variant="h4" component="div">
                    {data[0].name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="text-gray"
                  >
                    {data[0].th_name}
                  </Typography>
                  <Typography gutterBottom variant="body1" component="div">
                    {data[0].detail}
                  </Typography>

                  <Typography gutterBottom variant="body2" component="div">
                    สถานที่: {data[0].location}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" size="large" href="/">
                    Back To Home
                  </Button>
                </CardActions>
              </Card>
            </>
          ) : null}
        </Grid>
      </Grid>
    </Container>
  );
}
