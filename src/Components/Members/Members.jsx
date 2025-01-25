import React from 'react'
import './Member.css';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { MemberData } from '../Data/MemberData'
import MemberCard from '../MemberCard/MemberCard';

export default function Members() {
 
  return (
    <>
     
      <div className='LF-cardMEM main-container '>
      {MemberData.map((e,index) => {
          return(
            < MemberCard  key={index} image={e.image}  title={e.title}  desc={e.desc}  />
          )
      
         })}</div>
    </>
  )
}
