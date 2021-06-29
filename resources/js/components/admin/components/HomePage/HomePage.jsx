import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-dashboard-react/components/homePageStyle.js";

// import { Link } from "react-router-dom";

const finalSpaceCharacters = [
  {
    id: "gary1",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato1",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn1",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake1",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn1",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
  {
    id: "gary",
    name: "Gary Goodspeed",
    thumb: "/images/gary.png",
  },
  {
    id: "cato",
    name: "Little Cato",
    thumb: "/images/cato.png",
  },
  {
    id: "kvn",
    name: "KVN",
    thumb: "/images/kvn.png",
  },
  {
    id: "mooncake",
    name: "Mooncake",
    thumb: "/images/mooncake.png",
  },
  {
    id: "quinn",
    name: "Quinn Ergon",
    thumb: "/images/quinn.png",
  },
];

// const switchRoutes = (routes) => {
//   let result = "";
//   routes.map((prop, key) => {
//     if (prop.layout === "/admin") {
//       result = (
//         <Link key={key} to={prop.layout + prop.path}>
//           {prop.name}
//         </Link>
//       );
//     }
//   });
//   return result;
// };

const useStyles = makeStyles(styles);

const HomePage = (props) => {
  // const { routes } = props;
  const classes = useStyles();
  // console.log(routes);
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    // console.log(result);
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    updateCharacters(items);
    localStorage.setItem("dnd", JSON.stringify(characters));
  }

  return (
    <div className={classes.homePage}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ul
              className={classes.characters}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {characters.map(({ id, name }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                      <li
                        className={classes.character}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p> {name} </p>
                        {/* {switchRoutes(routes)} */}
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
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object),
};
