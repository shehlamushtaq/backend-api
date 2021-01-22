import React from 'react'
import {Modal, Button } from 'react-bootstrap'
const DelModal = () => {
    return (
        <div>
            <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Confirmation</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Are you sure you want to delete the User</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Cancel</Button>
    <Button variant="primary">Yes</Button>
  </Modal.Footer>
</Modal.Dialog>
        </div>
    )
}

export default DelModal
