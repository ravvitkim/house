// import { useState } from "react";
// import Button from 'react-bootstrap/Button';

// function Room({ room }) {
//   const image = `/images/room${room.id}.jpg`; 

//  return (
//     <div className="room-box">
//       <h2>{room.title}</h2>
//       {click && (
//         <div className="modal-overlay" onClick={() => setClick(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <p>{room.content}</p>
//             <p>가격 : {room.price}</p>
//             <Button variant="outline-info"onClick={() => setClick(false)} >닫기</Button>
//           </div>
//         </div>
//       )}
//       <img
//         src={image}
//         width="80%"
//         alt={room.title}
//         onClick={() => setClick(true)}
//         style={{ cursor: 'pointer' }}
//       />
//     </div>
//   );
// }

// export default Room;
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function Room({ room }) {
  const image = ` 
  /images/room${room.id}.jpg`;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="room-box">
      <h2>{room.title}</h2>

      <img
        src={image}
        width="80%"
        alt={room.title}
        onClick={handleShow}
        style={{ cursor: "pointer" }}
      />

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{room.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{room.content}</p>
          <p>가격: {room.price}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-info" onClick={handleClose}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Room;

