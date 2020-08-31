import React, { useState } from 'react';
import { Button , Badge} from "shards-react";
import { Nav, NavItem, NavLink, } from 'shards-react';
import { Menu, Layout, Breadcrumb, Timeline } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BradeCrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import HeaderApp from './Header';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const { SubMenu } = Menu;


function HomePage(props) {
    return (
        <div>
            <HeaderApp />
         <p align="middle"> 
            <iframe width="560" height="315" src="https://www.youtube.com/embed/S9-vAvcn2TA?autoplay=1"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </p>
            <Timeline>
            <Timeline.Item> create Service 2020 08 25</Timeline.Item>
            <Timeline.Item> create Service D - 100</Timeline.Item>
            <Timeline.Item> create Service Hello This is your angel</Timeline.Item>
            <Timeline.Item> create Service Finally You get your heart want</Timeline.Item>
            </Timeline>
            </div>
    )
}

export default HomePage;