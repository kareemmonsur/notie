import { Typography, Drawer, Box} from '@mui/material';
import React from 'react'

function Layout({children}) {

    const drawerWidth = 240;
  return (
    <div>
        {/* App bar */}

        {/* side bar */}
        <Drawer
        variant='permanent'
        anchor='left'
         sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              
            },
         }}
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
