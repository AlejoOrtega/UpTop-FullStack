import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import TransferList from '../components/TransferList';
import { createNewCourse, createNewLink, deleteCourse, deleteLink, getAdminCourses, getBannedUsers, getCourseLinks, getNotBannedUsers, getPlans, updateCourseInformation, updateLinkInformation } from '../components/utils/fetchs';
import List from '../components/List';
import { Button, TextField } from '@mui/material';
import { Palette } from '../components/utils/colors';
import BasicSelect from '../components/Select';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Admin = () => {
    const initialCourseState = {
      title: '',
      description: '',
      image_url: '',
      plan_id: 1
    }

    const initialLinkState = {
      title: '',
      link_url: '',
      course_id: '',
    }
    const currentUser = useSelector(state => state.user.value)
    const [expanded, setExpanded] = useState(false);
    const [banned , setBanned] = useState([])
    const [notBanned, setNotBanned] = useState([])
    const [courses, setCourses] = useState([])
    const [selectedCourse, setSelectedCourse] = useState(initialCourseState);
    const [selectedLink, setSelectedLink] = useState(initialLinkState)
    const [links, setLinks] = useState([])
    const [update, triggerUpdate] = useState(false)
    const [plans, setPlans] = useState([])

    const coursesTitle = courses.map(course => course.title);
    const linksTitle = links.map(link => link.title);
    const [isCourseSelected, setIsCourseSelected] = useState(false)
    const [isLinkSelected, setIsLinkSelected] = useState(false)
    
    const handleCourseSelected = async (title, currentIndex) => {
      if(currentIndex !== 0){
        let course = courses.find(course => course.title === title)
        setSelectedCourse(()=>({...course}))
        setLinks([...await getCourseLinks(course.id)])
        setIsCourseSelected(true)
        setSelectedLink(()=>({...selectedLink,['course_id']: course.id}))
      }else{
        setLinks([])
        setSelectedCourse(initialCourseState)
        setIsCourseSelected(false)
        setSelectedLink(()=>({...selectedLink,['course_id']: ''}))
      }
    }

    const handleLinkSelected = (title, currentIndex) => {
      if(currentIndex !== 0){
        let link = selectedCourse.links.find(link => link.title === title)
        setSelectedLink({...link})
        setIsLinkSelected(true)
      }else{
        setSelectedLink(initialLinkState)
        setIsLinkSelected(false)
      }
    }

    const onChangeInformationOfCourse = (e) => {
      let name = e.target.name, value=e.target.value
      setSelectedCourse({...selectedCourse,[name]: value})
    }

    const onChangeInformationOfLink = (e) => {
      let name = e.target.name, value=e.target.value
      setSelectedLink({...selectedLink,[name]: value})
    }

    const handleCourseAction = async() => {
      if(isCourseSelected){
        //patch
        updateCourseInformation(selectedCourse)
      }else{
        createNewCourse(selectedCourse)
        setSelectedCourse(()=> initialCourseState)
      }
      triggerUpdate(prev => !prev)
    }

    const handleLinkAction = async() => {
      if(isLinkSelected){
        updateLinkInformation(selectedLink)
      }else{
        createNewLink(selectedLink)
        setSelectedLink(()=> initialLinkState)
      }
      window.location.reload(false)
    }

    const handleLinkDelete = async() => {
      let response = deleteLink(selectedLink.id)
      setSelectedLink(()=>initialLinkState)
      window.location.reload(false)
    }

    const handleCourseDelete = () => {
      let response= deleteCourse(selectedCourse.id)
      triggerUpdate(prev => !prev)
      setSelectedCourse(()=> initialCourseState)
      setIsCourseSelected(()=> false)
    }

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


    useEffect(()=>{
      const getInfo = async() => {
        let response = await getBannedUsers()
        setBanned([...response.map(user => user.username)])
        response = await getNotBannedUsers()
        setNotBanned([...response.map(user => user.username)])
        response = await getAdminCourses()
        setCourses([...response])
        response = await getPlans()
        setPlans([...response])
        try{
          response = await getCourseLinks(selectedCourse.id)
          setLinks([...response])
        }catch(e){

        }
      }
      getInfo();
    }, [update, selectedCourse])
    
    if (currentUser===''){
      return <Navigate replace to='/'/>
    } 
    return (
      <Body>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              Users
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>Manage all the users</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <TransferList rightData={banned} leftData={notBanned}/>
          </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>Courses</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Manage all the courses and link availables
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h1>Select a course to manage</h1>
            <UpdateSection>
              <List newData={coursesTitle} selected={handleCourseSelected}/>
              <UpdateForm>
                <TextField sx={{margin: '10px 0px',}} label="Title" name='title' placeholder='Title of Course' value={selectedCourse.title} onChange={onChangeInformationOfCourse}/>
                <TextField sx={{margin: '10px 0px'}} label="Description" name='description' placeholder='Description of Course' multiline rows={4} value={selectedCourse.description} onChange={onChangeInformationOfCourse}/>
                <ButtonGroup>
                  <Button sx={{backgroundColor: Palette.SECONDARY, margin: '0 10px', color: 'black'}} onClick={handleCourseAction}> {isCourseSelected? 'Update Course' : 'Create Course'}</Button>
                  {isCourseSelected? <Button sx={{backgroundColor: 'red', margin: '0 10px', color: 'black'}} onClick={handleCourseDelete}>Delete Course</Button> : null} 
                </ButtonGroup>
              </UpdateForm>
              <UpdateForm> 
                <BasicSelect plans={plans} selected={selectedCourse.plan_id? selectedCourse.plan_id : null} onChange={onChangeInformationOfCourse}/>
              </UpdateForm> 
            </UpdateSection>
            
            {isCourseSelected? (
            <>
            <h1>Select a link to manage</h1>
            <UpdateSection>
              <List newData={links.map(link => link.title)} selected={handleLinkSelected}/>
              <UpdateForm>
                <TextField sx={{margin: '10px 0px',}}label="Title" name='title' placeholder='Title of Link' value={selectedLink.title} onChange={onChangeInformationOfLink}/>
                <TextField sx={{margin: '10px 0px'}}label="Link_Url" name='link_url' placeholder='URL Link' value={selectedLink.link_url} onChange={onChangeInformationOfLink}/>
                <ButtonGroup>
                  <Button sx={{backgroundColor: Palette.SECONDARY, margin: '0 10px', color: 'black'}} onClick={handleLinkAction}>{isLinkSelected? 'Update link' : 'Create Link'}</Button>
                  {isLinkSelected? <Button sx={{backgroundColor: 'red', margin: '0 10px', color: 'black'}} onClick={handleLinkDelete} >Delete Link</Button> : null}
                </ButtonGroup>
              </UpdateForm> 
              
            </UpdateSection>
            </>
            ): null}
            
          </AccordionDetails>
        </Accordion>

      </Body>
    );
  }
 
export default Admin;

const Body = styled.div`
    height: 500px;
    overflow: auto;
`

const UpdateSection = styled.div`
    display: flex;
`

const UpdateForm = styled.div`
    display: flex;
    flex-direction: column;
    height: 300px;
`

const ButtonGroup = styled.div`
    display: flex;
`