import { Button, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { usersData } from "../data";
import UserCard from "../components/UserCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const friends = useMemo(
    () =>
      usersData.filter((user) =>
        user.userName.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [searchQuery]
  );

  return (
    <Stack gap={2} p={3}>
      <Stack
        gap={2}
        direction="row"
        alignItems="center"
        p={2}
        bgcolor="hsl(0,0%,90%)"
      >
        <Typography>
          YOUR FRIENDS {usersData.length} /{" "}
          <Typography as="span" variant="caption">
            250
          </Typography>
        </Typography>
        <Button variant="contained" color="primary" sx={{ ml: "auto" }}>
          Manage Friends List
        </Button>
        <Button variant="contained" color="secondary">
          Add a Friend
        </Button>
      </Stack>
      <TextField
        onChange={(e) => setSearchQuery(e.target.value)}
        value={searchQuery}
        label=""
        placeholder="Search friends by name or game"
        sx={{ maxWidth: "500px" }}
        size="small"
      />
      <Stack gap={1}>
        <Typography>ONLINE</Typography>
        <Grid container spacing={2}>
          {friends.map((friend) => (
            <Grid item xs={4}>
              <Link to={`/${friend.userName}`} key={friend.id}>
                <UserCard user={friend} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};

export default Home;
