import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent,TextField, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    card: {
        width: "100%"
    }
  }));

const Cards = (props) =>{

    const classes = useStyles();
    return(
        <div style={{padding: "5px"}}>
                <Card className={classes.card}>
                    <CardContent>
                        <TextField
                            id="outlined-textarea"
                            multiline
                            variant="outlined"
                            value = {props.content}
                            fullWidth
                        />
                        <div style={{textAlign: "right"}}>
                            <IconButton color="secondary" aria-label="edit" size="medium" onClick = {props.deleteCard}>
                                <DeleteIcon fontSize = "medium"/>
                            </IconButton>
                        </div>
                    </CardContent>
                </Card>
        </div>
    )
}
export default Cards;