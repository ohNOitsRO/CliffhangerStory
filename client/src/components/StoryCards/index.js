import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from "react-router-dom"
// import { Story } from '../../../../server/models/Story';
import book from "../../assets/images/book.jpg";


export default function Storycard({title, content, author_id, _id}) {
  const navigate= useNavigate()
return(
    <Card sx={{ maxWidth: 345, margin: 5}}>
      <CardMedia
        sx={{ height: 140 }}
        image={book}
        title="awesome story"
      />
      <CardContent>
      <Typography gutterBottom variant="h5" component="div" color="#0d14a1">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div" color="#ff4d00" weight="strong">
          {author_id.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={()=> navigate(`/readstory`, {state: {_id: _id}})}>Read Story</Button>
      </CardActions>
    </Card>
)
}