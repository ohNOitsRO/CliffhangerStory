import { useQuery } from '@apollo/client';

// css framework for mui css underneath//
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
  

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {


const stories = [
  {title: "Toy Story", summary: "Tom Hanks fights Tim Allen"},
  {title: "Toy Story 2", summary: "The Sequel Fight"},
  {title: "Toy Story: Rocket Power", summary: "SHOOBIES"}
]



  return (
    <>
 
      <Grid container spacing={2}>
    {stories.map((story, idx)=>(
       <Grid item xs={4}>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {story.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {story.summary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
    ))}
    </Grid>
    </>
    
  );
};

export default Home;