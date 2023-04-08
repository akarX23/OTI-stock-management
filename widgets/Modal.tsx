import { ReactNode } from 'react';
import { MdClose } from 'react-icons/md';

type ModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  onFinish?: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  onFinish,
  children,
}) => {
  const handleFinish = () => {
    if (onFinish) onFinish();
    onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-40 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        } transition-opacity duration-300`}
      >
        <div
          className="fixed inset-0 bg-gray-900 opacity-50"
          onClick={onClose}
          style={{ transition: 'opacity 0.3s ease-in-out' }}
        />
        <div
          className={`fixed z-50 transform rounded-md bg-white p-4 shadow-lg transition-all duration-300 ${
            isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}
          style={{
            top: '50%',
            left: '50%',
            transform: isOpen
              ? 'translate(-50%, -50%)'
              : 'translate(-50%, -150%)',
          }}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <MdClose size={24} />
            </button>
          </div>
          {children}
          <div className="mt-4 flex justify-end">
            <button
              className="mr-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
              onClick={handleFinish}
            >
              Finish
            </button>
            <button
              className="rounded-md bg-gray-400 px-4 py-2 text-gray-800 hover:bg-gray-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
