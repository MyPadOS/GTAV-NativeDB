import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NativeDefinition } from '../../components'
import { Paper, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  paper: {
    padding: 16,
    marginBottom: 16,
  },
  comment: {
    whiteSpace: 'pre-wrap',
    overflowX: 'auto'
  },
  root: {
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '100vh',
    padding: '16px 16px 0px 16px',
  }
})

export default () => {
  const { native: hash } = useParams()
  const native = useSelector(({ natives }) => natives[hash]) ?? {}
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <Typography variant="h5" gutterBottom={4}>{native.name}</Typography>
      <Paper className={classes.paper}>
        <NativeDefinition
          name={native.name}
          return_type={native.return_type}
          params={native.params}
        />
      </Paper>
      <Paper className={classes.paper}>
        <Typography 
          component="p"
          variant="body2"
          className={classes.comment}
        >
          {native.comment || 'No comment available'}
        </Typography>
      </Paper>
    </div>
  )
}
