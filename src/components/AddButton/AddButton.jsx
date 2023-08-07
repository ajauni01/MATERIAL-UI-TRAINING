import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { DateRange } from "@mui/icons-material";

// MODAL
const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

// USER BOX
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "15px"
})


const AddButton = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={() => setOpen(true)} title="add" >
        <Fab sx={{
          position: "fixed", bottom: "20px", left: { xs: "calc(50%)", md: "30px" }, bgcolor: "#228aef", "&:hover": {
            bgcolor: "#1e66c9"
          },
        }} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      {/* MODAL TO MAKE A POST */}
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} p={3} bgcolor={"background.default"} color={"text.primary"} borderRadius={5}>
          <Typography variant="h6" color="grey" textAlign="center">Create a post</Typography>
          {/* CURRENT USER */}
          <UserBox>
            <Avatar src="https://images.pexels.com/photos/14862517/pexels-photo-14862517.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" sx={{ width: "30px", height: "30px" }} />
            <Typography fontWeight="500px" variant="span">
              Ajharul Aunik
            </Typography>
          </UserBox>
          {/* TEXT FIELD */}
          <TextField
            sx={{ width: "100%" }}
            multiline //ENABLE MULTILINE FEATURE
            placeholder="What's on your mind..."
            rows={4}
          />
          {/* ICONS */}
          <Stack direction="row" gap="8px" mt="5px" mb="15px">
            < EmojiEmotionsIcon sx={{ color: "#4b3fd2" }} />
            <ImageIcon color="action" />
            <VideocamIcon color="success" />
            < PersonAddIcon color="error" />
          </Stack>
          {/* POST BUTTON */}
          <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
            <Button sx={{ bgcolor: "#4b3fd2" }}>Post</Button>
            <Button sx={{ width: "20%" }}><DateRange /></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddButton;