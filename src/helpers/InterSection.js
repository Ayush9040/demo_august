// import { useState, useEffect } from 'react'

// export default function useOnScreen(ref,options) {
//   const [isIntersecting, setIntersecting] = useState(false)

//   const observer = new IntersectionObserver(
//     ([entry]) => setIntersecting(entry.isIntersecting),
//     options
//   )

//   useEffect(() => {
//     observer.observe(ref.current)
//     // Remove the observer as soon as the component is unmounted
//     return () => {
//       observer.disconnect()
//     }
//   }, [])
//   return isIntersecting
// }

import { useState, useEffect } from 'react';

export default function useOnScreen(ref, options) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    // Exit if ref is not assigned yet
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      options
    );

    observer.observe(ref.current);

    // Cleanup
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      observer.disconnect();
    };
  }, [ref, options]); // Run this effect again if ref or options change

  return isIntersecting;
}

