import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); //버튼 누를때 마다 화면 refresh 되는거 막기

    let body = {
      email: Email,
      password: Password,
    };

    // dispatch로 actions.user_action (여기서 서버 request, response), 결과(request)를 리듀서로 보냄.
    // reducer가 상태 변경해서 return

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />

        <button>Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
