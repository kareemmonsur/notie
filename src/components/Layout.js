import { Typography, Drawer, makeStyles } from '@mui/material';
import React from 'react'



    const drawerWidth = 240;

    const useStyles = makeStyles({
    page: {
      background: "#f9f9f9",
      width: "100%"
    },
    drawer: {
      width: drawerWidth
    },
    drawerPaper: {
      width: drawerWidth
    },
    root: {
      display: 'flex'
    }

  })

  function Layout({children}) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        {/* App bar */}

        {/* side bar */}
        <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{paper: classes.drawerPaper}}
      
        >
            <div>
                <Typography variant='h5'>
                    Notie
                </Typography>
            </div>

        </Drawer>



        <div> 
            {children}
         </div>
        
    </div>
  )
}

export default Layout
