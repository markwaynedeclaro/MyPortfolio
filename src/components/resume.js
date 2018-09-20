import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './../components/resume/education';
import Experience from './../components/resume/experience';
import Skills from './../components/resume/skills';
import './resume.css';

class Resume extends Component {

  render() {
    return (
      <div className="resume-body" >
        <Grid className="resume-grid">

          <Cell className="resume-left-col" col={4}>

            <h3>Mark Wayne de Claro</h3>
            <h4>Full Stack Java Developer</h4>
            <hr/>
            <h5>Address</h5>
            <p>42 Bates Street, Strathfield, NSW 2135</p>
            <h5>Phone</h5>
            <p>(+61) 406 753 085</p>
            <h5>Email</h5>
            <p>markwayne.declaro@gmail.com</p>
            <h5>Web</h5>
            <p>markwaynedeclaro.ml</p>
            <hr/>

          </Cell>

          <Cell className="resume-right-col" col={8}>

            <h3>Education</h3>
            <Education
              startYear={1999}
              endYear={2004}
              schoolName="University of the Philippines Diliman"
              course="BS Electrical Engineering"
              schoolDescription=""
            />

            <hr />

            <h3>Experience</h3>
            <Experience startYear={'Sep 2012'} endYear={'Jul 2018'}
              jobName="Senior Developer"
              company="Consumer Lending Group, BDO Unibank Inc."
              jobDescription="
              ● Handled two auxiliary systems for Consumer Lending Department
              ● In-charged of maintaining and delivering minor/major enhancement requests from the
              Business Unit users.
              ● Full SDLC of minor/major enhancements.
              ● Performed Unit Testing for the modues I handled then SIT testing for all enhancements.
              ● Expanded from a total of 4 independent applications to 10 during my stay. This is composed of
                2 main web applications, 2 perl-based programs and 6 web services.
          		● Spearheaded the Framework Migration of two main web applications from Struts 2 to Spring 4.
          		  This enhancement  also entailed migration to Java 8 and Tomcat 8. We used a lot of Jquery
                for the front-end tier. We capitalized Spring Security and Spring JDBC component. We used
                HP LoadRunner as testing tool (for functional and stress testing). Then we just recently used
                Ansible for deployment. This resulted to a much better application in terms of user interface
                and performance.
          		● Led the Framework Migration of two SOAP-based Web Services to Restful Web
                Services built on Spring framework.
              "
            />

            <Experience startYear={'Mar 2011'} endYear={'Sep 2012'}
              jobName="Senior Programmer"
              company="CAI-STA Philippines "
              jobDescription="
               ● Part of a team that supports the online business arm of a major supplier company.
		           ● Developed the Dashboard interface for the website (front-end to back-end). We used Spring as
		             our main framework then Hibernate for the persistence layer. I took advantage of Jquery for the
		             front-end tier."
            />

            <Experience startYear={'Aug 2005'} endYear={'Mar 2011'}
              jobName="IT Consultant"
              company="Indra Philippines Inc."
              jobDescription="
              ● Team Lead, Operations Portal (OP) - Electric Distribution Management System Project,
                                           Manila Electric Company
              		   -  Successfully developed and implemented the submodule for Management of Pre-arranged 		   Maintenance Job Requests using Struts-Spring-Ibatis integrated framework.
              		   -  Supervised the development and implementation of Struts-Spring-Ibatis integrated 			   framework-based submodule for tracking of damaged MERALCO-owned electrical facilities.
              		   -  Conceptualized, developed and implemented an efficient, sleek and user-friendly Time 		   Monitoring System for Indra employees under the Electric Distribution Management System 		   Project using Struts-Spring-Ibatis integrated framework and the most efficient Jquery-based 		   scripts. This initiative drastically improved the tardiness issues encountered by the project 	                for the past few years.
              		   -  Managed the delegation of maintenance activities for the eight existing submodules of OP

              		● Team Lead, Meter Asset Services System (MASS) – Electric Distribution Management System 		   Project, Manila Electric Company
              		   - Lead the implementation of the Grid Metering Management Subsystem that uses Struts-	 	   Spring-Ibatis integrated framework.
              		   - Successfully implemented Struts-Spring-Ibatis integrated framework -based submodule for 		   creation and management of Field Orders for cusomer meters.
              		   - Managed the delegation of maintenance activities for the three existing submodules of MASS

              		● Technical Lead / Assistant Team Lead, Operating Trouble Management System (OTMS)- 		   Electric Distribution Management System Project, Manila Electric Company
              		   - Successfully lead the migration of the module for Daily Interruption Report from a Mainframe- 		   based application into a servlet-based Web-application. The report generated through this 		   system is currently used by Meralco Operations for report generation submitted monthly to the 	                Energy Regulatory Board.
              		   - Created the Web OTMS. Developed seven new submodules including the Web-based Daily 		   Interruption Report. The said application gave added value to the Operations Team that cannot 		   be provided by Mainframe-based applications. Received commendation for the development 		   of the said application.

              		   - Initiated the creation of object-based mainframe objects to foster program reusability
              		   - Played major role in the adaption of CMMI-based process improvement scheme that aimed 		   to provide solid documentation process for different project development activities.

              "
            />

            <hr />

            <h3>Skills</h3>
            <Skills skill="Java 8" progress={90} />
            <Skills skill="Spring" progress={80} />
            <Skills skill="Spring Boot" progress={75} />
            <Skills skill="Javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="SQL" progress={80} />
            <Skills skill="React" progress={50} />

          </Cell>

        </Grid>
      </div>
    )
  }
}

export default Resume;
