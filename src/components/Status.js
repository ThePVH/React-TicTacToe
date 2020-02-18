import React from 'react';

import { makeStyles } from '@material-ui/styles';
import cx from 'classnames';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Refresh from '@material-ui/icons/Refresh';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Cross from '@material-ui/icons/Clear';
import Circle from '@material-ui/icons/PanoramaFishEye';

const useStyles = makeStyles({
    paper: {
        margin: '15px 1px 1px',
        padding: 16,
        borderRadius: 0,
        display: 'flex',
        justifyContent: 'center',
    },
    green: {
        backgroundColor: 'green',
        color: 'white',
    },
    text: {
        marginRight: 16,
    },
});

function Status({ name, winner, handleRestart }) {

    const classes = useStyles();


    function renderIcon(value) {
        if (value === 'X') {
            return <Cross />;
        } else {
            return <Circle />;
        }
    }

    function renderWinner() {
        if (winner) {
            return (
                <Paper className={cx(classes.paper, classes.green)}>
                    <Typography variant="button" className={classes.text}>
                        Vítězem je hráč:
					</Typography>
                    {renderIcon(winner)}
                </Paper>
            )
        } else {
            return (
                <Paper className={classes.paper}>
                    <Typography variant="button" className={classes.text}>
                        Na tahu je hráč:
					</Typography>
                    {renderIcon(name)}
                </Paper>
            );
        }
    }

    return (
        <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={4}>
                {renderWinner()}
            </Grid>
            <Grid item xs={2}>
                <Fab color="primary" aria-label="add" size="small" onClick={handleRestart}>
                    <Refresh />
                </Fab>
            </Grid>
        </Grid>
    );
}



export default Status;