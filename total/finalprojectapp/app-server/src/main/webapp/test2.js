import { Modal, ModalBody, ModalHeader } from "reactstrap";

function MM() {
  React.createElement(
    Modal,
    { isOpen: open, toggle: function toggle() {
        return setOpen(false);
      } },
    React.createElement(
      ModalHeader,
      null,
      "Modal title"
    ),
    React.createElement(
      ModalBody,
      null,
      "Modal body text goes here."
    )
  );
}

export default "MM";