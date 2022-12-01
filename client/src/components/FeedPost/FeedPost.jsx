import './FeedPost.css';
import React from 'react'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import variables from '../../utils/variables.js';

const FeedPost = () => {
  return (
    <div id="feed-post-div">
        <div id="feed-post-header">
            <div id="feed-post-person-info">
                <div style={{"height":"40px", "width":"40px", "borderRadius":"1000px", "marginRight":"10px"}}>
                    <img src="https://media.marketrealist.com/brand-img/XEVqF9Chi/1200x628/is-elon-musk-firing-parag-agrawal-1666975071805.jpg" style={{"height":"100%", "width":"100%", "objectFit":"cover", "borderRadius":"1000px"}}/>
                </div>
                <div style={{"color":variables.text_color}}>
                    <div style={{"fontSize":"16", "fontWeight":"500"}}>
                        Parag Agarwal
                    </div>
                    <div style={{"fontSize":"14", "fontWeight":"400"}}>
                        CTO, Meta Inc.
                    </div>
                </div>
            </div>
            <div id="feed-post-options-button">
                <MoreVertOutlinedIcon style={{"color":"white"}}/>
            </div>
        </div>
        <div id="feed-post-description">
            <span style={{"fontWeight":"400", "fontSize":"16"}}>Meta AI: New project launch</span><br/>
            <span style={{"fontWeight":"400", "fontSize":"14"}}>Meta Inc.</span>
        <p>We’re developing AI to help eliminate language barriers in the metaverse, so eventually you can talk to almost anyone with the help of real-time speech translations. Please do consider joining the AI team at Meta!</p>
        </div>
        <div id="feed-post-image">
            <img style={{"height":"100%", "width":"100%", "objectFit":"cover"}} src="https://pbs.twimg.com/media/FUQdx_tVEAAL6Z3?format=jpg&name=4096x4096"/>
        </div>
        <div id="feed-post-interaction-buttons">
            <div><ThumbUpOutlinedIcon style={{"color":variables.text_color}}/>&nbsp;&nbsp;<span style={{"color":"#E1E3E3"}}>Like</span></div>
            <div><ChatBubbleOutlineOutlinedIcon style={{"color":variables.text_color}}/>&nbsp;&nbsp;<span style={{"color":"#E1E3E3"}}>Comment</span></div>
            <div><SendOutlinedIcon style={{"color":variables.text_color}}/>&nbsp;&nbsp;<span style={{"color":"#E1E3E3"}}>Share</span></div>
        </div>
    </div>
  )
}

export default FeedPost