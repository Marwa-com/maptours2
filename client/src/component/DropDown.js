import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
   marginLeft:80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    color:"#023c57",
  },
}));
export default function DropDown({itemList,handleItemChange,label}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(itemList[0]);
  const handleChange = (event) => {
      handleItemChange({[label]:event.target.value})
    setValue(event.target.value);
  };
  return (
    <div >
      <FormControl  className={classes.formControl}>
        <Select
          value={value}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="" disabled  > 
            {/* <em>None</em> */}
          </MenuItem>
          {itemList.map((elm,i)=><MenuItem key={elm+i} value={elm}>{elm}</MenuItem>)}
        </Select>
      </FormControl>
    </div>
  );
}

