import React, { useEffect } from 'react';

const ElfSightApps  = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.ElfSightApps.init();
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-408fca74-2025-48b5-9292-6722e6999dcb" data-elfsight-app-lazy></div>
  );
};

export default ElfSightApps ;
