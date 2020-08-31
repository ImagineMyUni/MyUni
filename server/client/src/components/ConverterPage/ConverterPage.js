import React, { useState } from 'react';

import  HeaderApp  from '../Header';
import { Nav, NavItem, NavLink } from 'shards-react';
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
    root: {
      
        width: '75%',
          height:'25%',
          borderRadius: '10px',
          padding : theme.spacing(2),
          boxShadow: '0 3px 6px 0 rgba(0,0,0,0.16)',
          background: '#ffffff',
        },
    score: {
            display:"flex",
            padding : theme.spacing(2),
            width: '75%',
            height:'10%',
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

const columns = [
    {
        title: '대학명',
        dataIndex: 'university',
        key: 'university'
    },
    {
        title: '나의 등급',
        dataIndex: 'grade',
        key: 'grade'
    },
    {
        title: '작년 합격 평균',
        dataIndex: 'avgGrade',
        key: 'avgGrade'
    }
]

function ConverterPage() {
    const classes = useStyles();
    
    const handleScore = () => {
        window.location.href="/converter/score";
    }


    const dataSource = [
        {
            key: '1',
            university: "서강대학교",
            avgGrade: "3",
            grade:"2.5"
        },
        {
            key: '2',
            university: "연세대학교",
            avgGrade: "4",
            grade:"2.67"
        },
        {
            key: '3',
            university: "고려대학교",
            avgGrade: "5",
            grade:"2.13"
        },
        {
            key: '4',
            university: "서울대학교",
            avgGrade: "3",
            grade:"2.88"
        },
        {
            key: '5',
            university: "카이스트",
            avgGrade: "5",
            grade:"2.11"
        },
        {
            key: '6',
            university: "마포구",
            avgGrade: "3",
            grade:"2.55"
        }

    ]

    return (
        <div className="ConverterPage">

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
                <Card variant="outlined" className={classes.score} >
                    <CardContent>
                        <Title level={3} style={{ width: "100%" }}> 성적 입력
                            <Button>
                                <img src="pencil.png" style={{ height: "30px" }} onClick={handleScore} />
                                </Button>
                            </Title>
                        </CardContent>
            </Card>
            <Card variant="outlined" className={classes.converted}>

                <CardContent>
            <p>
                        <Title level={3}> 환산 결과 </Title>
                        <Rad.Group>
                    <Rad.Button value="large">가나다순</Rad.Button>
                    <Rad.Button value="default">등급 내림차순</Rad.Button>
                    <Rad.Button value="small">등급 오름차순</Rad.Button>
                    </Rad.Group>
                <Table dataSource={dataSource} columns={columns} pagination={{pageSize:"5"}}/>
                    </p>
                    </CardContent>
                </Card>
                </Grid>
            </div>
    )
}

export default ConverterPage;