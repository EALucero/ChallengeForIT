import { Form, Row, Col, Alert } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTask } from "../hooks/useTask";

export default function TaskForm() {
  const { getTask } = useTask();

  const initialValues = {
    title: "",
    description: "",
  }

  const validationSchema = Yup.object({
    title: Yup.string().required("El título es obligatorio"),
    description: Yup.string().required("La descripción es obligatoria")
  })

  const handleSubmit = (values) => {
    getTask(values);
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {
        (formik) => (
          <Form onSubmit={formik.handleSubmit} className="mt-16">
            {
              formik.status && (
                <Alert variant="danger" className="text-danger">
                  {formik.status}
                </Alert>
              )
            }

            <Row>
              <Col md={6}>
                <Form.Group className="lg:flex justify-between mb-3">
                  <Form.Label htmlFor="name">Título</Form.Label>
                  <div className="flex flex-col lg:w-2/3">
                    <Field
                      id="title"
                      type="text"
                      name="title"
                      className="text-black"
                      as={Form.Control}
                    />
                    <ErrorMessage
                      name="title"
                      component={Form.Text}
                      className="text-yellow-400"
                    />
                  </div>  
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="lg:flex justify-between mb-3">
                  <Form.Label htmlFor="name">Descripción</Form.Label>
                  <div className="flex flex-col lg:w-2/3">
                    <Field
                      id="description"
                      type="text"
                      name="description"
                      className="text-black h-16"
                      as={Form.Control}
                    />
                    <ErrorMessage
                      name="description"
                      component={Form.Text}
                      className="text-yellow-400"
                    />
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Row className="justify-content-end">
              <Col md={3}>
                <button
                  className="btn btn-danger text-uppercase w-100"
                  type="submit"
                >
                  Enviar
                </button>
              </Col>
            </Row>

          </Form>
        )
      }
    </Formik>
  )
}