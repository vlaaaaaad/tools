import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import '../Styles/HeaderAdaptive.css';
import Button from '@material-ui/core/Button';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CompareOutlinedIcon from '@material-ui/icons/CompareOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { SvgIcon } from '@material-ui/core';
import { ReactComponent as CompareIcon } from '../CompareIcon.svg';
import { ReactComponent as HeartIcon } from '../HeartIcon.svg';
import { ReactComponent as BagIcon } from '../BagIcon.svg';

export default function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={classes.headerTop}>
        <div className={classes.logo}>Pro-Tools</div>
      </div>
      <div className={classes.headerBottom}>
        <div className="openMenu">
          <Button
            startIcon={<DragHandleIcon />}
            size="medium"
            className={classes.openMenuButton}
            aria-haspopup="true"
            onClick={handleClick}
          >
            Каталог
          </Button>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        <div className="search">
          <Input
            placeholder="Поиск"
            className={classes.input}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <Button size="small" className="searchButton">
                  Искать
                </Button>
              </InputAdornment>
            }
          />
        </div>
        <div className="buttons">
          <Tooltip TransitionComponent={Zoom} title="Перейти к сравнению">
            <IconButton>
              <SvgIcon>
                <CompareIcon />
              </SvgIcon>
            </IconButton>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Список желаний">
            <IconButton>
              <FavoriteBorderIcon className={classes.iconsFill} />
            </IconButton>
          </Tooltip>
          <Tooltip TransitionComponent={Zoom} title="Корзина">
            <IconButton>
              <LocalMallOutlinedIcon className={classes.iconsFill} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
      <div className="searchMobile">
        <Input
          placeholder="Поиск"
          className={classes.input}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <Button size="small" className="searchButton">
                Искать
              </Button>
            </InputAdornment>
          }
        />
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  headerTop: {
    width: '100%',
    height: '50px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '1pt solid rgba(0,0,0,0.1)',
  },
  logo: {
    fontWeight: 900,
    fontSize: '18px',
    color: '#1C1C1C',
  },
  headerBottom: {
    width: '100%',
    height: '75px',
    boxSizing: 'border-box',
    display: 'flex',

    borderBottom: '1pt solid rgba(0,0,0,0.1)',
  },
  // openMenu: {
  //   display: 'flex',
  //   flexGrow: 0.25,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   boxSizing: 'border-box',
  //   borderRight: '1pt solid rgba(0,0,0,0.1)',
  //   paddingLeft: '2.5%',
  //   paddingRight: '2.5%',
  // },
  openMenuButton: {
    textTransform: 'none',
    fontWeight: 500,
    fontSize: '20px',
  },
  // search: {
  //   flexGrow: 0.5,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingLeft: '5%',
  //   paddingRight: '5%',
  // },
  // searchButton: {
  //   textTransform: 'none',
  //   fontWeight: 500,
  //   fontSize: '18px',
  // },
  // buttons: {
  //   display: 'flex',
  //   flexGrow: 0.25,
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  //   borderLeft: '1pt solid rgba(0,0,0,0.1)',
  //   paddingLeft: '2.5%',
  //   paddingRight: '2.5%',
  // },
  iconsFill: {
    fill: '#1C1C1C',
  },
  input: {
    width: '100%',
  },
}));
