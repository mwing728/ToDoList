import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import './App.css';
import Cards from './Cards/Cards'
import { TextField, Paper, Grow, Fade, Snackbar, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    width: '70%',
    color: theme.palette.text.secondary,
  },
}))

const GrowTransition = (props) =>{
  return <Grow {...props} />;
}

function App() {
  const [list, setList] = useState([])
  const [inputVal, setInputVal] = useState('')
  const classes = useStyles()

  const onChangeInput = (event) =>{
    setInputVal(event.target.value)
  }

  const changeList = (event) =>{
    setList((list) => [...list, event.target.value])
  }

  const onClearInput = () =>{
    setInputVal('')
  }

  const deleteContent = (index) =>{
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }
  const [snack, setSnack] = React.useState({
    open: false,
    Transition: Fade,
  })

  const handleClick = Transition => () => {
    setSnack({
      open: true,
      Transition,
    })
  }

  const handleClose = () => {
    setSnack({
      ...snack,
      open: false,
    });
  };
  return (
    <Grid container className= {classes.root} >
      <Grid item xs={12}>
        <div className="App">
            <header className="App-header">
              <p>
                ToDo List
              </p>
                  <Paper className={classes.paper}>
                    <TextField
                      size="small"
                      label="Write..."
                      variant="filled"
                      fullWidth={true}
                      value = {inputVal}
                      onChange = {onChangeInput}
                      onKeyDown ={ (event) =>{
                        if(event.key === 'Enter' && event.target.value !== ""){
                          event.persist()
                          changeList(event)
                          onClearInput()
                        }else{
                          handleClick(GrowTransition)
                        }
                      }}
                    />
                  </Paper>
                  <Grid 
                      container
                      direction = "column"
                      justify="flex-start" 
                      alignItems="stretch" 
                      className={classes.root}
                      style={{width:"55%"}}
                  >
                    <Grid item xs={12}>
                      {list.map( (content, index) =>{
                        return(
                              <Cards 
                                key = {index}
                                content = {content} 
                                deleteCard = {() => deleteContent(index)}
                                 
                              />
                          
                        )
                      })}
                    </Grid>
                  </Grid>
            </header>
            <Snackbar
              open={snack.open}
              onClose={handleClose}
              TransitionComponent={snack.Transition}
              ContentProps={{
                'aria-describedby': 'message-id',
              }}
              message={<span id="message-id">I love snacks</span>}
            />
          </div>
      </Grid>
    </Grid>
  );
}

export default App;
