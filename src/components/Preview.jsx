import React from 'react'
import '../css/preview.css';


const Preview = ({personalDetails,educationDetails,experienceDetails,skillsDetails}) => {

  const{name,home,email,phone,profile}=personalDetails;
  const {college,address,degree,years,description} = educationDetails;
  const{org,orgAdd,role,yearsAct,roleDesc}=experienceDetails;

  return (
      <div className="resume-container">
        <div className="resume-content">
          <div className="section profilePreview">
            <h1>{name}</h1>
            <p>{home} | {email} | {phone}</p>
            <h2>Summary</h2>
            <p>{profile}</p>
          </div>
  
          <div className="section educationPreview">
            <h2>Education</h2>
            {educationDetails.map((detail, index) => (
              <div key={index}>
                <h3>{detail.college} {detail.address}</h3>
                <p>{detail.degree}, ({detail.years})</p>
                <ul><li>{detail.description}</li></ul>
              </div>
            ))}
          </div>
  
          <div className="section experiencePreview">
            <h2>Experience</h2>
            {experienceDetails.map((exp, index) => (
              <div key={index}>
                <h3>{exp.org} {exp.orgAdd}</h3>
                <p>{exp.role}, ({exp.yearsAct})</p>
                <ul><li>{exp.roleDesc}</li></ul>
              </div>
            ))}
          </div>
  
          <div className="section SkillsPreview">
            <h2>Skills</h2>
            <ul>
              {skillsDetails.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
export default Preview