import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea,} from "@mui/material";
import { Link } from 'react-router-dom';

const Admin = () => {
  return (
    <div className='flex gap-5 m-5 justify-center items-center'>
      <Link to={'/admin/add'}>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Add Item
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>

        <Link to={'/admin/update'}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Update Item
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>

        <Link to={'/admin/delete'}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Remove Item
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        </Link>
    </div>
  )
}

export default Admin