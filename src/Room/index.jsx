function Room({ room }) {
  const image = `/images/room${room.id}.jpg`; // id를 사용해서 이미지 경로 생성

  return (
    <>
      <h2>{room.title}</h2>
      <p>{room.content}</p>
      <p>가격 : {room.price}</p>
      <img src={image} width="80%" alt={room.title} />
    </>
  );
}

export default Room;
