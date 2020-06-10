import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import TextField from '@material-ui/core/TextField';
import CompareOutlinedIcon from '@material-ui/icons/CompareOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  bannerBody: {
    width: '100%',
    height: '600px',
    boxSizing: 'border-box',
    padding: '80px 10% 80px 10%',
    color: '#FFFFFF',
    fontSize: '36px',
    lineHeight: '36px',
    background: 'linear-gradient(89.47deg, #267871 0.21%, #136A8A 99.82%)',
    borderBottom: '1pt solid rgba(0,0,0,0.1)',
  },
}));

export default function Banner() {
  const classes = useStyles();
  return <div className={classes.bannerBody}>hjjj</div>;
}
