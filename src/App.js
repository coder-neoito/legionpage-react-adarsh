import Activities from "./components/Activities";
import User from "./components/User";
import { Grid, Stack } from "@mui/material";

const userData = {
  avatar:
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  userName: "Pogative",
  name: "Connor",
  state: "Califonria",
  country: "United States",
  level: 10,
  xp: 500,
  about: "Anything with strategy building",
};

export default function App() {
  return (
    <Stack gap={3}>
      <User userData={userData} />
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Activities duration="82.5 hours past two weeks" />
        </Grid>
      </Grid>
    </Stack>
  );
}
