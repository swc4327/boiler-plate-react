//hoc : 다른 컴포넌트를 받아서 새로운 컴포넌트 return
//auth(hoc)에서 backed에게 request 날려서 현재 사용자의 상태를 파악함. 로그인 되있는지 안되있는지
// 파악한 정보를 바탕으로 관리

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  // option
  //null - 아무나 출입이 가능한 페이지
  //true - 로그인한 유저만 출입이 가능한 페이지
  //false - 로그인한 유저는 출입 불가능한 페이지

  // adminRoute
  // 안쓰면 null

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        console.log("2");

        //로그인 하지 않은 상태
        if (!response.payload.isAuth) {
          if (option) {
            props.history.push("/login");
          }
        } else {
          //로그인한 상태
          if (adminRoute && !response.payload.isAdmin) {
            props.history.push("/");
          } else {
            if (option === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, []);
    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
