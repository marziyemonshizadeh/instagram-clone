import { useNavigate } from "react-router-dom";
// import "./notFound.css";
const notFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center">
      <div className="row mx-auto my-5">
        <div className="col-12 col-md-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/568/886/non_2x/website-page-not-found-error-404-worried-robot-character-with-magnifying-glass-in-hand-site-crash-on-technical-work-eps-web-design-template-with-chatbot-mascot-cartoon-online-bot-assistance-failure-vector.jpg"
            alt="image"
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-6 lh-lg mt-md-5">
          <h1 className="fs-1 fw-bold m-4" style={{ color: "#50C9D3" }}>
            Oops!
          </h1>
          <h3>404-PAGE NOT found</h3>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporaily unavailable.
          </p>

          <button
            type="button"
            className="btn btn-light m-3"
            onClick={() => navigate("/main")}
          >
            Go to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default notFound;
