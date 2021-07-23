import React, { useEffect, useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Form from "@rjsf/material-ui";
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import swal from 'sweetalert';
import axios from "axios";
// homepage components
import CardBody from "../../components/Card/CardBody.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import CardFooter from "../../components/Card/CardFooter.js";
import Header from "../../../header";
import Banner from "../../../banner";
import About from '../../../about';
import Causes from '../../../causes';
import VideoSection from '../../../videoSection';
import Partners from '../../../partners';
import Volunteers from '../../../volunteers';
import JoinAsVolunteer from '../../../joinVolunteers';
import Testimonials from '../../../testimonials';
import Milestones from '../../../milestones';
import Gallery from '../../../gallery';
import Contact from '../../../contact';
// dynamic form
import systemComponent from "./SystemComponent";
import uiSchema from "./UiSchema";

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
  characters: {
    position: 'relative',
    width: "100%",
    listStyle: "none",
    paddingLeft: "0",
  },
  exampleWrapper: {
    position: 'relative',
    zIndex: '999',
  },
  speedDial: {
    position: 'absolute',
    top: '20px',
    right: '20px',
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
    // case 'Header': 
    //   return <Header {...props} preview={true}/>
    case 'Banner': 
      return <Banner {...props}/>
    case 'Gallery':
      return <Gallery {...props}/>
    case 'Contact':
      return <Contact {...props}/>
    return ''
  }
}

const actions = [
  { icon: <EditIcon />, name: 'Edit' },
  { icon: <VisibilityOffIcon />, name: 'Hide' },
  { icon: <VisibilityIcon />, name: 'Show' },
  { icon: <DeleteIcon />, name: 'Delete' },
];

