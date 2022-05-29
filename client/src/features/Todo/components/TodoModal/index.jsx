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

export default function TodoModal(props) {
  const { modalBody } = props;
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Modal
        isOpen={location.state?.backgroundLocation ? true : false}
        onClose={() => navigate(-1)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create TODO Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{modalBody}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
