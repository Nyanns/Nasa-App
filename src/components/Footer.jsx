import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"; // Import ikon yang spesifik
import PropTypes from "prop-types";

export default function Footer({ handleToggleModal, data }) {
  return (
    <footer className="footer">
      <div className="bgGradient"></div>
      <div className="footer__content">
        <h2 className="footer__subtitle">{data.title}</h2>
        <h1 className="footer__title">APOD PROJECT</h1>
      </div>
      <button className="footer__button" onClick={handleToggleModal}>
        <FontAwesomeIcon icon={faCircleInfo} flip size="2xl" />
      </button>
    </footer>
  );
}

// Validasi Props
Footer.propTypes = {
  handleToggleModal: PropTypes.func.isRequired, // 'handleToggleModal' harus berupa fungsi dan wajib
  data: PropTypes.shape({
    title: PropTypes.string.isRequired, // 'data.title' harus berupa string dan wajib
  }).isRequired, // 'data' wajib dioper sebagai objek
};
