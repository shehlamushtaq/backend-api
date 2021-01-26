import React from "react";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
import axios from "axios";
import EditUser from "./EditUser";
import { useHistory } from "react-router-dom";
// import DelModal from "./DelModal";

const AllUsers = () => {
  const history = useHistory();

  const [state, setstate] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const [reload, setReload] = useState(false);
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  //================================================================show all users
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/")
      .then((res) => {
        console.log(res.data.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
  }, [reload]);

  //const handleClose = () => setShow(false);

  const inithandleDelete = (obj) => {
    setSelectedUser(obj);
    setShow(true);
  };

  //const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //===============================================================Delete User

  //const [msg, setMsg] = useState("");

  const handleDelete = (id) => {
    console.log(id);
    axios
      .delete("http://localhost:5000/api/users/" + id)
      .then((res) => {
        console.log(res.data);
        setMsg(`${id} is deleted`);
        setReload(!reload);

        setShow(false);

        setTimeout(() => setMsg(""), 5000);
      })

      .catch((e) => console.log(e));
  };

  //================================================================show all users
  /*
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/users/")
      .then((res) => {
        console.log(res.data.data);
        setstate(res.data.data);
      })
      .catch((e) => console.log(e));
      
  }, [reload]);
*/
  //====================================================================edit user
  const DoEdit = (obj) => {
    setSelectedUser(obj);
    setShowEdit(true);
  };

  const EditUserData = (obj) => {
    const newObj = {
      ...selectedUser,
      ...obj,
    };
    axios
      .post("http://localhost:5000/api/users/edit", newObj)
      .then((res) => {
        console.log(res);
        setShowEdit(false);
        setSelectedUser({});
        setReload(!reload);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h3>all users</h3>
      <Row>
        <Col className="text-center">
          <h5>{msg}</h5>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary">
              <Row className="col-headers">
                <Col lg={4} md={4} sm={4} xs={4}>
                  Name
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  Email
                </Col>
                <Col lg={4} md={4} sm={4} xs={4}>
                  Actions
                </Col>
              </Row>
            </ListGroup.Item>

            {state.map((item, ind) => (
              <ListGroup.Item key={ind} variant="light">
                <Row>
                  <Col lg={4} md={4} sm={4} xs={4}>
                    {item.name}
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={4}>
                    {item.email}
                  </Col>
                  <Col lg={4} md={4} sm={4} xs={4}>
                    <Button
                      variant="info"
                      size="sm"
                      as={Link}
                      to={"/SingleUser/" + item._id}
                    >
                      View
                    </Button>{" "}
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => DoEdit(item)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => inithandleDelete(item)}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
      {/* ===================================================================================modal for editing */}
      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <EditUser userObj={selectedUser} EditUserData={EditUserData} />
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="primary" onClick={() => {}}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        {/* //======================================================deletion confirmation modale */}
      </Modal>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation to Delete</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Are you sure you want to Delete</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => handleDelete(selectedUser._id)}
          >
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}; 
{/* //====================================================model of delete */}
{/* <Modal show={show} onHide={() => setShow(false)}>
<Modal.Header closeButton>
  <Modal.Title>Confirmation of deletion</Modal.Title>
</Modal.Header>

<Modal.Body>
  Are you sure you want to delete
</Modal.Body>

<Modal.Footer>
  <Button variant="primary" onClick={() => {handleDelete}}>
    yes
  </Button>
  <Button variant="primary">cancel</Button>
</Modal.Footer>
</Modal>
</div>
);
};
//====================================================model of delete */}




export default AllUsers;
