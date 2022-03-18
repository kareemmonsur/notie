import React from 'react'
import { TextField, Typography, Box } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'




function Create() {
  return ( 
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
        >
          Create a new Note
      </Typography>

      <Box noValidate autoComplete='off' component= 'form'>
        <TextField 
          label="NoteTitle" 
          variant="outlined" 
          helperText="Please enter your note title" 
          fullWidth 
        />

        <TextField 
          label="Details" 
          variant="outlined" 
          helperText="Please enter your note details" 
          fullWidth 
          required 
          multiline
          rows={'10'}
        />


        

      </Box>

      
      

      <Button
      type='submit'
      color='secondary'
      variant='contained'
      
      >
        submit
      </Button>
    </Container>
  )
}

export default Create
