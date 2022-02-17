import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducer from "./_reducers";

const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider
        store={createStoreWithMiddleware(
          Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
      >
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// props: 속성, component간 소통(부모 -> 자식), 자식은 부모에게 받은 속성을 변경할 수 없음. / state : 상태, component안에서 소통, 안에서 state 변경 가능, 변하면 리렌더링.
// redux : state 관리, 전역변수랑 비슷함, 변경은 dispatch와 action, 타고 올라가지 않고 direct로 소통 가능
// redux-thunk : dispatch한테 어떻게 function를 받는 방법 알려줌, dispatch한테 promise가 왔을 때 어떻게 대처해야 되는지 알려줌.



