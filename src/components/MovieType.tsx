import { Chip } from "@mui/material";
import { Box } from "@mui/system";

function MovieType({ types }: { types: string[] }) {
  return (
    <Box>
      {types?.map((item, i) => {
        return (
          <Chip
            label={item}
            variant="outlined"
            sx={{ color: "inherit", marginRight: 1 }}
            key={i}
          />
        );
      })}
    </Box>
  );
}
export default MovieType;
