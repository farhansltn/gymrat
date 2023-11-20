import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from 'react-loader-spinner'


const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center'
     alignItems='center' width='200%' color='gray'>
        <InfinitySpin color="grey" />

     </Stack>
  )
}

export default Loader