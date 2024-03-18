import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
import MovieRate from "../components/MovieRate";
import MovieType from "../components/MovieType";
import moviesJson from "../data/movie.json";

function MoviePage() {
  const navigate = useNavigate();
  const params = useParams();
  let rate,
    img: string,
    video: string,
    description: string,
    types: string[],
    directors: string[],
    writers: string[],
    stars: string[],
    year,
    H,
    m,
    time: number | undefined = 0;
  for (const movie of moviesJson) {
    if (movie.name == params.name) {
      console.log(movie.name);
      rate = movie.rate;
      img = movie.img;
      video = movie.video;
      types = movie.type;
      description = movie.description;
      directors = movie.director;
      writers = movie.writer;
      stars = movie.star;
      year = movie.year;

      time = movie.time;
      H = Math.floor(time! / 60);
      m = time! % 60;

      break;
    }
  }
  return (
    <>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        sx={{bgcolor:'',padding:'0',marginBottom:2,textTransform:'none'}}
      >
        {" "}
        <Typography variant="h4" sx={{ fontWeight: "700", color: "#E9B61C" }}>
          <MdArrowBackIosNew size={30} /> Back
        </Typography>
      </Button>
      <br />

      <Box sx={{ bgcolor: "rgba(255,255,255,10%)" }} paddingLeft={2}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4" sx={{ color: "inherit" }}>
              {params.name}
            </Typography>
            <Typography sx={{ color: "rgba(255,255,255,0.7)" }}>
              {year} · {H}h {m}m
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <MovieRate rate={+rate!}></MovieRate>
          </Grid>
        </Grid>
        
        <MovieCard img={img!} video={video!}></MovieCard>

        <MovieType types={types!}></MovieType>

        <MovieDetail
          description={description!}
          directors={directors!}
          writers={writers!}
          stars={stars!}
        ></MovieDetail>

      </Box>
    </>
  );
}

export default MoviePage;
