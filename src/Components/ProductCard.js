import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import '../Styles/ProductCardAdaptive.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { ReactComponent as CompareIcon } from '../CompareIcon.svg';
import Zoom from '@material-ui/core/Zoom';
import { SvgIcon } from '@material-ui/core';

export default function ProductCard() {
  const classes = useStyles();

  const [feature, setFeature] = useState(2);
  let featureRender;

  useEffect(() => {}, []);

  if (false) return <div>Loading...</div>;

  if (feature == 1) {
    featureRender = <div className={classes.newIn}>НОВИНКА</div>;
  }
  if (feature == 2) {
    featureRender = <div className={classes.topSeller}>ХИТ ПРОДАЖ</div>;
  }
  if (feature == 3) {
    featureRender = <div className={classes.discount}>СКИДКА</div>;
  }

  return (
    <div className="card">
      {featureRender}
      <div
        className="cardMedia"
        onClick={() => {
          console.log('Click');
        }}
      >
        <img
          className="cardImage"
          src={process.env.PUBLIC_URL + '/image 61.png'}
          alt={'img'}
        />
      </div>
      <div className={classes.cardInfo}>
        <a href="#" className="cardInfoName">
          Дрель AEG B4-1050 SuperTorque
        </a>
        <div className={classes.cardInfoAvailability}>Есть на складе</div>
        <div className={classes.cardInfoPrice}>28 382 грн</div>
      </div>
      <div className={classes.cardActions}>
        <Button
          className={classes.purchaseButton}
          variant="contained"
          color="primary"
          size="large"
        >
          Купить
        </Button>
        <IconButton>
          <SvgIcon>
            <CompareIcon />
          </SvgIcon>
        </IconButton>
        <IconButton>
          <FavoriteBorderIcon style={{ fill: '#1C1C1C' }} />
        </IconButton>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    // width: '100%',
    // minHeight: '500px',
    // border: '1px solid rgba(0, 0, 0, 0.1)',
    // borderRadius: '4px',
    // display: 'flex',
    // flexDirection: 'column',
    // background: '#fff',
    // marginBottom: '30px',
  },
  // cardMedia: {
  //   // minHeight: '290px',
  //   borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // cardImage: {
  //   width: '240px',
  // },
  cardInfo: {
    flexGrow: 1,
    padding: '15px 15px 0px 15px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  // cardInfoName: {
  //   textDecoration: 'none',
  //   fontSize: '16px',
  //   color: '#4F4F4F',
  // },
  cardInfoAvailability: {
    fontSize: '14px',
    color: '#6FC237',
  },
  cardInfoPrice: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '23px',
    color: '#1C1C1C',
  },
  cardActions: {
    heigth: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 10px 10px 10px',
    boxSizing: 'border-box',
  },
  purchaseButton: {
    width: '50%',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: '16px',
    color: '#FFFFFF',
    background: '#4655DA',
  },
  newIn: {
    width: '120px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#0CFA24',
    borderRadius: '3px 0px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '160%',
    color: '#FFFFFF',
  },
  discount: {
    width: '120px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#FB4040',
    borderRadius: '3px 0px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '160%',
    color: '#FFFFFF',
    content: 'Новинки',
  },
  topSeller: {
    width: '120px',
    height: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F7CF00',
    borderRadius: '3px 0px',
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '160%',
    color: '#FFFFFF',
    content: 'Новинки',
  },
}));
