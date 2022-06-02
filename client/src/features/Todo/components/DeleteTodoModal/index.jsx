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
  const { onPressDeleteTodo, myTodo } = props;
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Modal
        isOpen={location.state?.backgroundLocation ? true : false}
        onClose={() => navigate(-1)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>You want to delete?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Are you sure you want to delete this TODO?</ModalBody>

          <ModalFooter>
            <Button
              colorScheme='green'
              mr={3}
              onClick={() => onPressDeleteTodo(myTodo.id)}>
              Delete
            </Button>
            <Button variant='ghost'>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
