import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Markup } from 'interweave';
import { useSelector } from "react-redux";

const ModalNotice = ({show, handleClose}) => {

    const { getReducer } = useSelector((state) => state);
    console.log("en el modal", getReducer.article);

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{getReducer.article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body><Markup content={getReducer.article.content} /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalNotice;
