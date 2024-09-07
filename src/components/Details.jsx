import React, { useState } from 'react'
import '../css/section.css';

const Details = ({person,onChangeFunction}) => {

  const {name,home,email,phone,profile} = person

  return (
    <div className='section-main'>
      <h1 className='sectionHeader'> Details</h1>
      <form className='form-main'>
        <label className='label-header'>Name:</label>
          <input 
            type="text"
            name="name"
            value={name}
            onChange={onChangeFunction}
            placeholder='Enter your full name'
            required
          />

          <label className='label-header'>Email:</label>
          <input 
            type="email"
            name="email"
            value={email}
            onChange={onChangeFunction}
            placeholder='Enter your email'
            required
          />

          <label className='label-header'>Phone Number:</label>
          <input 
            type="text"
            value={phone}
            name="phone"
            onChange={onChangeFunction}
            placeholder='Enter your number'
            required
          />

          <label className='label-header'>Permanent Address:</label>
          <input 
            type="text"
            value={home}
            name="home"
            onChange={onChangeFunction}
            placeholder='Enter your address'
            required
          />

          <label className='label-header'>Profile</label>
          <textarea
            value={profile}
            name="profile"
            onChange={onChangeFunction}
            required
          />
          {/* <button type="submit" className='submit-btn'>Submit</button> */}
          <hr></hr>
      </form>
    </div>
  )
}

export default Details