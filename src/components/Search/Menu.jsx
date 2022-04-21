import React from 'react';
import { Grid } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';

import MenuItem from './MenuItem';

const Menu = ({ mainItemArr }) => {
    

  return (
      <Grid container >
          <Grid item xs={11} sm={11} md={11} lg={8} className='menu'>
              <Grid container spacing={2}>
                {
                    mainItemArr.map((item)=> (
                        <Grid key={item.id} item xs={12} sm={12} md={6} lg={6} >
                            <MenuItem item={item} />
                        </Grid>
                    ))
                }
              </Grid>
          </Grid>
      </Grid>
  )
}

export default Menu