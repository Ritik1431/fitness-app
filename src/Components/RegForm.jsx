import React from 'react'
import './RegForm.css'
const RegForm = () => {
  return (
    <>
    <div className="regform">
    <div className="header">
        <h1>Fitness Club Registration</h1>
    </div>
    <div className='form1'>
      <form action="" className='form2'>
        <input type="text" placeholder='Name' /><br />
        <input type="email" placeholder='Email' /><br />
        <input type="number" placeholder='Phone Number' /><br />
        <input type="address" placeholder='Address' /><br />
        <button className='addmember'>
            Add Member
        </button>
      </form>
    </div>
    <div className='memberlistdiv'>
        <button className="memberList" action=''>
            View Member List
        </button>
    </div>
    </div>
    </>
  )
}

export default RegForm
