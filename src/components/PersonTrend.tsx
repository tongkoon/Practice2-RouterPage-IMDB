import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MdArrowDropDown, MdOutlineTrendingDown } from "react-icons/md";

function PersonTrend() {
  return (
    <>
      <Grid container height={"100%"} alignItems={"center"}>
        <Grid item xs={6}>
          <Typography textAlign={"right"} marginBottom={-1} color={"gray"}>
            IMDbPro
          </Typography>
          <Typography textAlign={"right"} fontWeight={"bold"}>
            STARMETER
          </Typography>
        </Grid>
        <Grid item xs={6} paddingRight={3}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <MdOutlineTrendingDown size={35} color="red" />
            <Typography marginLeft={0.5} fontSize={20} fontWeight={700}>
              7
            </Typography>
            <MdArrowDropDown size={20} color="red" />
            <Typography marginLeft={0.5} fontSize={20} fontWeight={700}>
              3
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default PersonTrend;
