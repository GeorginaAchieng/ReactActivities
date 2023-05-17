import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function TodoApp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control value={TodoApp} type="text" placeholder="Add description" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Add Todo Item:</Form.Label>
        <Form.Control as="textarea" placeholder="Add Todo item...." rows={3} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Add item
      </Button>
    </Form>
  );
}

export default TodoApp;