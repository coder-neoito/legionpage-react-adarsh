import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const UserCard = ({ user }) => {
  return (
    <Stack direction="row">
      <Avatar
        src={user.avatar}
        alt={user.userName}
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: 0,
        }}
      />
      <Box
        sx={({ palette }) => ({
          width: "5px",
          height: "100%",
          bgcolor: "red",
        })}
      />
      <Box p={1} bgcolor="hsl(0,0%,90%)" flex={1}>
        <Typography color="primary">{user.userName}</Typography>
      </Box>
    </Stack>
  );
};

export default UserCard;
