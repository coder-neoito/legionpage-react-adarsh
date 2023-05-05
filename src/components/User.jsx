import { Grid, Avatar, Typography, Stack, Box, Button } from "@mui/material";

const User = ({ userData }) => {
  const { name, avatar, userName, country, state, about, level, xp } = userData;

  return (
    <Grid container spacing={5}>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          <Grid item xs="auto">
            <Avatar
              src={avatar}
              alt={userName}
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: 0,
                aspectRatio: "1/1",
              }}
            />
          </Grid>
          <Grid item xs sx={{ textAlign: "left", mt: 2 }}>
            <Typography variant="h5">{userName}</Typography>
            <Typography variant="body2">
              {`${name}, ${state}, ${country}`}
            </Typography>
            <Typography variant="body2" mt={2}>
              {about}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Stack gap={3}>
          <Typography>
            Level
            <Typography
              ml={1}
              as="span"
              sx={{
                aspectRatio: "1/1",
                border: "1px solid red",
                borderRadius: "50%",
              }}
              p={0.5}
            >
              {level}
            </Typography>
          </Typography>
          <Box sx={{ p: 1, bgcolor: "gray", color: "white" }}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs="auto">
                <Avatar
                  src={avatar}
                  alt={userName}
                  sx={{
                    width: "50px",
                    height: "50px",
                    borderRadius: 0,
                  }}
                />
              </Grid>
              <Grid item xs textAlign="left">
                <Typography variant="body2">Years of Service</Typography>
                <Typography variant="body2">{xp} XP</Typography>
              </Grid>
            </Grid>
          </Box>
          <Stack direction="row" gap={1}>
            <Button variant="contained">Message</Button>
            <Button variant="contained" sx={{ minWidth: 0 }}>
              .
            </Button>
            <Button variant="contained" sx={{ minWidth: 0 }}>
              .
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default User;
