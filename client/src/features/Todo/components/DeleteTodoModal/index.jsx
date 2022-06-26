import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DeleteTodoModal(props) {
  const { handleDeleteTodo, myTodo } = props;
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Modal
        isOpen={location.state?.backgroundLocation ? true : false}
        isCentered
        onClose={() => navigate(-1)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You want to delete?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure to delete {myTodo.title}?</ModalBody>

          <ModalFooter key={myTodo.id}>
            <Button
              colorScheme='green'
              mr={3}
              onClick={() => handleDeleteTodo(myTodo.id)}>
              Delete
            </Button>
            <Button variant='ghost' onClick={() => navigate(-1)}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
