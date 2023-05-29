import React from 'react'
import { Button, Space, Card } from 'antd';
import './Manish.css';


export default function Manish({email,
    opening,
    gender,
    urgency,
    jobTitle,
    jobDetails,
    jobLocation,
    interviewMode,
    interviewDuration,
    interviewLanguage
}) {

    return (
    <div className='pb-5'>
      <div className='col-lg-4 shift'>

<div className='ash'>
<div>
    <h6 className='left'>Draft</h6>
    <Space wrap className='tr'>
     <Button type="primary">Primary Button</Button> 
   </Space>
   </div>
<div className='row'>
    <div className='col-lg-8'>
   <p className='box' placeholder='Requisition Title'><b>Title:-{email}</b></p>
   </div>
   <div className='col-lg-4'>
   <p className='mt-4'><b>Opening:-{opening}</b></p>
   </div>
   </div>

          <Card bordered={true} className='top'>
          <h4>Requisition Details</h4>
          <div className='row'>
            <div className='col-lg-5'>
          <p><b>Gender:-</b><br /><br /><b>{gender}</b><hr className='mt-1' /></p>
          </div>
          <div className='col-lg-7'>
          <p><b>Urgency:-</b><br /><br /><b>{urgency}</b><hr className='mt-1' /></p>
          </div>
          </div>
          </Card>
      
           <Card bordered={true} className='top'>
       <h4>Job Details</h4>
       <div className='row'>
       <div className='col-lg-6'>
       <p><b>Job Title:-</b><br /><br /><b>{jobTitle}</b><hr className='mt-1' /></p>
       </div>
       <div className='col-lg-6'>
       <p><b>Job Details:-</b><br /><br /><b>{jobDetails}</b><hr className='mt-1' /></p>
       </div>
       </div>
       <div className='row mt-3'>
       <div className='col-lg-12'>
       <p><b>Job Location:-</b><br /><br /><b>{jobLocation}</b><hr className='mt-1' /></p>
       </div>
       </div>
       </Card>

       <Card bordered={true} className='top bottom'>
       <h4>Interview Setting</h4>
       <div className='row'>
        <div className='col-lg-6'>
       <p><b>Interview Mode:-</b><br /><br /><b>{interviewMode}</b><hr className='mt-1' /></p>
       </div>
       <div className='col-lg-6'>
       <p><b>Interview Duration:-</b><br /><br /><b>{interviewDuration}</b><hr className='mt-1' /></p>
       </div>
       </div>
       <div className='row mt-3'>
       <div className='col-lg-12'>
       <p><b>Interview Language:-</b><br /><br /><b>{interviewLanguage}</b><hr className='mt-1' /></p>
       </div>
       </div>
        </Card> 
       </div>

                </div>
    </div>
  )
}
