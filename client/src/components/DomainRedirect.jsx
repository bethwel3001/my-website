import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DomainRedirect = () => {
  const location = useLocation();
  
  useEffect(() => {
    const currentHost = window.location.hostname;
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    // List of old domains to redirect from
    const oldDomains = [
      'bethwel-lagat.netlify.app',
      'bethwel-lagat.vercel.app',
      'www.bethwel-lagat.netlify.app'
    ];
    
    const newDomain = 'bethwel.vercel.app';
    
    // Check if current domain is an old domain
    if (oldDomains.includes(currentHost)) {
      // Construct the new URL
      const newUrl = `https://${newDomain}${currentPath}${currentSearch}${currentHash}`;
      
      // Permanent redirect (301 equivalent)
      window.location.replace(newUrl);
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default DomainRedirect;