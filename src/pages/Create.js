import React from 'react'
import { Typography } from '@mui/material'
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
