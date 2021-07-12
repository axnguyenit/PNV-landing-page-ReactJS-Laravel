import React, { useEffect, useState} from "react";
import ReactDOM from "react-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Form from "@rjsf/material-ui";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import axios from "axios";

import CardBody from "../../components/Card/CardBody.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
// import HomePage from "../../components/HomePage/HomePage";
import Tasks from "../../components/Tasks/Tasks.js";
// import CardAvatar from "../../components/Card/CardAvatar.js";
import CardFooter from "../../components/Card/CardFooter.js";
import systemComponent from "./SystemComponent";
import uiSchema from "./UiSchema";
import About from '../../../about';
import Causes from '../../../causes';
import VideoSection from '../../../videoSection';
import Partners from '../../../partners';
import Volunteers from '../../../volunteers';
import JoinAsVolunteer from '../../../joinVolunteers';
import Testimonials from '../../../testimonials';
import Milestones from '../../../milestones';
// import Input from "@material-ui/core/Input";

// import avatar from "../../assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "#ffffff9e",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  formControl: {
    minWidth: "100%",
  },
};

const useStyles = makeStyles(styles);


const renderComponent = (name, props) => {
  switch(name) {
    case 'About':
      return <About {...props}/>
    case 'Causes':
      return <Causes {...props}/>
    case 'Partners':
      return <Partners {...props}/>
    case 'Volunteers':
      return <Volunteers {...props}/>
    case 'JoinAsVolunteer':
      return <JoinAsVolunteer {...props}/>
    case 'Milestones':
      return <Milestones {...props}/>
    case 'Testimonials':
      return <Testimonials {...props}/>
    case 'Video':
      return <VideoSection {...props}/>
    return ''
  }
}

export default function HomePage() {
  const [isSelectComponent, setIsSelectComponent] = useState(false);
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [componentName, setComponentName] = useState(null);
  const [selectedComponent, updateSelectedComponent] = useState({});
  const [listSelectedComponent, updateListSelectedComponent] = useState([]);
  const [currentFormData, updateCurrentFormData] = useState({});
  const [updateIndex, setUpdateIndex] = useState(null);
  

  const handleOnChange = (value, existingData = {}, currentIndex = null) => {
    setComponentName(value);
    updateSelectedComponent(systemComponent[value]);
    console.log(existingData);
    updateCurrentFormData(existingData);
    setUpdateIndex(currentIndex);

    if(value) {
      setIsSelectComponent(true);
    }
    else {
      setIsSelectComponent(false);
    }
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = [...listSelectedComponent]
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateListSelectedComponent(items);
  }

  const onSubmitForm = async (data) => {
    console.log(data);
    if (updateIndex === null) {
      listSelectedComponent.push({
        name: componentName,
        componentParams: data.formData
      });
    } else {
      let existing = listSelectedComponent[updateIndex];
      existing.name = componentName;
      existing.componentParams = data.formData;
    }

    updateListSelectedComponent([...listSelectedComponent]);
    setTimeout(()=>{
      updateCurrentFormData(data.formData);
    },200)
  }

  const onSaveLandingPage = async () => {
    try {
        let result  = await axios({
            method: 'put',
            url: '/api/landing-page',
            data: {
              url: 'home-page',
              description: 'home-page',
              title: 'home-page',
              meta: 'home-page',
              components: listSelectedComponent
            }
        });
    } catch( $e ) {

    }
  }

  return (
    <div>
      <GridContainer>
        

        {/* Select Component Start */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Select Component</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Select Component Type</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      // value={age}
                      onChange={(e) => handleOnChange(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {Object.keys(systemComponent).map(item => 
                       <MenuItem value={item}>{systemComponent[item].title}</MenuItem>
                      )}
                    </Select>
                  </FormControl>
                  
                  {!isSelectComponent ? "" :
                    <CustomTabs
                      title="Language:"
                      headerColor="success"
                      tabs={[
                        {
                          tabName: "Vietnamese",
                          tabContent: (
                            <Form
                              schema={selectedComponent}
                              uiSchema={uiSchema}
                              formData={currentFormData}
                              onChange={e => console.log("changed")}
                              onSubmit={onSubmitForm}
                              onError={e=> console.log("errors")}
                            />
                          ),
                        },
                        {
                          tabName: "English",
                          tabContent: (
                            <Form
                              schema={selectedComponent}
                              uiSchema={uiSchema}
                              formData={currentFormData}
                              onChange={e => {console.log("changed")} }
                              onSubmit={onSubmitForm}
                              onError={e=> console.log("errors")}
                            />
                          ),
                        },
                        {
                          tabName: "Français",
                          tabContent: (
                            <Form
                              schema={selectedComponent}
                              uiSchema={uiSchema}
                              formData={currentFormData}
                              onChange={e => {console.log("changed")}}
                              onSubmit={onSubmitForm}
                              onError={e=> console.log("errors")}
                            />
                          ),
                        },
                      ]}
                    />
                  }
                  <div> Preview Component</div>
                  { isSelectComponent && renderComponent(componentName) }
                </GridItem>
            

              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
        {/* Select Component End */}

      </GridContainer>
      {/* Add Component End */}

      {/* Sort Component Start */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Landing preview</h4>
            </CardHeader>
            <CardBody>
              {/* <HomePage></HomePage> */}
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="landing-page-preview">
                  {(provided) => (
                      <ul className="landing-page-preview" {...provided.droppableProps} ref={provided.innerRef}>
                        {listSelectedComponent.map((item, index) => {
                          return (
                            <Draggable key={`${item.name}_${index}`} draggableId={`${item.name}_${index}`} index={index}>
                              {(provided) => (
                                <li onClick={()=>{handleOnChange(item.name, item.componentParams, index)}} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  {renderComponent(item.name, item.componentParams)}
                                </li>
                              )}
                            </Draggable>
                          );
                        })}
                          {provided.placeholder}
                      </ul>
                  )}
                </Droppable>
              </DragDropContext>
            </CardBody>
            <CardFooter>
              <Button color="primary" onClick={onSaveLandingPage}>Save</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* Sort Component End */}
    </div>
  );
}
