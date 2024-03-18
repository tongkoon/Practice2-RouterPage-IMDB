/* eslint-disable @typescript-eslint/no-unused-vars */
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { format } from 'date-fns';
import { MdArrowForwardIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import MovieTotal from "../components/MovieTotal";
import PersonCard from "../components/PersonTotal";

function HomePage() {
  const navigate = useNavigate();
  const currentDate = new Date(); 

  return (
    <>
      <Box
        paddingLeft={0.8}
        sx={{ borderLeft: "3px solid #E9B61C", height: 25 }}
      >
        <Typography
          // variant="h6"
          gutterBottom
          sx={{ fontWeight: "700" }}
        >
          Top 10 on IMDb this week
        </Typography>
      </Box>
      <Box
        sx={{
          // bgcolor: "green",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MovieTotal />
      </Box>
      {/* <Box sx={{ bgcolor: "#cfe8fc", height: "50vh" }} onClick={()=>{navigate('/movie')}}/> */}

      <Box
        paddingLeft={0.8}
        marginTop={5}
        sx={{ borderLeft: "3px solid #E9B61C", height: 25 }}
      >
        <Typography
          sx={{fontWeight: "700"}}
        >
          Born today  <MdArrowForwardIos size={15} />
        </Typography>
      </Box>
      <Typography marginTop={1} marginBottom={1} sx={{color:'rgba(255,255,255,0.7)'}}>
        People born on {format(currentDate,'MMMM d')} 
      </Typography>
        <PersonCard/>
    </>
  );
}

export default HomePage;
