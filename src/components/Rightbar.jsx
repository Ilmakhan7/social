import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  colors,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block"} }}>
      <Box position="fixed" width={300} >
        <Typography variant="h6" fontWeight={400} color="green">
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/6976943/pexels-photo-6976943.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/1772475/pexels-photo-1772475.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar alt="Agnes Walker" src="https://images.pexels.com/photos/6973948/pexels-photo-6973948.jpeg?auto=compress&cs=tinysrgb&w=600" />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/3492100/pexels-photo-3492100.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/6205509/pexels-photo-6205509.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/3586091/pexels-photo-3586091.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/4921128/pexels-photo-4921128.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/1247677/pexels-photo-1247677.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={400} mt={2} mb={2}>
          Latest Posts
        </Typography>
        <ImageList cols={6} rowHeight={100} gap={4} >
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2664046/pexels-photo-2664046.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1892512/pexels-photo-1892512.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/301952/pexels-photo-301952.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1065081/pexels-photo-1065081.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/5821482/pexels-photo-5821482.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </ImageListItem>
        </ImageList>
       
        
        <Typography variant="h6" fontWeight={400} mt={2}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
           
                
              >
                Ali Connors
              </Typography>
              { " I’ll make sure you never experience loneliness. I’ll continue to irritate you."} 🤣
             
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.pexels.com/photos/5821482/pexels-photo-5821482.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
              
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.pexels.com/photos/7298225/pexels-photo-7298225.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
               
              >
                Sandra Adams
              </Typography>
             
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;