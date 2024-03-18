import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  MdAdd,
  MdOutlineStar,
  MdOutlineStarBorder,
  MdPlayArrow,
} from "react-icons/md";
import { Link } from "react-router-dom";
import moviesJson from "../data/movie.json";

function MovieTotal() {
  const movies = moviesJson;
  return (
    <>
      <Box width={"100%"} sx={{ display: "flex" }}>
        {movies.map((item, i) => {
          return (
            <Card
              sx={{
                width: 200,
                maxHeight: 360,
                margin: 0.5,
                backgroundColor: "rgba(255,255,255,10%)",
                color: "white",
              }}
              key={i}
            >
              <Link
                to={"/movie/"+item.name}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <CardMedia sx={{ height: 230 }} image={item.img} />
                <CardContent sx={{ padding: 1, marginBottom: -2 }}>
                  <Box sx={{ display: "flex" }}>
                    <MdOutlineStar color="#E9B61C" />
                    <Typography
                      sx={{ fontSize: 13, color: "rgba(255,255,255,60%)" }}
                    >
                      {item.rate}
                    </Typography>
                    <IconButton
                      size="small"
                      color="primary"
                      sx={{ marginTop: -1, marginLeft: 2 }}
                    >
                      <MdOutlineStarBorder />
                    </IconButton>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {i + 1}. {item.name}
                  </Typography>
                </CardContent>
              </Link>

              <CardActions sx={{ display: "flex", flexDirection: "column" }}>
                <Button
                  size="small"
                  sx={{
                    width: "100%",
                    textTransform: "none",
                    backgroundColor: "rgb(255,255,255,0.1)",
                    fontWeight: "bold",
                  }}
                >
                  <MdAdd size={20} />
                  Watchlist
                </Button>
                <Button
                  size="small"
                  sx={{
                    width: "100%",
                    textTransform: "none",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  <MdPlayArrow size={20} />
                  Trailer
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </>
  );
}

export default MovieTotal;
