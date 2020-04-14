import React, { useState, useEffect } from 'react'
import { Container, Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import styles from './style'
import { MovieIcon } from '../../icons'

export default ({history}) => {
  const classes = styles()

  const [searchText, setSearchText] = useState('')
  const handelerSearch = e => {
    setSearchText(e.target.value)
  }
  const handlerClearSerch = () => setSearchText('')
  const handlerSearchClick = () => history.push(`/results?movieName=${searchText}`)

  return(
    <Container className={classes.container}>
      <Card className={classes.cardContainer}>
        <Grid container className={classes.titleGridContainer}>
          <Grid>
            <Typography className={classes.title}> Bienvenido!</Typography>
          </Grid>
          <Grid>
            <MovieIcon className={classes.movieIcon}/>
          </Grid>
        </Grid>
        <TextField 
          value={searchText}
          placeholder="buscar..."
          className={classes.textFieldSearch}
          onChange={handelerSearch} />
        <Grid className={classes.buttonsContainer}>
          <Button variant="contained" onClick={handlerClearSerch}>Limpiar</Button>
          <Button variant="contained" color="primary" size="large" className={classes.searchButton} onClick={handlerSearchClick}>Buscar</Button>
        </Grid>
      </Card>
    </Container>
  )
}