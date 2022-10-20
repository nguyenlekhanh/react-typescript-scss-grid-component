import React from "react";
import Box from "./components/box/Box";
import Grid from "./components/Grid/Grid";
import GridRuler from "./components/GridRuler/GridRuler";

const App: React.FC = () => {
  return (
    <div
      className="App"
      style={{ margin: "16px", position: "relative", height: "100vh" }}
    >
      <GridRuler spacing="sm"></GridRuler>

      <Grid
        container
        spacing="sm"
        alignItem="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 1</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 2</Box>
        </Grid>

        <Grid item xs={1} sm={6} md={4} lg={3}>
          <Box>Box 3</Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
