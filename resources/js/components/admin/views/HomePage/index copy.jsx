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

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    // thumb: gary.default,
    type: 'sample',
    componentName: ''
  },
  {
    id: 'cato',
    name: 'Little Cato',
    // thumb: cato.default,
    type: 'sample',
    componentName: ''
  },
  {
    id: 'kvn',
    name: 'KVN',
    // thumb: kvn.default,
    type: 'sample',
    componentName: ''
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    // thumb: mooncake.default,
    type: 'sample',
    componentName: ''
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    // thumb: quinn.default,
    type: 'sample',
    componentName: ''
  },
];

const renderComponent = (name) => {
  switch(name) {
    case 'About':
      return <About/>
    case 'Causes':
      return <Causes />
    case 'Partners':
      return <Partners />
    case 'Volunteers':
      return <Volunteers />
    case 'JoinAsVolunteer':
      return <JoinAsVolunteer />
    case 'Milestones':
      return <Milestones />
    case 'Testimonials':
      return <Testimonials />
    case 'Video':
      return <VideoSection />
    return ''
  }
}

export default function HomePage() {
  const [isSelectComponent, setIsSelectComponent] = useState(false);
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [componentName, setComponentName] = useState(null);
  const [selectedComponent, updateSelectedComponent] = useState({});
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  const [listSelectedComponent, updateListSelectedComponent] = useState([]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setAge(value);
    // console.log(value);
    console.log(systemComponent[value]);
    setComponentName(value);
    updateSelectedComponent(systemComponent[value]);
    listSelectedComponent.push(systemComponent[value]);
    updateListSelectedComponent([...listSelectedComponent]);
    if(value) {
      setIsSelectComponent(true);
    }
    else {
      setIsSelectComponent(false);
    }
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);

  }

  const onChangeSelectComponent = (e) => {
    // let newCharactor = {
    //   id: 'quinn'+Date.now(),
    //   name: 'Quinn Ergon',
    //   // thumb: quinn.default,
    //   type: 'component',
    //   componentName: e.target.value
    // }

    // characters.push(newCharactor);
    // updateCharacters([...characters]);

  };

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
                      onChange={handleOnChange}
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
                            // console.log(e.formData)}
                            onChange={e => console.log("changed")}
                            onSubmit={e=>console.log("submitted")}
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
                            onChange={e => {console.log("changed")} }
                            onSubmit={e=>console.log("submitted")}
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
                            onChange={e => {console.log("changed")}}
                            onSubmit={e=> console.log("submitted")}
                            onError={e=> console.log("errors")}
                          />
                        ),
                      },
                    ]}
                  />
                }
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
          <br/>
          <br/>
          {
          !isSelectComponent ? "" :
          <Card>
            <CardHeader color="info">
              <h4 className={classes.cardTitleWhite}>Component Sample</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  { renderComponent(componentName) }
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        }

        </GridItem>
        {/* Select Component End */}

        

      </GridContainer>
      {/* Add Component End */}

      {/* Sort Component Start */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Home Page Component Container</h4>
            </CardHeader>
            <CardBody>
              {/* <HomePage></HomePage> */}
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="characters">
                  {(provided) => (
                      <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                        {characters.map(({id, name, thumb, type, componentName}, index) => {
                        // console.log(provided.placeholder);
                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  {type ==="sample" && <>
                                    {/* <div className="characters-thumb">
                                      <img src={thumb} alt={`${name} Thumb`} />
                                    </div> */}
                                    <p> { name } </p> </>
                                  }
                                  {type ==="component" && renderComponent(componentName)}
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
              <Button color="primary">Save</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      {/* Sort Component End */}
    </div>
  );
}
