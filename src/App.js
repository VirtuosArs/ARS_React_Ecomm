import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import ItemCard from './components/Card';
import CategoryFilter from './components/Filter';
import Footer from './components/Footer';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Xto10X Ecommerce
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [])


  let fetchProducts =  () => {
    fetch('https://demo7242716.mockable.io/products')
    .then(res=> {
      return res.json();
    })
    .then( response => {
      //Filter and get category
      const categories = [...new Set(response.products.map(item => item.category))]; 
      const brands = [...new Set(response.products.map(item => item.brand))]; 
      // console.log("Category", categories);
      setCategory(categories);
      setData(response.products);
      setBrand(brands);
    })
    .catch(e=> console.log("Error =", e))
  }

  let filterBasedOnCategory = (val) => {
    //Filter data based on category
    if(val.length) {
      let selectedCategory = val;
      let filterdData =_.filter(data, (v, index) => _.includes(selectedCategory, v.category));
      setData(filterdData)
    }
    else {
      fetchProducts();
    }
  }

  let filterBasedOnBrand = (val) => {
    //Filter data based on category
    if(val.length) {
      let selectedCategory = val;
      let filterdData =_.filter(data, (v, index) => _.includes(selectedCategory, v.brand));
      setData(filterdData)
    }
    else {
      fetchProducts();
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalGroceryStoreIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
          Xto10X Ecommerce
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <CategoryFilter categoryOptions={category} 
          filterData={(val) => filterBasedOnCategory(val)}
            brandOptions={brand} filterBrandData={(val) => filterBasedOnBrand(val)}
          />
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {data && data.map((product) => (
              <Grid item key={product.productId} xs={12} sm={6} md={4}>
                <ItemCard classes={classes} itemData={product}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Footer classes={classes} />
    </React.Fragment>
  );
}