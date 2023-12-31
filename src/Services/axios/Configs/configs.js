import axios from "axios";

//baseurl
const apiRequests = axios.create({
  // baseURL: " http://localhost:3001",
  // liara => https://jsonserver-instagram-clone.iran.liara.run/
  baseURL: "https://deploy-instagram-clone-json-server.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    Auth: "Bearer Token",
  },
});
// requests
apiRequests.interceptors.request.use(
  (config) => {
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
