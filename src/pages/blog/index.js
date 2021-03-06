import React from 'react';
import Typography from '@material-ui/core/Typography';
import BlogRoll from '../../components/BlogRoll';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '40px auto',
    maxWidth: 1200,
    height: '100%',
  },
  header: {
    width: 100,
    '@media (max-width: 700px)': {
        fontSize: 42
    },
  },
}))

export default function BlogIndexPage () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography className={classes.header} variant="h1" gutterBottom>
        Latest Updates
      </Typography>
      <section className="section">
        <div className="container">
          <div className="content">
            <BlogRoll />
          </div>
        </div>
      </section>
    </div>
  )
}
