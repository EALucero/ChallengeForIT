import { Container } from "react-bootstrap";
import PropTypes from "prop-types";

export default function TaskLayout({ children }) {
  return (
    <main className="container h-56 bg-gray-800 border border-red-500 rounded-lg mx-auto m-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="m-5 md:w-2/3 lg:w-2/5">
        <h1 className="mb-5 text-xl">Challenge ForIT</h1>
        <Container className="p-2 w-full">{children}</Container>
      </div>
    </main>
  );
};

TaskLayout.propTypes = {
  children: PropTypes.node.isRequired,
}