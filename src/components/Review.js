import React, { useEffect } from 'react';

const ElfSightApps = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.defer = true; // Defer loading to ensure it doesn't block rendering
    script.addEventListener('load', () => {
      // Once script is loaded, initialize ElfSightApps
      if (window.ElfSightApps && typeof window.ElfSightApps.init === 'function') {
        window.ElfSightApps.init();
      } else {
        console.error('ElfSightApps is not available.');
      }
    });
    
    // Append the script to the document body
    document.body.appendChild(script);

    // Clean up: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="elfsight-app-408fca74-2025-48b5-9292-6722e6999dcb" data-elfsight-app-lazy></div>
  );
};

export default ElfSightApps;
