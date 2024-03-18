import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MdOutlineAdd } from "react-icons/md";
import { Link } from "react-router-dom";

function PersonDetail({description,born}:{description:string,born:string}){
    return(
        <>
        <Grid container>
          <Grid item xs={7} marginTop={2}>
            <Typography> {description!} </Typography>
            <hr
              style={{
                backgroundColor: "#303030",
                height: "2px",
                border: "none",
              }}
            />

            <Box sx={{ display: "flex" }}>
              <Typography sx={{ fontWeight: "bold", marginRight: 2 }}>
                More at IMDbPro
              </Typography>{" "}
              <Link to={"#"}>Contact Info</Link>
              <Box marginLeft={1} marginRight={1}>
                ·
              </Box>
              <Link to={"#"}>Agent Info</Link>
              <Box marginLeft={1} marginRight={1}>
                ·
              </Box>
              <Link to={"#"}>Resume</Link>
            </Box>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={4} paddingTop={5}>
            <Typography fontWeight={"bold"} fontSize={24} marginBottom={2}>
              Born {born!}
            </Typography>
            <Button
              startIcon={<MdOutlineAdd size={28} />}
              sx={{
                bgcolor: "#E9D61C",
                color: "black",
                textTransform: "none",
                width: "96%",
                justifyContent: "flex-start",
              }}
            >
              <Box>
                <Typography fontWeight={"bold"} fontSize={16}>
                  Add to list
                </Typography>
              </Box>
            </Button>
          </Grid>
        </Grid>
        
        </>
    );
}

export default PersonDetail;