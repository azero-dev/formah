import PropTypes from "prop-types";
import Modal from "react-modal";
import ReactPlayer from "react-player/youtube";
import "../styles/ModalComp.css";

function ModalComp({ isOpen, toggleModal }) {
  return (
    <Modal isOpen={isOpen} className={"modal-body"}>
      <button
        onClick={() => {
          toggleModal();
        }}
      >
        Close
      </button>
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/embed/k4v6SR0IHG4"
          width="100%"
          height="100%"
          controls={true}
          light={true}
          config={{
            youtube: {
              playerVars: { rel: 0 },
            },
          }}
        />
      </div>
      <div className="modal-info">
        <a href="mailto:i.formah@gmail.com">Contact me</a>
        <span> - </span>
        <a href="https://www.instagram.com/no.formah"> Find me</a>
      </div>
    </Modal>
  );
}

// Props validation
ModalComp.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ModalComp;