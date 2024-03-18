import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
    MdOutlineStar,
    MdOutlineStarBorder,
    MdOutlineTrendingUp,
} from "react-icons/md";

function MovieRate({rate}:{rate:number}) {
  return (
    <>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={4} height={23}>
          <Box marginLeft={-3}>
            <Typography
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                letterSpacing: 2,
              }}
            >
              IMDb RATING
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} height={23}>
          <Box marginLeft={-3}>
            <Typography
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                letterSpacing: 2,
              }}
            >
              YOUR RATING
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} height={23}>
          <Box marginLeft={-3}>
            <Typography
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "rgba(255,255,255,0.7)",
                textAlign: "center",
                letterSpacing: 2,
              }}
            >
              POPULARITY
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={5}>
              <Box marginLeft={-2} display={"flex"} justifyContent={"center"}>
                {" "}
                <MdOutlineStar size={35} color="#E9B61C" />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Box marginLeft={-3}>
                <Box display={"flex"} alignItems={"flex-end"}>
                  <Typography fontWeight={800} fontSize={19}>
                   {rate}
                  </Typography>{" "}
                  <Typography color={"gray"}>/10</Typography>
                </Box>
                <Typography color={"gray"} fontSize={15} marginTop={-0.5}>
                  {" "}
                  49k
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Box
            height={"100%"}
            marginLeft={-3}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box display={"flex"} alignItems={"center"} color={"#5799EF"}>
              <MdOutlineStarBorder size={35} />
              <Typography marginLeft={0.5} fontSize={20} fontWeight={700}>
                Rate
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            height={"100%"}
            marginLeft={-3}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={'center'}
          >
            <Box display={"flex"} alignItems={"center"} >
              {" "}
              <MdOutlineTrendingUp size={30} />
              <Typography marginLeft={1}>2</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default MovieRate;
