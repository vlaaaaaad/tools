import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import '../Styles/ProductsContainerAdaptive.css';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    minHeight: '500px',
    padding: '70px 10% 70px 10%',
    boxSizing: 'border-box',
  },
  // containerHeader: {
  //   width: '100%',
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  //   fontWeight: '500',
  //   fontSize: '36px',
  //   lineHeight: '40px',
  //   marginBottom: '50px',
  //   boxSizing: 'border-box',
  // },
  showAllButton: {
    textTransform: 'none',
    fontSize: '18px',
    lineHeight: '160%',
    color: '#4857df',
  },
  showAllButtonSmall: {
    textTransform: 'none',
    fontSize: '14px',
    lineHeight: '160%',
    color: '#4857df',
  },
  // containerBody: {
  //   width: '100%',
  //   display: 'flex',
  //   flexWrap: 'wrap',
  //   boxSizing: 'border-box',
  // },
}));

export default function ProductsContainer() {
  const classes = useStyles();
  useEffect(() => {}, []);

  return (
    <div className={classes.container}>
      <div className="containerHeader">
        Популярные товары
        <div className="hideInMobile">
          <Button
            className={classes.showAllButton}
            variant="default"
            endIcon={<ArrowForwardIosIcon />}
          >
            Показать всё
          </Button>
        </div>
        <div className="hideInNonMobile">
          <Button
            className={classes.showAllButtonSmall}
            variant="default"
            endIcon={<ArrowForwardIosIcon />}
          >
            Показать всё
          </Button>
        </div>
      </div>
      <div className="containerBody">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}
