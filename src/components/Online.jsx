import { Avatar, Stack, Typography } from "@mui/material";

const Online = ({ data }) => {
  const { badges, games, inventory, reviews } = data;
  return (
    <Stack gap={2} bgcolor="hsl(0,0%,85%)" p={2}>
      <Typography variant="h6" color="primary">
        Currently Online
      </Typography>
      <Typography variant="body2">
        Badges{" "}
        <Typography as="span" variant="h6">
          {badges}
        </Typography>
      </Typography>
      <Stack direction="row" gap={2} flexwrap="wrap">
        <Avatar
          alt=""
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: 0,
          }}
        />
        <Avatar
          alt=""
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: 0,
          }}
        />
        <Avatar
          alt=""
          sx={{
            width: "40px",
            height: "40px",
            borderRadius: 0,
          }}
        />
      </Stack>
      <Typography variant="body2">
        Games{" "}
        <Typography as="span" variant="h6">
          {games}
        </Typography>
      </Typography>
      <Typography variant="body2">
        Inventory{" "}
        <Typography as="span" variant="h6">
          {inventory}
        </Typography>
      </Typography>
      <Typography variant="body2">
        Reviews{" "}
        <Typography as="span" variant="h6">
          {reviews}
        </Typography>
      </Typography>
    </Stack>
  );
};

export default Online;
