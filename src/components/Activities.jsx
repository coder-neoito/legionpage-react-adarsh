import { Stack, Typography } from "@mui/material";
import Activity from "./Activity";

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
      <Activity
        activity={{
          title: "Legion TD 2",
          achievement: { total: 25, progress: 14 },
          images: [
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          ],
          record: "500hrs",
          lastPlayed: new Date(),
          reviewsCount: 5,
        }}
      />
    </Stack>
  );
};

export default Activities;
