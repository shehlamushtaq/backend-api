// import React from "react";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ListGroup, Row, Col, Button, Modal } from "react-bootstrap";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// const Posts = () => {
//   const history = useHistory();
//   return (
//     <div>
//       <h1>Posts page</h1>
//       <Row>
//         <Col className="text-center"> {msg}</Col>
//       </Row>
//       <Row>
//         <Col lg={3} md={2} sm={1} xs={1}></Col>
//         <Col lg={6} md={8} sm={10} xs={10}>
//           <ListGroup>
//             <ListGroup.Item variant="primary">
//               <Row className="col-headers">
//                 <Col lg={4} md={4} sm={4} xs={4}>
//                   Name
//                 </Col>
//                 <Col lg={4} md={4} sm={4} xs={4}>
//                   Post Title
//                 </Col>
//                 <Col lg={4} md={4} sm={4} xs={4}>
//                   Actions
//                 </Col>
//               </Row>
//             </ListGroup.Item>

//             {state.map((item, ind) => (
//               <ListGroup.Item key={ind} variant="light">
//                 <Row>
//                   <Col lg={4} md={4} sm={4} xs={4}>
//                     {item.name}
//                   </Col>
//                   <Col lg={4} md={4} sm={4} xs={4}>
//                     {item.email}
//                   </Col>
//                   <Col lg={4} md={4} sm={4} xs={4}>
//                     <Button
//                       variant="info"
//                       size="sm"
//                       as={Link}
//                       to={"/SingleUser/" + item._id}
//                     >
//                       View
//                     </Button>{" "}
//                     <Button
//                       variant="success"
//                       size="sm"
//                       onClick={() => DoEdit(item)}
//                     >
//                       Edit
//                     </Button>{" "}
//                     <Button
//                       variant="danger"
//                       size="sm"
//                       onClick={() => handleDelete(item._id)}
//                     >
//                       Delete
//                     </Button>
//                   </Col>
//                 </Row>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//         <Col lg={3} md={2} sm={1} xs={1}></Col>
//       </Row>
//     </div>
//   );
// };

// export default Posts;
