import React from 'react'
//   

const Education = ({education,onChangeFunction}) => {

  const {college,address,degree,years,description} = education;
  
  const educationContent = (
      <div className='section-main'>
          <h1 className='sectionHeader'> Education</h1>
          <form className='form-main'>
          <label className='label-header'>Name of Institute:</label>
              <input 
                type="text"
                name="college"
                value={college}
                onChange={onChangeFunction}
                placeholder='Enter name of the institute'
                required
              />
            

 
              <label className='label-header'>Address:</label>
              <input 
                type="text"
                name="address"
                value={address}
                onChange={onChangeFunction}
                placeholder='Enter address of the institute'
                required
              />
              
 
              <label className='label-header'>Degree:</label>
              <input 
                type="text"
                value={degree}
                name="degree"
                onChange={onChangeFunction}
                placeholder='Name of the degree'
                required
              />
            

 
              <label className='label-header'>Years Enrolled:</label>
              <input 
                type="text"
                value={years}
                name="years"
                onChange={onChangeFunction}
                placeholder='Eg:2010-2014'
                required
              />
             

              <label className='label-header'>Description</label>
              <textarea
                value={description}
                name="description"
                onChange={onChangeFunction}
              />

              {/* <button className='submit-btn'>Submit</button> */}
          </form>

      </div>
  )
  return (
      <div>
          {educationContent}
      </div>
  )
}
  
  export default Education