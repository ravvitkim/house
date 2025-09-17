import { useState } from 'react'
import AppNavBar from './AppNavBar'
import MainPage from './MainPage'
import data from './oneroom/oneroom.js'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [room, setRoom] = useState(data)

  // 가격 오름차순 정렬 함수
  const sortByPriceAsc = () => {
    const sorted = [...room].sort((a, b) => a.price - b.price)
    setRoom(sorted)
  }

  // 가격 내림차순 정렬 함수
  const sortByPriceDesc = () => {
    const sorted = [...room].sort((a, b) => b.price - a.price)
    setRoom(sorted)
  }

  //이름 내림차순 정렬함수
 const sortByNameAsc = () => {
  const sorted = [...room].sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  });
  setRoom(sorted);
};
  //이름 오름차순 정렬함수
  const sortByNameDesc = () => {
  const sorted = [...room].sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
    return 0;
  });
  setRoom(sorted);
};

  return (
    <>
      <AppNavBar
        sortByPriceAsc={sortByPriceAsc}
        sortByPriceDesc={sortByPriceDesc}
        sortByNameAsc={sortByNameAsc}
        sortByNameDesc={sortByNameDesc}
      />
      <Routes>
        <Route path="/" element={<MainPage room={room} />} />
        <Route path="*" element={<div>Page Not Found 404 Error</div>} />
      </Routes>
    </>
  )
}

export default App
