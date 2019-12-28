import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent,Typography } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    card: {
        minWidth: 500,
    },
        bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
        title: {
        fontSize: 14,
    },
        pos: {
        marginBottom: 12,
    },
  }));

const Cards = (props) =>{
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return(
        <Card className={classes.card} onClick = {props.deleteCard}>
            <CardContent>
                <Typography variant="body2" component="p">
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default Cards;