import { Nav, Navbar, Row, Col, Card } from "react-bootstrap";
import "./App.css";
import Article from "./components/Article";

function App() {
  const { pathname } = window.location;
  const getPostId = () => {
    let result = /post\/(\d+)/.exec(pathname);
    return result ? result[1] : 0;
  };
  const id = getPostId();

  return (
    <div className="App">
      <header>
        <h2>
          <a href="/">React Blog</a>
        </h2>
        <Nav variant="pills" defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/" eventKey="/home" to="/">
              Главная
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/about" eventKey="/about" to="/about">
              Обо мне
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/profile" eventKey="/profile" to="/profile">
              Профиль
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      {pathname === "/" && (
        <Row>
          <Col xs={6}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150x150"
              />
              <Card.Body>
                <Card.Title>
                  <a href="/post/1">Card title 1</a>
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6}>
            <Card>
              <Card.Img
                variant="top"
                src="https://via.placeholder.com/150x150"
              />
              <Card.Body>
                <Card.Title>
                  <a href="/post/2">Card title 2</a>
                </Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
      {pathname === `/post/${id}` && <Article id={id} />}
      {pathname === "/about" && (
        <Card>
          <Card.Body>Это мой личный сайт!</Card.Body>
        </Card>
      )}
      <br />
      <Navbar bg="light" style={{ paddingLeft: 20 }}>
        <Navbar.Brand href="#home">My site (c) 2021</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
