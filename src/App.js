import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

// HashRouter -> http://localhost:3000/#/
// BrowserRouter -> http://localhost:3000/

// 누가 만들어놓은 Router 컴포넌트를 사용한다.
// Switch : route를 찾는다. 이떄 route는 그 페이지의 URL을 의미한다.
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:helloMyId" element={<Detail />} />
        <Route path="/" element={<Home />} />
        <Route path="/index.html" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// react-router-dom 버전5 -> 버전 6달라진 점
// - Switch 컴포넌트가 사라지고 Routes 컴포넌트로 대체
// - Route 컴포넌트 사이에 자식 컴포넌트를 넣지 않고, -> element prop에 자식 컴포넌트를 할당
// - HashRouter 사용했을 때, 경로가 겹치는 문제가 발생하여 BrowserRouter로 진행
// react-router-dom v6: https://reactrouter.com/docs/en/v6/getting-started/overview
