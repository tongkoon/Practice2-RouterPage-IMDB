import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Navbar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{ backgroundColor: "#5A5A58" }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            ></IconButton>

            <Typography
              variant="h4"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 700 ,color:'#E9B61C'}}
            >
              IMDB
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
export default Navbar;
