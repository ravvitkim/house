import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// Route : 페이지(컴포넌트) 이동 처리
// Routes : Route를 감싸는 용도
// Link : 실제로 페이지를 보여주는 역할, Link위치에 컴포넌트 뿌려줌
// userNavigate : 스크립트 영역에서 링크처리를 하는 훅
import { Link, useNavigate } from "react-router-dom";

function AppNavBar({ sortByPriceAsc, sortByPriceDesc, sortByNameAsc,sortByNameDesc }) {

  const navigate = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>land</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link onClick={() => { navigate('/') }}>Main</Nav.Link>
              <Nav.Link onClick={() => { navigate('/login') }}>Login</Nav.Link>
              <Nav.Link onClick={() => { navigate('/signUp') }}>signUp</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Navbar style={{ backgroundColor: 'purple' }} data-bs-theme="dark">
          <Container>
            <Nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
              <Navbar.Brand className="mx-2">처음처럼가격</Navbar.Brand>
              <Nav.Link onClick={sortByPriceAsc}>&#9651;</Nav.Link>
              <Nav.Link onClick={sortByPriceDesc}>&#9661;</Nav.Link>
              <Navbar.Brand className="mx-2">물건명</Navbar.Brand>
              <Nav.Link onClick={sortByNameAsc}>&#9651;</Nav.Link> {/* 오름차순 */}
              <Nav.Link onClick={sortByNameDesc}>&#9661;</Nav.Link> {/* 내림차순 */}
            </Nav>
          </Container>
        </Navbar>


      </div>
    </>
  )
}

export default AppNavBar;