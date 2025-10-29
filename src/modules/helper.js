import React from 'react'
import { Box } from '@mui/material'

export const C1 = '#acccc6'
export const C2 = '#524d5c'

export const Row = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='row'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
    border='1px solid black'
    justifyContent={'center'}
  >{props.children}</Box>
}

export const Col = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='column'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
    border='1px solid green'
  >{props.children}</Box>
}

export const Title = (props) => {
  return <Box {...props}
    display='flex'
    fontSize='calc(18px + 12 * ((100vw - 335px) / 1265))'
  >{props.children}</Box>
}

export const TitleBox = (props) => {
  return <Box {...props}
    display='flex'
    fontSize='calc(18px + 12 * ((100vw - 335px) / 1265))'
    m='12vh 0 8vh'
    p='4vh'
    width='75%'
    justifyContent='center'
    backgroundColor='rgba(0,0,0,.9)'
    color={C1}
    border='1px solid'
    borderRadius='10px'
  >{props.children}</Box>
}