import { Box } from "@mui/material";
import Post from "../../Post/Post";


const NewsFeed = () => {

  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
    </Box>
  );
};

export default NewsFeed;