const HomePage = () => {
  const [isSelectComponent, setIsSelectComponent] = useState(false);
  const classes = useStyles();
  const [componentName, setComponentName] = useState(null);
  const [selectedComponent, updateSelectedComponent] = useState({});
  const [listSelectedComponent, updateListSelectedComponent] = useState([]);
  const [currentFormData, updateCurrentFormData] = useState({});
  const [updateIndex, setUpdateIndex] = useState(null);

  const [open, setOpen] = React.useState(false);

  // handle edit, hide, show, remove component
  const handleComponent = (option, value, existingData = {}, currentIndex = null) => {
    console.log(existingData);
    switch(option) {
      case 'Edit':
        setComponentName(value);
        updateSelectedComponent(systemComponent[value]);
        updateCurrentFormData(existingData);
        setUpdateIndex(currentIndex);

        if(value) {
          setIsSelectComponent(true);
        }
        else {
          setIsSelectComponent(false);
        }
        break;
      case 'Hide':
        listSelectedComponent[currentIndex].show = false;
        break;
      case 'Show':
        listSelectedComponent[currentIndex].show = true;
        break;
      case 'Delete':
        listSelectedComponent.splice(currentIndex, 1);
        break;
    } 
  }

  // handle call api get data from database
  const fetchData = () => {
    axios.get('/api/landing-page').then(res => {
      updateListSelectedComponent(res.data.components);
    })
  }
  
  // handle get dynamic form 
  const handleOnChange = (e) => {
    const value = e.target.value;

    updateCurrentFormData({});
    setComponentName(value);
    updateSelectedComponent(systemComponent[value]);

    if (value) {
        setIsSelectComponent(true);
    } else {
        setIsSelectComponent(false);
    }
  };

  // handle DnD to sort component
  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = [...listSelectedComponent]
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateListSelectedComponent(items);
  }

  // handle onChange to get data from dynamic form
  const onChangeFormdata = async (data) => {
    updateCurrentFormData(data.formData);
    console.log(data.formData);
  }

  // handle add && update component
  const onSubmitForm = async (data) => {
    if (updateIndex === null) {
      // check name component 
      const componentTerm = listSelectedComponent.find(component => component.componentParams.title.toLowerCase() === data.formData.title.toLowerCase());

      if(!componentTerm) {
        listSelectedComponent.push({
          name: componentName,
          show: true,
          componentParams: data.formData
        });
        swal({
          title: 'Add component successfully!',
          icon: "success",
        });
        setIsSelectComponent(false);
        setComponentName(null);
        updateSelectedComponent({});
        updateCurrentFormData({});
        setUpdateIndex(null);
      }
      else {
        swal({
          title: 'Title already exists, try another title!',
          icon: "warning",
        });
      }
    } else {
      const componentTerm = listSelectedComponent.find((component, index) => (
                              component.componentParams.title.toLowerCase() === data.formData.title.toLowerCase()
                              && index !== updateIndex
                            ));

      // update data component
      if(!componentTerm) {
        let existing = listSelectedComponent[updateIndex];
        existing.name = componentName;
        existing.componentParams = data.formData;
        swal({
          title: 'Update component successfully!',
          icon: "success",
        });
        setIsSelectComponent(false);
        setComponentName(null);
        updateSelectedComponent({});
        updateCurrentFormData({});
        setUpdateIndex(null);
      }
      // no update component
      else {
        swal({
          title: 'Title already exists, try another title!',
          icon: "warning",
        });
      }
    }

    updateListSelectedComponent([...listSelectedComponent]);
  }

  // handle save list selected component to database
  const onSaveLandingPage = async () => {
    try {
        const res = await axios({
            method: 'put',
            url: `/api/landing-page/${listSelectedComponent.id}`,
            data: {
              name: 'home-page',
              url: 'home-page',
              description: 'home-page',
              title: 'home-page',
              meta: 'home-page',
              components: listSelectedComponent
            }
        });

        if(res.status === 200) {
          swal({
            title: "Saved!",
            icon: "success",
          });
        }
        else {
          swal({
            title: "Something went wrong, try again!",
            icon: "warning",
          });
        }
    } catch( $e ) {

    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <GridContainer>
        {/* Select Component Start */}
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Select Component Sample</h4>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-controlled-open-select-label">Select Component Type</InputLabel>
                    <Select
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      onChange={handleOnChange}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {Object.keys(systemComponent).map(item => 
                       <MenuItem key={item} value={item}>{systemComponent[item].title}</MenuItem>
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
                              onChange={onChangeFormdata}
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
                              onChange={onChangeFormdata}
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
                              onChange={onChangeFormdata}
                              onSubmit={onSubmitForm}
                              onError={e => console.log("errors")}
                            />
                          ),
                        },
                      ]}
                    />
                  }
                  {!isSelectComponent ? "" : (
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="info">
                                <h4 className={classes.cardTitleWhite}>
                                    Preview Component
                                </h4>
                            </CardHeader>
                            <CardBody>
                                {renderComponent(componentName , currentFormData)}
                            </CardBody>
                        </Card>
                      </GridItem>
                    </GridContainer>
                  )}
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
                      <ul className={classes.characters} {...provided.droppableProps} ref={provided.innerRef}>
                        {listSelectedComponent.map((item, index) => {
                          return (
                            <Draggable key={`${item.name}_${index}`} draggableId={`${item.name}_${index}`} index={index}>
                              {(provided) => (
                                <Card>
                                    <div className={classes.exampleWrapper}>
                                      <SpeedDial
                                        ariaLabel="SpeedDial example"
                                        className={classes.speedDial}
                                        icon={<SpeedDialIcon />}
                                        onClose={() => {setOpen(false)}}
                                        onOpen={() => {setOpen(true)}}
                                        open={open}
                                        direction='down'
                                      >
                                      {actions.map(action => {
                                        if(action.name === 'Hide' && !item.show) {
                                          return '';
                                        }
                                        else if(action.name === 'Show' && item.show) {
                                          return '';
                                        }
                                        else {
                                          return (
                                            <SpeedDialAction
                                              key={action.name}
                                              icon={action.icon}
                                              tooltipTitle={action.name}
                                              onClick={() => handleComponent(action.name, item.name, item.componentParams, index)}
                                            />
                                          )
                                        }
                                      })}
                                      </SpeedDial>
                                    </div>
                                  <li 
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                  >
                                    {renderComponent(item.name, item.componentParams)}
                                  </li>
                                </Card>
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

export default HomePage;