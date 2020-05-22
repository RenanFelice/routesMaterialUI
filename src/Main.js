import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Route, Switch, NavLink } from "react-router-dom";
import DadJokeApp from './dadJokes/src/App' 
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Calculator from './calculator/Calculator'
import Poke from './pokemon/PokeList'
import Home from './Home.js'
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    height:'100%',
    display: 'flex',
    textDecoration:'none',
    overflow:'hidden'
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    height:'100%',
    width:'100%',
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            App Drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        <NavLink style={{textDecoration: "none", color: "black"}} activeClassName='active-link' to='/'>
          <HomeIcon style={{marginRight:'3rem', fontSize:'2rem'}}/>
          </NavLink>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <NavLink style={{textDecoration: "none", color: "grey"}} activeClassName='active-link' to='/dadjokes'>
            <ListItem button>
              <ListItemIcon><SentimentVerySatisfiedIcon/></ListItemIcon>
              <ListItemText primary='Dad Jokes' />
            </ListItem>
          </NavLink>
          <NavLink style={{textDecoration: "none", color: "grey"}} activeClassName='active-link' to='/calculator'>
            <ListItem button>
              <ListItemIcon><i style={{fontSize:'20px', marginLeft:'3px'}} className="fas fa-calculator"></i></ListItemIcon>
              <ListItemText primary='Calculator' />
            </ListItem>
          </NavLink>
          <NavLink style={{textDecoration: "none", color: "grey"}} activeClassName='active-link' to='/pokemon'>
            <ListItem button>
              <ListItemIcon><i style={{fontSize:'20px'}} className="fas fa-pastafarianism"></i></ListItemIcon>
              <ListItemText primary='Pokemon Card' />
            </ListItem>
          </NavLink>

        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/dadjokes' component={DadJokeApp} />
          <Route exact path='/calculator' component={Calculator} />
          <Route exact path='/pokemon' component={Poke} />
        </Switch>

      </main>
    </div>
  );
}