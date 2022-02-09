import { publicRequest } from "../requestMethod";
import { loginFailure, logingSuccess, loginStart } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(logingSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
