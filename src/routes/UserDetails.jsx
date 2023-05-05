import { Grid, Stack } from "@mui/material";
import React from "react";
import User from "../components/User";
import Activities from "../components/Activities";
import Online from "../components/Online";
import { useParams } from "react-router-dom";
import { usersData } from "../data";

const UserDetails = () => {
  const { userName } = useParams();
  const userData = usersData.find((user) => user.userName === userName);
  return (
    <Stack gap={3} p={3}>
      <User userData={userData} />
      <Grid container spacing={5}>
        <Grid item xs={8}>
          <Activities
            duration="82.5 hours past two weeks"
            activities={userData.activities}
          />
        </Grid>
        <Grid item xs={4}>
          <Online data={{ badges: 6, games: 60, reviews: 5 }} />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default UserDetails;
