import React from 'react'
import { TextField, Typography, Box } from '@mui/material'
import { Button, Container, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'


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

      <Box noValidate autoComplete='off' component= 'form'  sx={{
        '& .MuiTextField-root': { m: 2},
      }}>
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

      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Note Category</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="Money" control={<Radio />} label="Money" />
          <FormControlLabel value="Todos" control={<Radio />} label="Todos" />
          <FormControlLabel value="Reminder" control={<Radio />} label="Reminder" />
          <FormControlLabel value="Work" control={<Radio />} label="Work" />
        </RadioGroup>
      </FormControl>

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
