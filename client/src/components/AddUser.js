import React, { useState } from "react";
import { ListGroup, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const history = useHistory();
  const handleSubmit = () => {
    let user = { name, email, pwd };

    axios
      .post("http://localhost:5000/api/users/", user)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err, "error"));
  };
  return (
    <div>
      <h1>Add user</h1>
      <Row>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
              New User information
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col className="col-headers">Name</Col>
                <Col>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Email</Col>
                <Col>
                  <input
                    type="text"
                    email="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Password</Col>
                <Col>
                  <input
                    type="password"
                    name="pwd"
                    onChange={(e) => setPwd(e.target.value)}
                  />
                </Col>
              </Row>
              {/* //========================================== */}
              <Row>
                <Col>
                  <Button variant="primary" size="sm" onClick={handleSubmit}>
                    Add User
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </div>
  );
};

export default AddUser;

//===============================================================================================================

// import React, { useState } from "react";
// import { Button, ListGroup, Row, Col } from "react-bootstrap";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// function Add() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [pwd, setPwd] = useState("");

//   const history = useHistory();

//   const handleSubmit = () => {
//     //console.log("called", name);
//     let user = { name, email, pwd };

//     //console.log(JSON.stringify(user));
//     axios
//       .post("http://localhost:4000/api/users/", user)
//       .then((res) => {
//         //console.log(res.data);
//         history.push("/users");
//       })
//       .catch((err) => console.log(err, "error"));

//     //window.location = "/users";
//   };
//   return (
//     <form /*onSubmit={handleSubmit}*/>
//       <Row className="mt-5">
//         <Col lg={3} md={2} sm={1} xs={1}></Col>
//         <Col lg={6} md={8} sm={10} xs={10}>
//           <ListGroup>
//             <ListGroup.Item variant="primary" className="col-headers">
//               Register New User
//             </ListGroup.Item>
//             <ListGroup.Item variant="light">
//               <Row>
//                 <Col className="col-headers">Name</Col>
//                 <Col>
//                   <input
//                     type="text"
//                     name="name"
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col className="col-headers">Email</Col>
//                 <Col>
//                   <input
//                     type="text"
//                     name="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Row>
//                 <Col className="col-headers">Password</Col>
//                 <Col>
//                   <input
//                     type="password"
//                     name="pwd"
//                     onChange={(e) => setPwd(e.target.value)}
//                   />
//                 </Col>
//               </Row>
//               <Row className="my-2">
//                 <Col className="text-center">
//                   <Button variant="info" size="md" onClick={handleSubmit}>
//                     Register User
//                   </Button>
//                 </Col>
//               </Row>
//             </ListGroup.Item>
//           </ListGroup>
//         </Col>
//         <Col lg={3} md={2} sm={1} xs={1}></Col>
//       </Row>
//     </form>
//   );
// }

// export default Add;
