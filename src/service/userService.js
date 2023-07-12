import { myAxios } from "./helper";

export const signUp = (user) => {
  return myAxios
    .post("/api/ccg1/register", user)
    .then((response) => {
      // Lấy dữ liệu từ response.data
      const responseData = response.data;
      console.log(responseData);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const login = (loginDetail) => {
  return myAxios
    .post('/api/ccg1/login', loginDetail)
    .then((response) => {
      // Lấy dữ liệu từ response.data
      const responseData = response.data;
      console.log(responseData);
    })
    .catch((error) => {
      console.error(error);
    });
};
