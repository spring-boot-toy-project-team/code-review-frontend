import React, { useEffect } from 'react';

const useClickOutsie = (
  show: boolean,
  // eslint-disable-next-line no-unused-vars
  setShow: (show: boolean) => void,
  ref: React.RefObject<HTMLHeadingElement>
) => {
  useEffect(() => {
    const onCheckClickOutside = (e: MouseEvent) => {
      if (
        show === true &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      )
        setShow(false);
    };
    document.addEventListener('mousedown', onCheckClickOutside);
    return () => {
      document.removeEventListener('mousedown', onCheckClickOutside);
    };
  }, [show]);
};

export default useClickOutsie;
