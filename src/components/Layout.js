import { Typography, Drawer, ListItem} from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
import List from '@mui/material/List';
import { AddCircleOutlineOutlined, SubjectOutlined,  } from '@material-ui/icons';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';



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

  const menuItems = [
    { text: 'My Notes',
    icons: <SubjectOutlined color='secondary' />,
    path: '/'
    },
    { text: 'My Notes',
    icons: <AddCircleOutlineOutlined color='secondary' />,
    path: '/create'
    }
   
  ]
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
            <List>
              {menuItems.map(item =>(
                <ListItem
                key={item.text}
                >
                  
                </ListItem>
              ))}

              
            </List>

        </Drawer>



        <div> 
            {children}
         </div>
        
    </div>
  )
}

export default Layout
