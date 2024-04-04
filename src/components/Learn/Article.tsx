import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";

export interface IArticle {
  title: string;
  readTime: string;
  image: string;
  link: string;
  description: string;
}

function Article({ title, image, readTime, link, description }: IArticle) {
  return (
    <Card
      sx={{
        width: "100%",
        padding: "10px",
        // height: "400px",
        boxShadow: "none",
        borderRadius: "12px",
      }}
    >
      <CardActionArea sx={{ border: "0.2px solid grey" }}>
        <CardMedia
          sx={{
            height: 200, // Adjust the image height as needed
            objectFit: "cover", // Maintain the aspect ratio of the image
            marginBottom: "10px",
            borderRadius: "12px",
          }}
          image={image}
          title={title}
        />
        <CardContent>
          <Grid
            container
            direction="column"
            sx={{
              margin: "auto",
              width: "100%",
              height: "100%",
            }}
          >
            <Grid
              item
              xs={4}
              sm={4}
              lg={4}
              sx={{
                display: "flex",
                width: "100%",
                height: "100%",
              }}
            >
              <Typography
                gutterBottom
                variant="h3"
                component="div"
                sx={{ paddingBottom: "10px" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6} lg={6} width={"100%"}>
              <Typography
                variant="body1"
                gutterBottom
                paragraph
                sx={{
                  //   height: "80px",
                  //   overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </Typography>
            </Grid>
            <Grid
              item
              container
              xs={2}
              sm={2}
              lg={2}
              sx={{
                display: "flex",
                witdth: "100%",
                paddingTop: "15px",
              }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle2" gutterBottom>
                  {readTime}
                </Typography>
                <Chip label="Read more" />
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Article;
