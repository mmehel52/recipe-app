import ListGroup from "react-bootstrap/ListGroup";
import Nav from "../../components/navbar/Nav";
const About = () => {
  return (
    <article className="container p-3">
      <Nav />
      <div className="row text-center d-flex justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <i className="fas fa-globe-americas fa-2x"></i>
          <h4>About Software Developer MM</h4>

          <ListGroup variant="flush">
            <ListGroup.Item>I'm Mustafa.</ListGroup.Item>
            <ListGroup.Item>
              I'm currently learning Full-Stack Development Languages.
            </ListGroup.Item>
            <ListGroup.Item>
              I've already known JS,ReactJS,ReactNative,NodeJS,SQL,Phyton,AWS
              Services
            </ListGroup.Item>
            <ListGroup.Item>Send email mehelx5207@gmail.com</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </article>
  );
};

export default About;
