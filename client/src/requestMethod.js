import axios from "axios";
const BASE_URL = "http://localhost:5000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWFkZjNiYjIxMjA2ZGYwODE5MmJlMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NDI0NjM2OCwiZXhwIjoxNjQ0NTA1NTY4fQ.5M2YflFU_y04Nn3Rf2fUitPHtz1HIH7mjoSqW4vz-oI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
