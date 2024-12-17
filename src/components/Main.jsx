import PropTypes from "prop-types";

function Main({ data }) {
  return (
    <div className="image-container">
      <img className="main__image" src={data.hdurl} alt="Astro-In-Space" />
    </div>
  );
}

Main.propTypes = {
  data: PropTypes.shape({
    hdurl: PropTypes.string.isRequired,
  }).isRequired,
};

export default Main;
