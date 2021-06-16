import Particles from './land/Particles'
import { Container, Row, Col } from 'react-bootstrap'
import "./App.css"
import { useContext } from "react";
import DotRing from "./components/DotRing/DotRing";
import { MouseContext } from "./context/mouse-context";

const App = (props) => {

  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <Container>
      <DotRing />
      <Row>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "#92B1B6",
          }}
        >
          <Particles />
          <Col>
            <div
              style={{
                position: "absolute",
                top: 290,
                left: 100,
                width: "100%",
                height: "100%",
                bottom: 20

              }}
            >
              <h2>Hi, </h2>
              <h1>I'm Rohini </h1>
              <div onMouseEnter={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")}
              >
                <button> Learn more..</button>
              </div>
            </div>
          </Col>
        </div>
      </Row>
    </Container>

  );
}

export default App;
