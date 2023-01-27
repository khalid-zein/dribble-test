import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { axiosApi } from '../api/base';
import { PROJECTS } from '../api/endpoints';

function ProjectModal({show, toggleModal, activeProject , isEdit, listProjects}) {
  
  const [ name, setName] = useState('');
  const [ description, setDescription] = useState('');

  useEffect(() => {
    console.log(isEdit, activeProject);
    isEdit ? setName(activeProject?.name) : setName('')
    isEdit ? setDescription(activeProject?.description) : setDescription('')
  }, [isEdit, activeProject])

  const addProject = () => {
    const payload = {
       name,
       description
    }

    axiosApi.post(PROJECTS.add, payload).then(resp=>{
        toggleModal();
        listProjects()
    })
  }

  const editProject = () => {
    const payload = {
       name,
       description
    }

    axiosApi.put(PROJECTS.edit(activeProject?.id), payload).then(resp=>{
        toggleModal();
        listProjects()
    })
  }

  return (
    <>
      <Modal show={show} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add/Edit Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="formname">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name" />
            </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} placeholder="Enter description" onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary" onClick={() => isEdit ? editProject() :  addProject()}>
           {isEdit ? 'Edit' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ProjectModal;