import axios from "axios";
import swal from "sweetalert";

//baseurl
const apiRequests = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    Auth: "Bearer Token",
  },
});
// requests
apiRequests.interceptors.request.use(
  (config) => {
    // console.log("Config", config);
    return config;
  },
  (err) => {
    console.log("Err", err);
    return Promise.reject(err);
  }
);
//responses
apiRequests.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    const status = err.response.status;
    swal({
      title: `Dear ${userName} welcome to instagram :)`,
      text: "You clicked the button!",
      icon: "success",
      button: "ok!",
    });
    if (status === 403) {
      alert("err response 403", err);
    } else if (status === 429) {
      alert("err response 429", err);
      // Coding
    } else if (status === 404) {
      alert("err response 404", err);
      // Coding
    } else if (status === 401) {
      alert("err response 401", err);
      // Navigate to login page
    }

    return Promise.reject(err);
  }
);

export default apiRequests;
