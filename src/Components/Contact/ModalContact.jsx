import { Modal } from "@mui/material";
import React from "react";

export default function ModalContact({ isModalOpen, setIsModalOpen }) {
  return (
    <Modal
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
    >
      <div className="bg-white p-6 rounded-lg text-center">
        <h2 id="modal-title" className="text-2xl font-bold mb-4">Sent!</h2>
        <p id="modal-description">Your message has been sent successfully.</p>
        <button
          onClick={() => setIsModalOpen(false)}
          className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
