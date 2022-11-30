import React, { ForwardedRef, forwardRef } from 'react';
import { useState, useEffect, MutableRefObject } from 'react';

const useObserver = (ref: React.RefObject<HTMLHeadingElement>) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) setShow(true);
    });
    observer.observe(ref.current as Element);
  }, []);
  return { show, setShow };
};

export default useObserver;
