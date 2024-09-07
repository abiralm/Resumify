import React from 'react'

const Skills = ({skill,onChangeSkills}) => {
  return (
    <div  className='section-main'>
        <h1 className='sectionHeader'>Skills</h1>
        <form className='form-main'>
        <label className='label-header'>Add your skills</label>
          <textarea
              value={skill}
              name="skill"
              onChange={onChangeSkills}
              placeholder='Add a skill with description'
            />
            {/* <button className='submit-btn'>Submit</button> */}
        </form>  
    </div>
  )
}

export default Skills