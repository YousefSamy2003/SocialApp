import axios from "axios";
export async function sendLoginRequest(dataForm) {
  let { data } = await axios.post(
    "https://linked-posts.routemisr.com/users/signin",
    dataForm,
  );
  return data;
}
