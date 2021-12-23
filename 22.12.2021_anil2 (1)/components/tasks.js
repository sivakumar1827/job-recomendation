import React, { useState } from 'react';
import Task from "./task"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    div:{
      display:"flex",
      justifyContent:"center"
      },
    button: {
      margin:  theme.spacing(1),
      borderRadius: "5em",
      alignSelf:"center"
    },
    input: {
      display: "none"
    }
  }))
export default function Tasks() {

    const classes = useStyles();

    const [state, setState] = useState({
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
    
      });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
    return(
        <>
        {/* <div style={{overflow:"auto",maxHeight:"100%",position:'relative'}}> */}
        <div>
        <div className={classes.div}>      
        <Box display="flex" justifyContent="center" flexDirection="column">
        <Task value={state.checkedA} name={"checkedA"} text={"Take the Career Interest Assessment"} handleChange={handleChange}/>
        <Task value={state.checkedB} name={"checkedB"} text={"Discover your priorities"} handleChange={handleChange}/>
        <Task value={state.checkedC} name={"checkedC"} text={"Take a personality test"} handleChange={handleChange}/>
        <Task value={state.checkedD} name={"checkedD"} text={"Volunteer for first hand experience"} handleChange={handleChange}/>
        <Task value={state.checkedE} name={"checkedE"} text={"Contact a Career Advisor"} handleChange={handleChange}/>
        </Box>
        </div>

        
        <div className={classes.div}>
          <Button variant="contained" color="secondary"
            sx={{ borderRadius: 28 }}
            style={{  width: 240, height: "7.5vh", marginBottom: 13 }}
            className={classes.button}>
            Add Custom Task
          </Button>
        </div>
        <div className={classes.div}>
        <Button variant="outlined" color="secondary"
            sx={{ borderRadius: 28 }} style={{  width: 240, height: "7.5vh",}}
            className={classes.button}>
            Mark all tasks Complete
          </Button>
        </div>
        </div>
         
  
        
        
        
        </>
    )
}