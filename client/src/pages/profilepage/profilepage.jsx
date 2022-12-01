import React from 'react'
import './profilepage.css';
import {Row, Col, Container} from 'react-bootstrap';
import RemaindersSidebar from '../../components/RemaindersSidebar/RemaindersSidebar.jsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectComponent from '../../components/ProjectComponent/ProjectComponent';
const ProfilePage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
      <Col xs={8} style={{"padding":"0px 50px"}}>
      <div id="profile-info-div">
        <img alt="profile cover of the user" id="profile-cover-pic" src="https://img.freepik.com/free-photo/background_53876-32169.jpg?w=2000"/>
        <div id="profile-pic-and-title">
        <img alt="Profile of the user" src="data:image/png;base64,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" style={{"objectFit": "cover", "border":"2px ridge white", "height":"100px", "width":"100px"}}/>
        <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"end", "marginLeft":"15px", "paddingTop":"0px"}}>
          <div style={{"marginBottom":"15px"}}>
          <span id="profile-name">Satoshi Nakamoto</span><br/>
          <span id="profile-designation">Tech Lead, WorkLab Tech. | Open-source enthusiast, IIT Guwahati '22</span>
          </div>
        </div>
        </div>
        <div id="profile-desc-div">
        <span style={{"fontSize":"16", "color":"#fafdfd", "fontWeight":"400"}}>Based in Bangalore</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{"fontSize":"14", "color":"#FFB691", "fontWeight":"600", "cursor":"pointer"}}>Contact info</span>
        <br/>
        <span>Joined WorkLab in Feb 2021</span>
        </div>
        <div>
            <Tabs
          defaultActiveKey="profile"
          // id="uncontrolled-tab-example"
          className="mb-3"
              >
          <Tab eventKey="profile" title="Profile">
            <div id="profile-tab-div">
              <div id="ongoing-projects-div">
                <div style={{"color":"#fafdfd", "fontSize":"20px", "fontWeight":"400", "padding":"10px 0px 0px 10px"}}>Ongoing Projects</div>
                <ProjectComponent/>
                <ProjectComponent/>
                <div style={{"paddingLeft":"10px", "color":"#FFB691","fontSize":"14", "fontWeight":"600", "cursor":"pointer", "margin":"20px 0px 0px 10px"}}>View all projects</div>
              </div>
              <div id="past-projects-div">
              <div style={{"color":"#fafdfd", "fontSize":"20px", "fontWeight":"400", "padding":"10px 0px 0px 10px"}}>Past Projects</div>
                <ProjectComponent/>
                <ProjectComponent/>
                <div style={{"paddingLeft":"10px", "color":"#FFB691","fontSize":"14", "fontWeight":"600", "cursor":"pointer", "margin":"20px 0px 0px 10px"}}>View all projects</div>
              </div>
            </div>
          </Tab>
          <Tab eventKey="about" title="About">
            asdfasfasdf
          </Tab>
          <Tab eventKey="buddies" title="Buddies">
            asdfasdfasdf
          </Tab>
        </Tabs>
        </div>
      </div>
      
      </Col>
      <Col xs={4} style={{"padding":"10px 40px 0px 0px"}}>
      {/* <RemaindersSidebar/> */}
      </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;