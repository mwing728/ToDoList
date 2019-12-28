import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';  
import './App.css';
import Cards from './Cards/Cards'
import { TextField, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  paper: {
    textAlign: 'center',
    width: '60%'
  },
}));


function App() {
  const [list, setList] = useState([])
  const [inputVal, setInputVal] = useState('')
  const classes = useStyles()

  const onChangeInput = (event) =>{
    setInputVal(event.target.value)
  }

  const onClearInput = () =>{
    setInputVal('')
  }

  const deleteContent = (index) =>{
    const newList = [...list]
    newList.splice(index,1)
    setList(newList)
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          ToDo List {list}
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
                  if(event.key === 'Enter'){
                    event.persist()
                    setList((list) => [...list, event.target.value])
                    onClearInput()
                  }
                }}
              />
            </Paper>
        {list.map( (content, index) =>{
          return(
            <Cards 
              key = {index}
              content = {content} 
              deleteCard = {() => deleteContent(index)}
            />
          )
        })}
      </header>
    </div>
  );
}

export default App;
