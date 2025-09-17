import { Container, Row, Col } from 'react-bootstrap';
import Room from "../Room";
import './MainPage.css'




function MainPage({ room }) {

  return (
    <>
      <Container>
        {
          room.map(room => (
            <Row key={room.id} className="text-center" style={{margin:'100px auto'}}>
              <Col>
                <Room room={room} />
              </Col>
            </Row>
          ))
        }
      </Container>
    </>
  )
}
export default MainPage; 
