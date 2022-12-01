import React from 'react';
import './projectspage.css';
import {Row, Col, Container} from 'react-bootstrap';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import variables from '../../utils/variables.js';
import FeedPost from '../../components/FeedPost/FeedPost';
import RemaindersSidebar from '../../components/RemaindersSidebar/RemaindersSidebar.jsx';
const ProjectsPage = () => {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
      <Col xs={8} style={{"padding":"0px 50px"}}>
      <div id="project-info-div">
        <img alt="project cover" id="project-cover-pic" src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/249230244_1962685503908393_9010985637504035597_n.jpg?stp=dst-jpg_p640x640&_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=RMals-P6ztEAX9aZiqY&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCtfMzlcwY6yfCU9POWMvAnPDGaTOjUsF0EkrW_EKfm9A&oe=638BB336"/>
        <div id="project-pic-and-title">
        <img alt="project imaage" src="https://cdn.dribbble.com/users/2543315/screenshots/16765731/mt-01_4x.png" style={{"objectFit": "cover", "border":"2px ridge white", "height":"100px", "width":"100px"}}/>
        <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"end", "marginLeft":"15px", "paddingTop":"0px"}}>
          <div style={{"marginBottom":"15px"}}>
          <span id="project-title">Fast Deploy</span><br/>
          <span id="project-subtitle">WorkLab, Guwahati</span>
          </div>
        </div>
        </div>
        <div id="project-desc-div">
        Meta AI presents CICERO — the first AI to achieve human-level performance in Diplomacy, a strategy game which requires building trust, negotiating and cooperating with multiple players. New techniques in strategic reasoning and natural language processing give CICERO the ability to understand players’ motivations and perspectives, make complex plans, reach agreements, form alliances and even win! When playing in live games, CICERO achieved more than 2X the average score of its human opponents. 
        Learn more about this breakthrough in cooperative AI: http://bit.ly/3TX6PkP
        </div>
      </div>
      <div id="projectspage-profile-input-div">
            <AccountCircleRoundedIcon style={{"color":variables.highlihgt_color}}/><input id="post-input" placeholder='Post an update' type="text"></input>
        </div>
        <div id="projectspage-post-options-div" style={{"color":variables.text_color, "fontSize":"16", "fontWeight":variables.font_weight_normal}}>
            <div><CameraAltOutlinedIcon/>&nbsp;&nbsp;Photo/Video</div>
            <div><CampaignOutlinedIcon/>&nbsp;&nbsp;Work Update</div>
            <div><FeedOutlinedIcon/>&nbsp;&nbsp;Article</div>
        </div>
        <div style={{"backgroundColor":"#353535", "marginBottom":"-10px", "padding":"20px 10px", "color":"#fafdfd", "fontSize":"20px", "fontWeight":"normal"}}>Recent Activity</div>
        <FeedPost/>
        <FeedPost/>
      </Col>
      <Col xs={4} style={{"padding":"10px 40px 0px 0px"}}>
      <RemaindersSidebar/>
      </Col>
      </Row>
    </Container>
  )
}

export default ProjectsPage