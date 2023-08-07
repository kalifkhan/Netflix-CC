import React from 'react'

import { Row } from './Row'
import requests from '../REquest/Request';


 const Content = () => {
  return (
    <div className='homescreen'>
        <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow> </Row>
        <Row title="Netflix Comedy" fetchUrl={requests.fetchComedyMovies}
        isLargeRow> </Row>
        <Row title="Netflix Actions" fetchUrl={requests.fetchActionMovies}
        isLargeRow> </Row>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}
        isLargeRow> </Row>
        
    </div>
  )
}
export default Content 
