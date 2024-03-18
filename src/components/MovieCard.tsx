import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { MdPhotoLibrary, MdVideoLibrary } from "react-icons/md";

function MovieCard({ img, video }: { img: string; video: string }) {
  return (
    <Grid container marginTop={2}>
      <Grid item xs="auto">
        <img src={img} height={350} width={240} />
      </Grid>
      <Grid item xs="auto">
        <iframe
          width="690"
          height="350"
          src={video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Grid>
      <Grid item xs={2} paddingLeft={3}>
        <Grid
          item
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          rowGap={0.5}
        >
          <Grid item xs={12} sx={{ bgcolor: "#303030" }}>
            <Box
              height={174}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: -3,
              }}
            >
              <MdVideoLibrary size={40} />
              13 VIDEOS
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ bgcolor: "#303030" }}>
            <Box
              height={174}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: -3,
              }}
            >
              <MdPhotoLibrary size={40} />
              94 PHOTOS
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MovieCard;
