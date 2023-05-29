import { useState } from "react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import React from 'react';
// import { Button, Space, Card } from 'antd';
import './App.css';
import Manish from "./component.js/Manish";


function Form() {

  const [email, setEmail] = useState("")
  const [opening, setOpening] = useState("")
  const [gender, setGender] = useState("")
  const [urgency, setUrgency] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [jobDetails, setJobDetails] = useState("")
  const [jobLocation, setJobLocation] = useState("")
  const [interviewMode, setInterviewMode] = useState("")
  const [interviewDuration, setInterviewDuration] = useState("")
  const [interviewLanguage, setInterviewLanguage] = useState("")



  return (
    <div className='container'>
      <h1 className='container'>Create Candidate Requisition</h1>
      <div className='row'>
        <div className='col-lg-6'>
          <Tabs>
            <TabList className="pointer">
              <Tab className="react-tabs__tab-selected abc bac over ">Requisition Details</Tab>
              <Tab className="react-tabs__tab-selected abc bac over">Job Details</Tab>
              <Tab className="react-tabs__tab-selected abc bac over">Interview Setting</Tab>
            </TabList>
            <hr className='line' />

            <TabPanels>
              <TabPanel>
                <form className='gaurav'>
                  <div class="form-group">
                    <label htmlFor="email" for="exampleInputEmail1" className='left'>Requisition Title</label>

                    <input type="email"
                      name="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="Enter your email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />

                    {/* <small id="emailHelp" class="form-text text-muted"></small> */}
                  </div>
                  <div class="form-group">
                    <label htmlFor="opening" className='left'>No. of Opening</label>

                    <input type="text"
                      name="opening"
                      class="form-control"
                      id="opening"
                      placeholder="No. of Opening"
                      autoComplete="off"
                      value={opening}
                      onChange={(e) => setOpening(e.target.value)} />

                  </div>
                  <div class="form-group">
                    <label htmlFor="gender" for="exampleInputPassword1" className='left'>Gender</label>
                    <select type="text"
                      class="form-control"
                      id="gender"
                      placeholder="Gender"
                      autoComplete="off"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label htmlFor="urgency" for="exampleInputPassword1" className='left'>Gender</label>
                    <select type="text"
                      class="form-control"
                      id="urgency"
                      placeholder="Urgency"
                      autoComplete="off"
                      value={urgency}
                      onChange={(e) => setUrgency(e.target.value)}
                    >
                      <option value="Urgent">Urgent</option>
                      <option value="Immediate Joining">Immediate Joining</option>
                      <option value="Relaxed">Relaxed</option>
                    </select>
                  </div>
                </form>
              </TabPanel>



              <TabPanel>
                <form>
                  <div class="form-group">
                    <label htmlFor="jobTitle" for="exampleInputEmail1" className='left'>Job Title</label>

                    <input type="jobTitle"
                      name="jobTitle"
                      class="form-control"
                      id="jobTitle"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Job Title"
                      autoComplete="off"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)} />

                    {/* <small id="emailHelp" class="form-text text-muted"></small> */}
                  </div>
                  <div class="form-group">
                    <label htmlFor="jobDetails" for="exampleInputEmail1" className='left'>Job Details</label>

                    <input type="text"
                      name="jobDetails"
                      class="form-control"
                      id="jobDetails"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Job Details"
                      autoComplete="off"
                      value={jobDetails}
                      onChange={(e) => setJobDetails(e.target.value)} />
                  </div>
                  <div class="form-group">
                    <label htmlFor="jobLocation" for="exampleInputEmail1" className='left'>Job Location</label>

                    <input type="text"
                      name="jobLocation"
                      class="form-control"
                      id="jobLocation"
                      aria-describedby="emailHelp"
                      placeholder="Enter your Job Location"
                      autoComplete="off"
                      value={jobLocation}
                      onChange={(e) => setJobLocation(e.target.value)} />
                  </div>
                </form>
              </TabPanel>


              <TabPanel>
                <form>
                  <div class="form-group">
                    <label htmlFor="interviewMode" for="exampleInputPassword1" className='left'>Interview Mode</label>
                    <select type="text"
                      class="form-control"
                      id="interviewMode"
                      placeholder=" Select Interview Mode"
                      autoComplete="off"
                      value={interviewMode}
                      onChange={(e) => setInterviewMode(e.target.value)}
                    >
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                    </select>

                    {/* <small id="emailHelp" class="form-text text-muted"></small> */}
                  </div>
                  <div class="form-group">
                    <label htmlFor="interviewDuration" for="exampleInputPassword1" className='left'>Interview Duration</label>
                    <select type="text"
                      class="form-control"
                      id="interviewDuration"
                      placeholder=" Select Interview Duration"
                      autoComplete="off"
                      value={interviewDuration}
                      onChange={(e) => setInterviewDuration(e.target.value)}
                    >
                      <option value="Short">Short</option>
                      <option value="Medium">Medium</option>
                      <option value="Long">Long</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label htmlFor="interviewLanguage" for="exampleInputPassword1" className='left'>Interview Language</label>
                    <select type="text"
                      class="form-control"
                      id="interviewLanguage"
                      placeholder=" Select Interview Language"
                      autoComplete="off"
                      value={interviewLanguage}
                      onChange={(e) => setInterviewLanguage(e.target.value)}
                    >
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        <Manish email={email}
          opening={opening}
          gender={gender}
          urgency={urgency}
          jobTitle={jobTitle}
          jobDetails={jobDetails}
          jobLocation={jobLocation}
          interviewMode={interviewMode}
          interviewDuration={interviewDuration}
          interviewLanguage={interviewLanguage}
        />


      </div>
    </div>

  )
}
export default Form;