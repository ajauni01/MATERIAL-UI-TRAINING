import { Avatar, AvatarGroup, Badge, Box, ImageList, ImageListItem, Typography } from "@mui/material";

const RightBar = () => {

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>

      <Box width={300} position="fixed">

        {/* ONLINE FRIENDS */}
        <Typography variant="h6" fontWeight={100}>Online Friends</Typography>
        <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar alt="Trevor Henderson" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </AvatarGroup>

        {/* LATEST PHOTOS */}
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5} >
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/427900/pexels-photo-427900.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default RightBar;