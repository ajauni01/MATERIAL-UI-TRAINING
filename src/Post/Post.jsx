import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const Post = () => {

  return (
    <Card sx={{ marginBottom: 5 }} >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="cute cat">
            W
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Wild Photography"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="auto"
        image="https://images.pexels.com/photos/17823726/pexels-photo-17823726/free-photo-of-kitten-girls-vietnam.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          With a gentle touch, she caresses the furry creature, lost in a world of pure affection and admiration. The bond between the girl and the cat radiates warmth and love, creating a heartwarming scene that warms the hearts of those who witness it.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorderIcon />} checkedIcon={<FavoriteIcon sx={{ color: "red" }} />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;