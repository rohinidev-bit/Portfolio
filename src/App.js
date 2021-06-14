import Particles from './land/Particles'
import { BrowserRouter as Router } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap'
import "./App.css"
import { useContext } from "react";
import DotRing from "./components/DotRing/DotRing";
import { MouseContext } from "./context/mouse-context";

function App() {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  return (
    <Router>
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
            <Col md="auto">
              <Particles />
            </Col>
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
    </Router>
  );
}

export default App;
