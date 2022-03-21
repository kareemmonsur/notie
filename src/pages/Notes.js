import {Grid, Container} from '@mui/material'
import React from 'react'
import {Card, CardHeader, Avatar, IconButton, CardContent, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { DeleteOutlined } from '@material-ui/icons';


function Notes() {
  return (
    <Container>
      <Grid container spacing={1}>
      <Grid item xs={12} sm={6} md={3}>
      
       <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                B
              </Avatar>
            }
            action={
              <IconButton>
                  <DeleteOutlined/>
              </IconButton>
            }   
            title="Birthday cake"
            subheader="September 14, 2016"
          />
             <CardContent>
                  <Typography variant="body1" color="text.primary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </Typography>
            </CardContent>
       </Card>
       </Grid>


    
      {/* <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper> Birthday cake </Paper>
          </Grid> */}


          {/* <Grid item xs={12} sm={6} md={3}>
            <Paper> Complete your training course </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper> Order pizza</Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper> Birthday Present </Paper>
          </Grid> */}

    </Grid>
  </Container>
  )
}

export default Notes
