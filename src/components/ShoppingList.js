import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);

    this.createItem = this.createItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/items")
      .then((res) => {
        this.setState({
          items: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  createItem(name) {
    axios
      .post("http://localhost:5000/api/items", { name })
      .then((res) => {
        this.setState((state) => ({
          items: [{ _id: res.data._id, name: res.data.name }, ...state.items],
        }));
      })
      .catch((err) => console.log(err));
  }

  removeItem(id) {
    this.setState((state) => ({
      items: state.items.filter((item) => item._id !== id),
    }));
    axios
      .delete(`http://localhost:5000/api/items/${id}`)
      .then((res) => console.log("removed", res.data))
      .catch((err) => console.error("ERROR: ", err));
  }

  render() {
    const { items } = this.state;
    return (
      <Container>
        <Button
          color="dark"
          marginBottom="2rem"
          onClick={() => {
            const name = prompt("your name: ");
            if (name) {
              this.createItem(name);
            }
          }}
        >
          {" "}
          Add Item{" "}
        </Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.removeItem(_id);
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

export default ShoppingList;
