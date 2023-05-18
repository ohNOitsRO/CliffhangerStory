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
import CardColumn from '../components/CardColumn'; 

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {


  const stories = [
    {
      title: "Toy Story", 
      summary: "Tom Hanks fights Tim Allen", type: "My Stories", 
      author: "Tom Hanks"
    },
    {
      title: "Little mermaid", 
      summary: "Mermaid v Zombies", 
      type: "My Stories", 
      author: "Dru"
    },
    {
      title: "spongebob", 
      summary: "Spongebob v Aliens", 
      type: "My Stories", 
      author: "Patience"
    },
    {
      title: "Toy Story 2", 
      summary: "The Sequel Fight",
      type: "Active Stories", 
      author: "Andy Wier"
    },
    {
      title: "Toy Story: Rocket Power", 
      summary: "SHOOBIES",
      type: "Finished Stories", 
      author: "Johnny Bravo"
    }
    
  ]



  return (
    <div style={{display: "flex"} 

    }>
    <CardColumn cardarray={stories.filter(function (myStory){
      return myStory.type == "My Stories"
    })} />

    <CardColumn cardarray={stories.filter(function (myStory){
      return myStory.type == "Active Stories"
    })} />

       <CardColumn cardarray={stories.filter(function (myStory){
      return myStory.type == "Finished Stories"
    })} />
    </ div>
    
  );
};

export default Home;