import { Box, Grid } from "@mui/material";
import "./App.css";

function App() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box sx={{ bgcolor: 'red', height: 'auto', width: '100%' }}>xs=8</Box>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ bgcolor: 'red', height: 'auto', width: '100%' }}>xs=4</Box>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
