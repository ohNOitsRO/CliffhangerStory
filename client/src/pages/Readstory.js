import { useQuery } from '@apollo/client';
import { useLocation } from "react-router-dom"
// css framework for mui css underneath//
import * as React from 'react';
import { useState } from "react";
import {TextareaAutosize} from '@mui/base/TextareaAutosize';
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
import { FormControl, InputLabel, Input, FormHelperText, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/system';

//consolidate imports into destructured import//

// import ProfileList from '../components/ProfileList';

import { QUERY_PROFILES } from '../utils/queries';

const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};


const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

const Readstory = (props) => {
  const { state } = useLocation();
  const { _id } = state
  console.log(state, _id)
  const [readStory, setReadStory] = useState({ story: '' });
  // const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { story, value } = event.target;

    setReadStory({
      ...readStory,
      [story]: value,
    });

  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(readStory);
    // try {
    //   const { data } = await login({
    //     variables: { ...addStory },
    //   });

    // //   Auth.login(data.login.token);
    // } catch (e) {
    //   console.error(e);
    // }

    // clear form values
    setReadStory({
      story: '',
      // password: '',
    });
  };




  return (

    <FormControl style={{ marginTop: "100px" }}>
      <InputLabel htmlFor="my-input">Title</InputLabel>
      <Input id="my-input" aria-describedby="my-helper-text" />
      <FormHelperText id="my-helper-text"> <input
        className="form-input"
        placeholder="Your email"
        name="story"
        type="story"
        value={readStory.story}
        onChange={handleChange}
      />Add Your Story Title Here</FormHelperText>

      <StyledTextarea
        maxRows={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua."
      />

      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={"Read Only"}
        label="Age"
      // onChange={handleChange}
      >
        <MenuItem value={"Private"}>Private</MenuItem>
        <MenuItem value={"Open"}>Open</MenuItem>
        <MenuItem value={"Read Only"}>Read Only</MenuItem>
      </Select>


      <Button variant="contained">Save</Button>
      <Button variants="conatined">Edit</Button>

    </FormControl>


  );
};

export default Readstory;