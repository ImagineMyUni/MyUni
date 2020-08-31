import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'shards-react';
import HeaderApp  from '../Header';

import { Table, Tag, Space, Typography as Typo, Select as Sel, Radio as Rad} from 'antd';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const { Title } = Typo;
const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
  height: "10%",
  fontFamily: "NotoSansCJKkr",
  fontSize: "16px",
  fontWeight: "500",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: "1.5",
  letterSpacing: "normal",
  textAlign: "center",
  color: "#fafafa",
  },
  eachScore: {
    width: "30%",
    height: "5%",
    borderRadius:"5px"
    },
    root: {
      
        width: '75%',
          height:'25%',
          borderRadius: '10px',
          padding : theme.spacing(2),
          boxShadow: '0 3px 6px 0 rgba(0,0,0,0.16)',
          background: '#ffffff',
        },
    scoreInput: {
            display:"flex",
            padding : theme.spacing(2),
            width: '75%',
            height:'65%',
      borderRadius: '10px',
      padding: '10px 10px 10px 10px',
      boxShadow: '0 3px 6px 0 rgba(0,0,0,0.16)',
      background: '#ffffff',
    },
    converted: {
        padding : theme.spacing(2),
        width: '75%',
          height:'60%',
          borderRadius: '10px',
          padding: '10px 10px 10px 10px',
          boxShadow: '0 3px 6px 0 rgba(0,0,0,0.16)',
          background: '#ffffff',
  },
  card: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    },
    title: {
      

  }

}));

function ConverterScorePage() {
    const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
    };
    
    return (
        <div>
        <HeaderApp />
        <Grid
                container
                direction="column"
                justify="space-evenly"
                alignItems="center"
                style={{height:'800px'}}
            >
            <Card className={classes.root} variant="outlined">
                <CardContent>

                <FormControl component="fieldset">
                        <FormLabel component="legend">
                            <Title level={3}> 반영 과목 및 비율 선택 </Title>
                        </FormLabel>
                    <RadioGroup column aria-label="position" name="position" defaultValue="top">
                        <p>
                            <FormControlLabel value="all" control={<Radio color="primary" />} label="전과목" />
                            <FormControlLabel value="two" control={<Radio color="primary" />} label="필수과목(국/영/수/사/과/한)" />
                        </p>
                        <p>
                            <FormControlLabel value="three" control={<Radio color="primary" />} label="국/영/수 가중 반영" />
                            <FormControlLabel value="Upper" control={<Radio color="primary" />} label="상위" />
                        </p>
                    </RadioGroup>
                    </FormControl>
                </CardContent>
          </Card>
          
                <Card variant="outlined" className={classes.scoreInput} >
                    <CardContent>
                        <Title level={3} > 성적 입력 </Title>
            </CardContent>
            <CardContent>
<div className={classes.eachScore}>
        <h5>국어
        <TextField
          id="outlined-textarea"
          label="점"
          placeholder="점"
          multiline
                    variant="outlined"

        />
        
        영어
        <TextField
          id="outlined-textarea"
          label="점"
          placeholder="점"
          multiline
          variant="outlined"
        /></h5>
        
        <h5>수학
        <TextField
          id="outlined-textarea"
          label="점"
          placeholder="점"
          multiline
                    variant="outlined"


        />
        
        사회
        <TextField
          id="outlined-textarea"
          label="점"
          placeholder="점"
          multiline
          variant="outlined"
        /></h5>
        
        <h5>과학
        <TextField
          id="outlined-textarea"
          label="점"
          placeholder="점"
          multiline
          variant="outlined"
        />
        
        한국사
        <TextField
          id="outlined-textarea"
          label="점"
          placeholder="점"
          multiline
          variant="outlined"
        /></h5>
        
       <h5>선택
        <TextField
          id="outlined-textarea"
          label="점"
          placeholder="점"
          multiline
          variant="outlined"
        /></h5>
              </div> 
            </CardContent>
            <CardContent>
              <Button className={classes.button} variant="contained" color="primary" onClick={(props)=>console.log(props.target)}>
                Primary
        </Button>
              </CardContent>
          </Card>
                </Grid>
             

        

        </div>
   )
}

export default ConverterScorePage;