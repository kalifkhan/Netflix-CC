import React, { useState } from 'react'
import Nav from './Nav'
import { Banner } from '../REquest/Banner'
import { Row } from './Row'
import requests from '../REquest/Request';
import Content from './Content';
import './HomeScreen.css';
import { Toggle } from './Toggle';

const HomeScreen = () => {
  const [isToggled, setToggle] = useState(false);

  const toggleHandle = () => {

    setToggle(!isToggled);
  }




  return (
    <div className='homescreen'>
      <Nav> </Nav>
      <Banner> </Banner>
      <Toggle isToggled={isToggled} toggleHandle={toggleHandle}> </Toggle>

      {!isToggled && <Content> </Content>}

      {/* <Row title="Netflix originals" fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow> </Row>
        <Row title="Netflix Comedy" fetchUrl={requests.fetchComedyMovies}
        isLargeRow> </Row>
        <Row title="Netflix Actions" fetchUrl={requests.fetchActionMovies}
        isLargeRow> </Row>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}
  isLargeRow> </Row> */}

    </div>
  )
}
export default HomeScreen