// import { Avatar } from "@mui/material";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import PersonJson from "../data/person.json";
function PersonTotal() {
  return (
    <>
      <Box width={"100%"} sx={{ display: "flex" }}>
        {PersonJson.slice(0, 6).map((item, i) => {
          return (
            <Link to={'/person/'+item.name}>
              <Card
                sx={{
                  width: 200,
                  maxHeight: 360,
                  backgroundColor: "black",
                  color: "white",
                }}
                key={i}
              >
                <CardContent sx={{ padding: 1, textAlign: "center" }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={item.avatar}
                    sx={{
                      width: "100%",
                      height: "100%",
                    }}
                    key={i}
                  />
                  <Typography sx={{ fontSize: 13, fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}
                  >
                    {item.age}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </Box>
    </>
  );
}
export default PersonTotal;
