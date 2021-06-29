import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";
// import Input from "@material-ui/core/Input";

import avatar from "../../assets/img/faces/marc.jpg";

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
};

const vietnamese = (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <CustomInput
        labelText="Image"
        id="company-disabled"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <CustomInput
        labelText="Title"
        id="title"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <InputLabel style={{ color: "#AAAAAA" }}>Content</InputLabel>
      <CustomInput
        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
        id="about-me"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          multiline: true,
          rows: 5,
        }}
      />
    </GridItem>
  </GridContainer>
);

const english = (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <CustomInput
        labelText="Image"
        id="company-disabled"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <CustomInput
        labelText="Title"
        id="title"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <InputLabel style={{ color: "#AAAAAA" }}>Content</InputLabel>
      <CustomInput
        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
        id="about-me"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          multiline: true,
          rows: 5,
        }}
      />
    </GridItem>
  </GridContainer>
);

const Français = (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <CustomInput
        labelText="Image"
        id="company-disabled"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <CustomInput
        labelText="Title"
        id="title"
        formControlProps={{
          fullWidth: true,
        }}
      />
    </GridItem>
    <GridItem xs={12} sm={12} md={12}>
      <InputLabel style={{ color: "#AAAAAA" }}>Content</InputLabel>
      <CustomInput
        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
        id="about-me"
        formControlProps={{
          fullWidth: true,
        }}
        inputProps={{
          multiline: true,
          rows: 5,
        }}
      />
    </GridItem>
  </GridContainer>
);

const useStyles = makeStyles(styles);

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CustomTabs
              title="Language:"
              headerColor="success"
              tabs={[
                {
                  tabName: "Vietnamese",
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0, 3]}
                      tasksIndexes={[0, 1, 2, 3]}
                      tasks={vietnamese}
                    />
                  ),
                },
                {
                  tabName: "English",
                  tabContent: (
                    <Tasks
                      checkedIndexes={[0]}
                      tasksIndexes={[0, 1]}
                      tasks={english}
                    />
                  ),
                },
                {
                  tabName: "Français",
                  tabContent: (
                    <Tasks
                      checkedIndexes={[1]}
                      tasksIndexes={[0, 1, 2]}
                      tasks={Français}
                    />
                  ),
                },
              ]}
            />
            <CardFooter>
              <Button color="primary">Save</Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default Banner;
