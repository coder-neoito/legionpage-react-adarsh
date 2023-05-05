import "./styles.css";
import Activities from "./components/Activities";
import User from "./components/User";
import { Grid, Stack } from "@mui/material";
import { activities, userData } from "./data";

export default function App() {
  return (
    <Stack gap={3}>
      <User userData={userData} />
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Activities
            duration="82.5 hours past two weeks"
            activities={activities}
          />
        </Grid>
      </Grid>
    </Stack>
  );
}
