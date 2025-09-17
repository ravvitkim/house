import { useState } from "react";

function Room({ room }) {
  const image = `/images/room${room.id}.jpg`; // id를 사용해서 이미지 경로 생성
  const  [click, setClick] = useState(false);

  return (
    <div className="room-box">
      <h2>{room.title}</h2>
      <p>{room.content}</p>
      <p>가격 : {room.price}</p>
      <img src={image} width="80%" alt={room.title}  onClick={() => setClick(true)}/>
      {click && (
        <button
          className="close-button"
          onClick={() => setClick(false)}
        >
          닫기
        </button>
      )}
    </div>
  );
}

export default Room;
