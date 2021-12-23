import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { borders, typography, width } from '@material-ui/system';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';


export default function Task(props) {

  return (
    <>   
      <FormGroup style={{ marginLeft: 22 }} >
        <Box   border={1} borderColor="grey.500" borderRadius={5} style={{ marginBottom: 17, width: 335, height: "7.5vh" ,verticalAlign:"middle"}} >
          <FormControlLabel
            control={
              <Checkbox
                checked={props.value}
                onChange={props.handleChange}
                name={props.name}
                color="success"
                style={{ marginLeft: "15px", color: "#008563",padding:"1.5vh 10px"}}
              />
            }
            label={<Typography style={props.value ? { textDecoration: "line-through" } : { textDecoration: "none" }}>{props.text}</Typography>}
          />
        </Box>
      </FormGroup>
       
    </>
  )

}