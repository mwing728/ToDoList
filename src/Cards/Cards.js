import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent,TextField, IconButton, CssBaseline, Container, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 550,
        maxWidth: 550,

    }
  }));

const Cards = (props) =>{
    // const [edit, setEdit] = useState({open: true})

    // const changeEditHandler = () =>{
    //     setEdit({
    //         open: !edit
    //     })
    // }

    const classes = useStyles();
    return(
        // <Grid 
        //     container 
        //     direction = "column"
        //     justify="flex-start" 
        //     alignItems="center" 
        //     className={classes.root}
        // >
        //     <Grid item xs={12} >
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
        //     </Grid>
        // </Grid>
    )
}
export default Cards;