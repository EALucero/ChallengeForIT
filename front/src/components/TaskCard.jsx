import { Col, Card, Button } from "react-bootstrap";
import { useTask } from "../hooks/useTask";
import PropTypes from 'prop-types';

export default function TaskCard({ task }) {
  const { handleTaskIdClick } = useTask()

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{task.title}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
          <Button
            variant="warning"
            className="w-100 text-uppercase mt-2"
            onClick={
              () => {
                handleTaskIdClick(task.id)
              }
            }
          >
            Editar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
};