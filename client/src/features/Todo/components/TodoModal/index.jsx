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
  const { modalBody, modalTitle } = props;
  let location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Modal
        isOpen={location.state?.backgroundLocation ? true : false}
        onClose={() => navigate(-1)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>{modalBody}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
