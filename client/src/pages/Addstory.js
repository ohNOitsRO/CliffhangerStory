import { useQuery, use_Mutations} from '@apollo/client';

// css framework for mui css underneath//
import * as React from 'react';
import{useState} from "react";
import TextareaAutosize from '@mui/base/TextareaAutosize';
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

const Addstory = (props) => {

    const [addStory, setAddStory] = useState({ 
      content: '', 
      title: '', 
      story_type:'Read Only',
    });
    // const [login, { error, data }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setAddStory({
        ...addStory,
        [name]: value,
      });

    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(addStory);
      // try {
      //   const { data } = await login({
      //     variables: { ...addStory },
      //   });
  
      // //   Auth.login(data.login.token);
      // } catch (e) {
      //   console.error(e);
      // }
  
      // clear form values
      setAddStory({
        story: '',
        // password: '',
      });
    };

  return (


  <FormControl style={{marginTop: "250px"}}>
  <Input id="my-input" className="form-input"
                  placeholder="Your Story Title"
                  name="title"
                  type="text"
                  value={addStory.title}
                  onChange={handleChange}
                  aria-describedby="my-helper-text" />

  <StyledTextarea
  maxRows={4}
  name="content"
  value={addStory.content}
  onChange={handleChange}
  aria-label="maximum height"
  placeholder="Maximum 4 rows"

   />

<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={"Read Only"}
    name="story_type"
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={"Open"}>Open</MenuItem>
    <MenuItem value={"Read Only"}>Read Only</MenuItem>
  </Select>


   <Button variant="contained" 
           sx={{
              backgroundColor: "#ff4d00"
            }}
            onClick={handleFormSubmit}
            >Save</Button>


  </FormControl> 

    
  );
};

export default Addstory;