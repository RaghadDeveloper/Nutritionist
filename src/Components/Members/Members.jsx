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

      <Tab.Container className="left-tabs-example" defaultActiveKey="first">
        <Row >

          <Nav variant="pills" className="flex-Row LF-color">
            <Col sm={1}></Col>
            <Col sm={2} >
              <Nav.Item className='LF-item1'>
                <Nav.Link eventKey="first" className='LF-line1'  >Management Team</Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={2}>
              <Nav.Item className='LF-item2'>
                <Nav.Link eventKey="second" className='LF-line2 '>Nutritionists and Dietitians </Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={2}>
              <Nav.Item className='LF-item3'>
                <Nav.Link eventKey="third" className='LF-line3 '>Customer Support</Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={2}>
              <Nav.Item className='LF-item4'>
                <Nav.Link eventKey="fourth" className='LF-line4 '>Marketing and Communications</Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={2}>
              <Nav.Item className='LF-item5'>
                <Nav.Link eventKey="fivth" className='LF-line5 '>Technology and Development</Nav.Link>
              </Nav.Item>
            </Col>
            <Col sm={1}></Col>

          </Nav>
        </Row>
      </Tab.Container>




      <div className='LF-cardMEM '>
        {MemberData.map((e, index) => {
          return (
            < MemberCard key={index} image={e.image} title={e.title} desc={e.desc} />
          )

        })}</div>
    </>
  )
}
