import React from 'react'
import './ProjectComponent.css';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const ProjectComponent = () => {
    const tags = ['Deep learning', "SOTAA", 'Cloud', 'Multi-platform', 'Multi-framework']
  return (
    <div id="project-component-div">
        <div style={{"display":"flex", "flexDirection":"row", "justifyContent":"space-between", "margin":"30px 10px 0px 10px"}}>
            <div style={{"color":"#fafdfd", "fontSize":"24px", "fontWeight":"400"}}>Fast Deploy</div>
            <div style={{"color":"#FFB691", "fontSize":"24px", "fontWeight":"400"}}> <BookmarkBorderIcon/> </div>
        </div>
        <div style={{"color":"#fafdfd", "fontSize":"11px", "fontWeight":"400", "margin":"10px 10px"}}>Jan 1, 2021 . developer.android.com</div>
        <div id='tags' style={{"display":"flex", "padding":"10px 0px"}}>
            {tags.map((tag)=>{
                return <div style={{"display":"inline-block", "fontSize":"11px", "fontWeight":"400", "color":"#FFB691", "margin":"0px 5px", "backgroundColor":"rgba(102,91,84, 0.3)", "padding":"5px 7px", "borderRadius":"20px"}}>{tag}</div>
            })}
            
        </div>
    </div>
  )
}

export default ProjectComponent