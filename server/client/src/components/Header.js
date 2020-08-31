import React, { useState } from 'react';
import { Button , Badge} from "shards-react";
import { Nav, NavItem, NavLink, } from 'shards-react';
import { Menu, Layout, Breadcrumb } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BradeCrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const { Header, Content, Footer } = Layout;
const HeaderApp = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
<Layout className="layout">
    <Header>
      <div className="logo" />
            <div className="LoginButton" style={{ float: "right" }}>
                <Button outline theme="info" style={{ margineLeft: "auto" }} size="lg">
                    Login
                </Button>
            </div>
            </Header>

              <Paper>
          <Tabs
            value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
            <Tab label="대학 성적 환산" onClick={()=>{window.location.href = "/converter"}}/>
            <Tab label="대학 정보" onClick={() => { window.location.href = "/uni/info"}}/>
            <Tab label="대학 입시 소양 교육" onClick={() => { window.location.href="/edu/contents" }}/>
      </Tabs>
    </Paper>
        {/* <BradeCrumbs aria-label="breadcrumb">

                    <Link color="inherit" href="/converter" onClick={handleClick} style={{ fontSize:"20px"}}>
        대학 성적 환산
      </Link>
      <Link color="inherit" href="/uni/info" onClick={handleClick} style={{fontSize:"20px"}}>
        대학 정보
      </Link>
                    <Link color="inherit" href="/edu/contents" onClick={handleClick} style={{ fontSize:"20px"}}>
        대학 입시 소양 교육
      </Link>
    // </BradeCrumbs> */}
                </Layout>

    );
}

export default HeaderApp;