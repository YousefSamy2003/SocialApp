import axios from "axios";
export async function sendSignUpRequest(dataForm) {
  let { data } = await axios.post(
    "https://linked-posts.routemisr.com/users/signup",
    dataForm,
  );
  return data;
}
