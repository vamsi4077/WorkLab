import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import HomePage from './pages/homepage/homepage';
import ChatPage from './pages/chatpage/chatpage';
import ProjectsPage from './pages/projectspage/projectspage';
import SchedulePage from './pages/schedulepage/schedulepage';
import ProfilePage from './pages/profilepage/profilepage';
import NavBar from './components/navbar/navbar';
import variables from './utils/variables';
import MenuSidebar from './components/MenuSidebar/MenuSidebar';
function App() {
  return (
    <div id="app" style={{"height":"100%"}}>
        <Router>
          
          <div><NavBar/></div>
        <div style={{"paddingTop":"70px"}}>
          <Container fluid className="p-0">
          <Row className="h-100 g-0" style={{"backgroundColor":variables.background_darker}}>
          <Col id="ide" xs={2} style={{"display":"flex", "flexDirection":"row", "justifyContent":"end"}}>
          <MenuSidebar/>
          </Col>
          <Col xs={10}>
          <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/chatbox" element={<ChatPage/>}/>
            <Route exact path="/projects" element={<ProjectsPage/>}/>
            <Route exact path="/profile" element={<ProfilePage/>}/>
            <Route exact path="/schedule" element={<SchedulePage/>}/>
            </Routes>
          </Col>
          </Row>
          </Container>
        </div>
          
        </Router>
    </div>
    // <div id="app">
    
    // </div>
  );
}

export default App;
