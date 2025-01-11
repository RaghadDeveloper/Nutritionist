import React from 'react'
import './Member.css';
import Nav from 'react-bootstrap/Nav';
import { MemberData } from '../Data/MemberData'
import MemberCard from '../MemberCard/MemberCard';
import img6 from './../../assets/images/team/member1.png'
import img7 from './../../assets/images/team/member2.png'
import img8 from './../../assets/images/team/member3.png'
import img9 from './../../assets/images/team/member4.png'
export default function Members() {
  return (
    <>
   
   <div className='LF-nav'>
    
 <Nav variant="success" defaultActiveKey="/home" className='LF-button' >
 <div className='LF-item'>
      <Nav.Item  >
        <Nav.Link eventKey="link-1" className='LF-line'>ManagementTeam</Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link  eventKey="link-2" className='LF-line'> Nutritionists and Dietitians </Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link eventKey="link-3"className='LF-line'> Customer Support </Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link eventKey="link-4" className='LF-line' > Marketing and Communications </Nav.Link>
      </Nav.Item>
      <Nav.Item >
        <Nav.Link eventKey="link-5" className='LF-line'>Technology and Development </Nav.Link>
      </Nav.Item></div>
      </Nav></div>
      
      <div className='LF-numcard'>
      <img className='LF-image'  src={img6} alt="" />
      <img className='LF-image'src={img7} alt="" />
      <img className='LF-image' src={img8} alt="" />
      <img className='LF-image' src={img9} alt="" />
      </div>
      
      <div className='LF-cardMEM '>
      {MemberData.map((e,index) => {
          return(
            < MemberCard  key={index} title={e.title}  desc={e.desc}  />
          )
      
         })}</div>
    </>
  )
}
