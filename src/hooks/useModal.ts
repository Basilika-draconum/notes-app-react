import { useState, useEffect } from "react";

const useModal = ({ styles }: { styles: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false) ;

  useEffect(() => {
    const modalWrapper = document.getElementById('modal');
    if (modalWrapper) {
      if (isModalOpen) {
        return modalWrapper.classList.add(styles);
      }
      modalWrapper.classList.remove(styles);
    }
  }, [isModalOpen, styles]);

  return { isModalOpen, setIsModalOpen };
};

export default useModal;
