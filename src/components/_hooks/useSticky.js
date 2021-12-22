import * as React from 'react';

const useSticky = (defaultSticky = false) => {
  const { useCallback, useEffect, useState } = React;
  const [isSticky, setIsSticky] = useState(defaultSticky);

  const toggleSticky = useCallback(
    (value) => {
      setIsSticky(value);
    },
    [isSticky]
  );

  useEffect(() => {
    const handleScroll = window.addEventListener('scroll', () => {
      window.pageYOffset > 220 ? toggleSticky(true) : toggleSticky(false);
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [toggleSticky]);

  return { isSticky };
};

export { useSticky };
