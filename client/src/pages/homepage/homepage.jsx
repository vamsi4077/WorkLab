import React from 'react'
// import MenuSidebar from '../../components/MenuSidebar/MenuSidebar.jsx'
// import NavBar from '../../components/navbar/navbar';
import {Row, Col, Container} from 'react-bootstrap';
import RemaindersSidebar from '../../components/RemaindersSidebar/RemaindersSidebar.jsx';
import NewsFeed from '../../components/NewsFeed/NewsFeed.jsx';
// import variables from '../../utils/variables.js';

const HomePage = () => {
  return (  
    <Container fluid className="p-0">
      <Row className="g-0">
      <Col xs={8} style={{"padding":"0px 50px"}}>
      <NewsFeed/>
      </Col>
      <Col xs={4} style={{"padding":"10px 40px 0px 0px"}}>
      <RemaindersSidebar/>
      </Col>
      </Row>
    </Container>
  )
}

export default HomePage