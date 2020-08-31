import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Table, Tag, Space, Typography as Typo, Select as Sel, Radio as Rad, Input, Form} from 'antd';
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


import HeaderApp from '../Header';

function UniPage() {
  return (
    <div className="uniPage">
      <HeaderApp />
      <Card variant="outlined">
        <CardContent>
            <Input.Search placeholder="다른 대학을 검색해주세요" EnterButton onSearch={value => console.log(value)} />
            <Button ></Button>
                </CardContent>
            </Card>
      <Card variant="outlined">
        <CardContent>
            <Input.Search placeholder="다른 대학을 검색해주세요" EnterButton onSearch={value => console.log(value)} />
            <Button ></Button>
                </CardContent>
            </Card>
      <Card variant="outlined">
        <CardContent>
            <Input.Search placeholder="다른 대학을 검색해주세요" EnterButton onSearch={value => console.log(value)} />
            <Button ></Button>
                </CardContent>
            </Card>
      <Card variant="outlined">
        <CardContent>
            <Input.Search placeholder="다른 대학을 검색해주세요" EnterButton onSearch={value => console.log(value)} />
            <Button ></Button>
                </CardContent>
            </Card>
      </div>

  );
}

export default UniPage;
