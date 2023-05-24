import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

// css framework for mui css underneath//
// import * as React from 'react';
import React, { useEffect, useState } from 'react';
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

import { QUERY_STORIES} from '../utils/queries';

const Home = () => {
  const navigate = useNavigate()
  const { loading, data } = useQuery(QUERY_STORIES);
  const [stories, setStories] = useState([])


  useEffect(() => {
    console.log("shaqattack", loading, data);
    if (data) {
      console.log("LINE 356", data.publicStories, "TOM CRUISE MAVERICK TOP GUN SHAQ 8");
      setStories(data.publicStories)
      console.log(stories)
     
    }



  }, [loading])

  // console.log(data.publicStories)


console.log (stories)
console.log (stories)
  // const stories = [
  //   {
  //     title: "Toy Story", 
  //     summary: "Tom Hanks fights Tim Allen", 
  //     type: "Public Stories", 
  //     author: "Tom Hanks"
  //   },
  //   {
  //     title: "Little mermaid", 
  //     summary: "Mermaid v Zombies", 
  //     type: "My Stories", 
  //     author: "Dru"
  //   },
  //   {
  //     title: "spongebob", 
  //     summary: "Spongebob v Aliens", 
  //     type: "My Stories", 
  //     author: "Patience"
  //   },
  //   {
  //     title: "Toy Story 2", 
  //     summary: "The Sequel Fight",
  //     type: "Public Stories", 
  //     author: "Andy Wier"
  //   },
  //   {
  //     title: "Toy Story: Rocket Power", 
  //     summary: "SHOOBIES",
  //     type: "Public Stories", 
  //     author: "Johnny Bravo"
  //   }

  // ]



  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: "100px" }}>
      <div style={{ marginTop: "100px" }}>
        {/* <Button onClick={()=>navigate("/addstory")} variant="contained">Add Story</Button> */}


        <div style={{ display: "flex" }

        }>

          {/* check data before rendering */}
          {stories ? <div><CardColumn cardarray={stories.filter(function (myStory) {
            return myStory.story_type == "readOnly"
          })} />  <CardColumn cardarray={stories.filter(function (myStory) {
            return myStory.story_type == "open"
          })} /> </div> : "loading"}
          {/* {conditional ? true : false}
    <CardColumn cardarray={stories.filter(function (myStory){
      return myStory.type == "My Stories"
    })} />

    <CardColumn cardarray={stories.filter(function (myStory){
      return myStory.type == "Public Stories"
    })} /> */}


          {/* <CardColumn cardarray={stories.filter(function (myStory){
      return myStory.type == "Finished Stories"
    })} /> */}
        </ div>
        <Button onClick={() => navigate("/addstory")} variant="contained">Add Story</Button>
      </div>
    </div>
  );
};

export default Home;