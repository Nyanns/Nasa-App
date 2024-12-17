import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Import ikon yang spesifik
import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function SideBar({ handleToggleModal, data }) {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "100%", opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 60,
        damping: 12,
        duration: 0.3, // Durasi masuk
      }}
    >
      <motion.div
        className="bgOverlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        exit={{
          opacity: 0, // Efek menghilang
          transition: {
            duration: 0.15, // Durasi lebih cepat saat keluar
            ease: "easeInOut",
          },
        }}
      ></motion.div>
      <div className="bgOverlay"></div>
      <div className="sidebar__content">
        <h2 className="sidebar__title">{data.title}</h2>
        <div className="sidebar__description">
          <p className="sidebar__descriptionTitle">Description</p>
          <p className="sidebar__text">{data.explanation}</p>
        </div>
        <button onClick={handleToggleModal} className="sidebar__faArrowRight">
          <FontAwesomeIcon icon={faArrowRight} fade />
        </button>
      </div>
    </motion.div>
  );
}

SideBar.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired, // 'data.title' harus berupa string dan wajib
    explanation: PropTypes.string.isRequired,
  }).isRequired, // 'data' wajib dioper sebagai objek // toggleSidebar harus berupa fungsi dan wajib
};
