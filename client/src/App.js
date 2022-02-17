import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Switch : react-router-dom 5.3.0
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <hr />

        <Switch>
          <Route exact path="/" component={LandingPage} />
        
          <Route exact path="/login" component={LoginPage} />
          
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


// client, server port 번호가 다르므로 cors 이슈 발생 -> Proxy
// 유저와 인터넷 사이에 Proxy Server / 방화벽 기능 / 웹 필터 기능 / 캐쉬 데이터, 공유 데이터 제공 기능
// 회사에서 직원들이나 집안에서 아이들 인터넷 사용 제어/ 캐쉬 이용해 더 빠른 인터넷 / 더 나은 보안 / 이용 제한된 사이트 접근 가능


// React Component는 두가지 1. Class Component 2. Functional Component
// Class Component 더 많은 기능 사용할 수 있지만 코드 복잡해지고 성능 느림
// Functional Component 제공하는 기능이 한정적이지만 코드 짧고 성능 좋음
// Functional Component + React Hook(Class Component에서 제공하는 기능들 다 가능해짐) -> 이거 씀.

// useEffect : 빈배열 -> 처음 렌더링 될때 한번, 생략 -> 리렌더링 될 때마다, 배열 -> 특정 조건이 업데이트 될 때마다