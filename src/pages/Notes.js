import { Button, Container, Typography } from '@mui/material'
import React from 'react'

function Notes() {
  return (
    <Container
    fixed
    >
      <Typography
       variant='h6'
       color='textSecondary'
       component='h2'
       gutterBottom
      >
      Noted, got it
      </Typography>

      <Button
      onClick={() => console.log('clicked!')}
      type='submit'
      color='secondary'
      variant='contained'
      >
        Submit
      </Button>
      
    </Container>
  )
}

export default Notes
