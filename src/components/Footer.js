import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function Footer({classes}) {
  // Declare a new state variable, which we'll call "count"
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Xto10X Ecommerce
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Shop all at one place
      </Typography>
      {/* <Copyright /> */}
    </footer>)
}