import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError();

  console.log("Error from error page is: ", error)

  if (error.status === 500) {
    return (
    <>
    <p>A server error has occurred: </p>
    <p>{error.data.message}</p>
    </>
    )
  }
  return (
    <div>Oops, this page could not be found!</div>
  )
}

export default ErrorPage