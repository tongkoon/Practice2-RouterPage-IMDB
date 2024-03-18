import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import { MdOutlineAdd, MdOutlineExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

function MovieDetail({
  description,
  directors,
  writers,
  stars,
}: {
  description: string;
  directors: string[];
  writers: string[];
  stars: string[];
}) {
  const dataItem = [
    { name: "Director", content: directors },
    { name: "Writers", content: writers },
    { name: "Stars", content: stars },
  ];
  return (
    <>
      <Grid container>
        <Grid item xs={8} marginTop={2}>
          <Typography> {description} </Typography>
          <hr
            style={{
              backgroundColor: "#303030",
              height: "2px",
              border: "none",
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container>
                {dataItem.map((item, i) => {
                  return (
                    <Grid item xs={12}>
                      <Box sx={{ display: "flex" }} key={i}>
                        <Typography sx={{ fontWeight: "bold", marginRight: 2 }}>
                          {item.name}
                        </Typography>{" "}
                        {item.content?.map((content, index) => {
                          return (
                            <>
                              <Link to={"/person/" + content}>{content}</Link>
                              {item.content.length - 1 != index ? (
                                <Box marginLeft={1} marginRight={1}>
                                  ·
                                </Box>
                              ) : null}
                            </>
                          );
                        })}
                      </Box>
                      <hr
                        style={{
                          backgroundColor: "#303030",
                          height: "2px",
                          border: "none",
                        }}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <ButtonGroup
                color="info"
                variant="contained"
                // ref={anchorRef}
                aria-label="Button group with a nested menu"
                sx={{ width: "100%" }}
              >
                <Button
                  startIcon={<MdOutlineAdd size={30} />}
                  sx={{
                    bgcolor: "#E9D61C",
                    color: "black",
                    textTransform: "none",
                    width: "80%",
                    justifyContent: "flex-start",
                  }}
                >
                  <Box>
                    <Typography fontWeight={"bold"} fontSize={20}>
                      Add to Watchlist
                    </Typography>
                    <Typography>Added by 145K users</Typography>
                  </Box>
                </Button>

                <Button
                  size="small"
                  aria-label="select merge strategy"
                  aria-haspopup="menu"
                  sx={{
                    bgcolor: "#E9D61C",
                    color: "black",
                  }}
                >
                  <MdOutlineExpandMore size={40} />
                </Button>
              </ButtonGroup>
              <Box marginTop={2} display={"flex"}>
                <Link to={"#"}>475 User reviews</Link>
                <Box width={40}></Box>
                <Link to={"#"}>1151 Critic reviews</Link>
              </Box>
              <Box display={"flex"} marginTop={2}>
                <Typography
                  sx={{ bgcolor: "orange" }}
                  fontSize={20}
                  fontWeight={"bold"}
                  width={30}
                  textAlign={"center"}
                  marginRight={1}
                >
                  54
                </Typography>
                <Link to={"#"}>Metascore</Link>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MovieDetail;
