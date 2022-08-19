import { Link } from "react-router-dom";
import notFoundImg from "../../images/notFound.png"
import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <section>
        <div className="container notFound__container">
        <div className="notFound__image">
        <img src={notFoundImg} alt="NotFound Image" />
        </div>
          <h2>Page Not Found</h2>
          <Link to="/" className="btn">Go Back Home</Link>
        </div>
      </section>
    </>
  )
}

export default NotFound
