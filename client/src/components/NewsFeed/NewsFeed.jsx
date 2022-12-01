import './NewsFeed.css';
import React from 'react';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import variables from '../../utils/variables.js';
import FeedPost from '../FeedPost/FeedPost';
const NewsFeed = () => {
  return (
    <div id="newsfeed-div">
        <div id="newsfeed-profile-input-div">
            <AccountCircleRoundedIcon style={{"color":variables.highlihgt_color}}/><input id="post-input" placeholder='Post an update' type="text"></input>
        </div>
        <div id="newsfeed-post-options-div" style={{"color":variables.text_color, "fontSize":"16", "fontWeight":variables.font_weight_normal}}>
            <div><CameraAltOutlinedIcon/>&nbsp;&nbsp;Photo/Video</div>
            <div><CampaignOutlinedIcon/>&nbsp;&nbsp;Work Update</div>
            <div><FeedOutlinedIcon/>&nbsp;&nbsp;Article</div>
        </div>
        <FeedPost/>
        <FeedPost/>    
    </div>
  )
}

export default NewsFeed