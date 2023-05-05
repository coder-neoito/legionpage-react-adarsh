import { Stack, Divider, Grid, Avatar, Typography, Box } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { format } from "date-fns";

const Activity = ({ activity }) => {
  const {
    image,
    title,
    lastPlayed,
    record,
    achievement: { total, progress },
    images,
    reviewsCount,
  } = activity;
  return (
    <Stack gap={2}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Stack direction="row" gap={1}>
            <Avatar
              src={image}
              alt=""
              sx={{
                width: "150px",
                height: "60px",
                borderRadius: 0,
              }}
            />
            <Typography variant="h6" mt={1}>
              {title}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack height="100%" textAlign="right">
            <Typography variant="body2" mt="auto">
              {record} on record
            </Typography>
            <Typography variant="body2">
              last played on {format(new Date(lastPlayed), "d MMM")}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
      <Stack direction="row" gap={2} alignItems="center">
        <Typography variant="body2">Achievement Progress</Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >{`${progress} of ${total}`}</Typography>
        <Box sx={{ flex: 1 }}>
          <LinearProgress variant="determinate" value={75} />
        </Box>
        <Stack direction="row" gap={0.5}>
          {images.slice(0, 3).map((image, i) => (
            <Avatar
              src={image}
              alt=""
              key={image + i}
              sx={{
                width: "40px",
                height: "40px",
                borderRadius: 0,
              }}
            />
          ))}
          {images.length > 3 && (
            <Typography
              sx={{
                aspectRatio: "1/1",
                flexShrink: 0,
              }}
              p={0.5}
            >
              {images.length} +
            </Typography>
          )}
        </Stack>
      </Stack>
      <Divider />
      <Typography variant="body2">Review {reviewsCount}</Typography>
    </Stack>
  );
};

export default Activity;
