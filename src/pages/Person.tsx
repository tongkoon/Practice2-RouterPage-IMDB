import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format, parseISO } from "date-fns";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import PersonDetail from "../components/PersonDetail";
import PersonTrend from "../components/PersonTrend";
import PersonJson from "../data/person.json";
function PersonPage() {
  const navigate = useNavigate();
  const params = useParams();
  let img: string,
    video: string,
    type: string,
    description: string,
    born: string;
  for (const person of PersonJson) {
    if (person.name == params.name) {
      console.log(person.name);
      img = person.img;
      video = person.video;
      type = person.type;
      description = person.description;
      born = format(parseISO(person.born), "MMM d, yyyy");
      break;
    }
  }

  return (
    <>
      <Button
        onClick={() => {
          navigate(-1);
        }}
        sx={{
          bgcolor: "",
          padding: "0",
          marginBottom: 2,
          textTransform: "none",
        }}
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
              {type!} · Soundtrack
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <PersonTrend />
          </Grid>
        </Grid>

        <MovieCard img={img!} video={video!}></MovieCard>

        <PersonDetail description={description!} born={born!}></PersonDetail>
      </Box>
    </>
  );
}

export default PersonPage;
