import {
  // Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  //ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function DetailTodoModal(props) {
  const { myTodo } = props;
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Modal
        isOpen={location.state?.backgroundLocation ? true : false}
        blockScrollOnMount={false}
        isCentered
        onClose={() => navigate(-1)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{myTodo.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{myTodo.description}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
