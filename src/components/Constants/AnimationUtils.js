import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * Initializes AOS animations with optimized settings
 */
export const initializeAOS = () => {
  AOS.init({
    duration: 600,      // Shortened animation duration
    easing: 'ease-in-out',
    once: true,         // Elements animate only once
    offset: 50,         // Offset (in px) from the original trigger point
    delay: 0,           // Default delay
    mirror: false,      // No reverse animation when scrolling back up
    anchorPlacement: 'top-bottom', // Trigger animation when top of element hits bottom of viewport
  });
};

/**
 * Refreshes AOS animations - useful when content or theme changes
 */
export const refreshAOS = () => {
  AOS.refresh();
};

/**
 * Standard animation props for different element types
 */
export const animations = {
  fadeUp: {
    'data-aos': 'fade-up',
    'data-aos-delay': '0'
  },
  fadeUpDelay: (index = 0) => ({
    'data-aos': 'fade-up',
    'data-aos-delay': (index * 50).toString()
  }),
  fadeIn: {
    'data-aos': 'fade-in',
    'data-aos-delay': '0'
  },
  zoomIn: {
    'data-aos': 'zoom-in',
    'data-aos-delay': '0'
  },
  zoomInDelay: (index = 0) => ({
    'data-aos': 'zoom-in',
    'data-aos-delay': (index * 50).toString()
  }),
  slideRight: {
    'data-aos': 'fade-right',
    'data-aos-delay': '0'
  },
  slideLeft: {
    'data-aos': 'fade-left',
    'data-aos-delay': '0'
  }
}; 