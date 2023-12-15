import useUploadModal from "../hooks/useUploadModal";

import Modal from './Modal';

const UploadModal = () => {
  const uploadModal = useUploadModal();
  const onChange = (open: boolean) => {
    if (!open) {
      //Reset the form
      uploadModal.onClose();
    }
  };
  return (
    <Modal
      title="Add to s ong"
      description="Upload and mp3 file"
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      Form
    </Modal>
  );
};
export default UploadModal;
