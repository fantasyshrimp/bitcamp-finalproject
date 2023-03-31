import { Form, Button } from "react-bootstrap";

function Searchs() {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 bg-dark text-light"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
}

export default Searchs;
