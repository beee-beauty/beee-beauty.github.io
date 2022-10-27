import { Typography } from '@mui/material'
import React from 'react'

function IntroSection({articleDetails}) {
    const date = articleDetails?.createdAt?.substring(0, 10)
    const authorDetails = articleDetails?.author?.data?.attributes
    const authorSection = () =>{
      if(!authorDetails){
        return <></>
      }
      return (
        <Typography
          variant="subTitle"
          color="secondary"
          sx={{
            my: 1,
          }}>
          By: {authorDetails.name}
        </Typography>
      )
    }
    return (
      <>
        <Typography
          variant="title"
          color="secondary"
          sx={{
            mt: 3,
          }}>
          {articleDetails.title}
        </Typography>
        {authorSection()}
        <Typography
          variant="h4"
          color="secondary"
          sx={{
            my: 1,
          }}>
          {date}
        </Typography>
      </>
  )
}

export default IntroSection