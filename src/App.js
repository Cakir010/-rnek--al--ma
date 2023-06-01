import { Card, Container } from "react-bootstrap";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div>
      <Container className="text-center">
        <Header/>
        <CardContainer/>
      </Container>
    </div>
  );
}

export default App;
