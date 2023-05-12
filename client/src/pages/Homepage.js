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

  

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

const stories = [
  {title: "my epic story 1", summary: "suddenly words started to rain in the forrest"},
  {title: "my sci-fi story 1", summary: "suddenly words started to rain in space"},
  {title: "my comedy 1", summary: "suddenly words started to rain at the doctors"}
]

  return (
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
  );
};

export default Home;