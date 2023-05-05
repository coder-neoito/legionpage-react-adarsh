import { Stack, Typography } from "@mui/material";

const Activities = ({ duration }) => {
  return (
    <Stack gap={2}>
      <Stack
        direction="row"
        gap={2}
        justifyContent="space-between"
        p={1}
        bgcolor="gray"
        color="white"
      >
        <Typography variant="h5">Recent Activity</Typography>
        <Typography variant="h5">{duration}</Typography>
      </Stack>
    </Stack>
  );
};

export default Activities;
