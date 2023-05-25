import { useNavigate } from 'react-router-dom';

const useLinkNavigate = () => {
  const navigate = useNavigate();

  const scrollToSection = async (href: string) => {
    if (href.includes('#')) {
      const targetElementId = href;
      const offset = 100;

      if (targetElementId) {
        const targetElement =
          document.querySelector<HTMLElement>(targetElementId);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
      }
    } else {
      navigate(href);
    }
  };

  return { scrollToSection };
};

export default useLinkNavigate;
