import Image from "next/image";
import { useEffect, useState } from "react";

const GoToTheMoon = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toMoon = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    // Chỉ hiện nút khi kéo xuống quá 600px
    const toggleVisibility = () => {
      if (window.pageYOffset > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return (
    <>
      {isVisible && (
        <div className="fixed right-5 bottom-5 cursor-pointer">
          <Image
            src="/back-to-top-icon.png"
            alt="/"
            width={60}
            height={60}
            onClick={toMoon}
          />
        </div>
      )}
    </>
  );
};
export default GoToTheMoon;
