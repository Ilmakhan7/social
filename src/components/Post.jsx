import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <Card sx={{ margin: 5 }}>
      <CardHeader
        avatar={
          <Avatar  alt="Anne Morrow "
          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=600"
        >
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Sofiya Dez"
        subheader="may 24, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        
        image="https://images.pexels.com/photos/2347380/pexels-photo-2347380.jpeg"
        
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        "💻🚀code in my cup,☕ code on my screen,
Caffeine-fueled adventures, a developer's dream.
From line to line, the code comes alive,
Sip by sip, pushing boundaries, we strive.Cappuccinos and espressos, code's best friend,
They keep us awake, from start to end.😍
Together with code, we make a mark.😍🥰☕


        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar  alt="Remy Sharp"
          src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
        >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Mark Malik"
        subheader="may 22, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        
        image="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600"
        
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        "🥰Sweet and fluffy, a bundle of joy,🐶🐶
With eyes so bright, like a playful toy.
Furry paws and a wagging tail,
A dog's cuteness never fails 🐶🐶"🥰"🥰
Whether big or small, they steal our hearts,
Bringing happiness, their adorable arts.
Their presence alone, a delight to see,
A cute dog, forever cherished, we decree. ❤️❤️❤️❤️❤️❤️❤️
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar  alt=""
          src="https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600"
        >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Emir Roy Bin"
        subheader="may 21, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        
        image="https://images.pexels.com/photos/1142948/pexels-photo-1142948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        "🏝🏔.🚀🚀Exploring the world, a traveler's quest,
Seeking adventures, feeling truly blessed.
From mountains high to oceans wide,
New cultures and experiences collide.

Wandering through streets unknown,
Discovering places to call our own.
Tasting flavors, embracing diversity,
Traveling opens minds and sets us free🚍✈️❤️❤️"🌦️,
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar  alt="Ely"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
        >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Ely Naaz"
        subheader="may 20, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        
        image="https://images.pexels.com/photos/5391844/pexels-photo-5391844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        ☕☕🚀This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.❤️❤️❤️
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar  alt="Remy Sharp"
          src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=600"
        >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title=" Matt Roy"
        subheader="may 20, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        
        image="https://images.pexels.com/photos/4022057/pexels-photo-4022057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        ⛱️As the sun sets, ⛱️casting its final light,
We cherish the memories, holding them tight.
In this fleeting moment, nature's artwork shines,
Capturing the essence of beauty that forever binds.🌅✨🌻⏳"
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      <CardHeader
        avatar={
          <Avatar  alt="Remy Sharp"
          src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600"
        >
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Layra Din"
        subheader="may 19, 2023"
      />
      <CardMedia
        component="img"
        height="20%"
        
        image="https://images.pexels.com/photos/5935223/pexels-photo-5935223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        
        alt="Paella dish"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        😎Cherishing the laughter, embracing the fun,
With you, my friend, life's always well done.
Through highs and lows, we always shine,
This selfie captures a friendship divine.🤩
🤪😎
In this frame, memories eternally reside,
Friends forever, our hearts are tied.
Grateful for each other, till the end,
In this selfie, forever friends we'll defend."🤪🤪
        </Typography>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
      
      
    </Card>



  );
};

export default Post;