import React from 'react'

const Experience = ({experience,onChangeExperience}) => {
  const{org,orgAdd,role,yearsAct,roleDesc}=experience;  

  const experienceContent = (
    <div className='section-main'>
        <h1 className='sectionHeader'> Experience</h1>
        <form className='form-main'>
            <label className='label-header'>Name of Organization</label>
            <input
                type="text"
                name="org"
                value={org}
                onChange={onChangeExperience}
                placeholder="Enter organization name"
                required
            />
            <label className='label-header'>Address of Organization</label>
            <input
                type="text"
                name="orgAdd"
                value={orgAdd}
                onChange={onChangeExperience}
                placeholder="Enter organization address"
                required
            />

            <label className='label-header'>Role</label>
            <input
                type="text"
                name="role"
                value={role}
                onChange={onChangeExperience}
                placeholder="Enter role"
                required
            />

            <label className='label-header'>Years Active</label>
            <input
                type="text"
                value={yearsAct}
                name="yearsAct"
                onChange={onChangeExperience}
                placeholder='Eg:2010-2014'
                required
            />

            <label className='label-header'> Role Description</label>
              <textarea
                value={roleDesc}
                name="roleDesc"
                onChange={onChangeExperience}
              />

              {/* <button className='submit-btn'>Submit</button> */}
              <hr></hr>
        </form>
    </div>
  )  
  return (
    <div>{experienceContent}</div>
  )
}

export default Experience