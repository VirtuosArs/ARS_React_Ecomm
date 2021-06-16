import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import React from 'react';

export default function ItemCard({classes, itemData}) {
  // Declare a new state variable, which we'll call "count"
  return (<Card className={classes.card}>
  <CardMedia
    className={classes.cardMedia}
    // image={itemData.images[0].src}
    image={itemData.searchImage}
    title={itemData.productName}
  />
  <CardContent className={classes.cardContent}>
    <Typography gutterBottom variant="h5" component="p">
      {itemData.productName}
    </Typography>
    <Typography>
      {itemData.additionalInfo}
    </Typography>
    <Typography>
      {itemData.additionalInfo}
    </Typography>
    <Typography>
    ₹ {itemData.price}
    </Typography>
  </CardContent>
  {/* <CardActions>
    <Button size="small" color="primary">
      View
    </Button>
    <Button size="small" color="primary">
      Edit
    </Button>
  </CardActions> */}
</Card>)
}