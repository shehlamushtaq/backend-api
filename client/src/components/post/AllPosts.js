import React from "react";
import { Row, Col, ListGroup, Button } from "react-bootstrap";

const AllPosts = ({ posts, showNewPostWind, InitEditProcess }) => {
  return (
    <div className={showNewPostWind ? "d-none" : ""}>
      <Row>
        <Col className="text-center"> {/*/msg*/}</Col>
      </Row>
      <Row>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary">
              <Row className="col-headers">
                <Col lg={6} md={6} sm={6} xs={6}>
                  Title
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  Actions
                </Col>
              </Row>
            </ListGroup.Item>

            {posts.map((item, ind) => (
              <ListGroup.Item key={ind} variant="light">
                <Row>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    {item.title}
                  </Col>
                  <Col lg={6} md={6} sm={6} xs={6}>
                    <Button
                      variant="info"
                      size="sm"
                      // as={Link}
                      // to={"/SingleUser/" + item._id}
                    >
                      View
                    </Button>{" "}
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => InitEditProcess(item)}
                    >
                      Edit
                    </Button>{" "}
                    <Button
                      variant="danger"
                      size="sm"
                      // onClick={() => handleDelete(item._id)}
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
    </div>
  );
};

export default AllPosts;
