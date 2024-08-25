import { useState, useCallback } from "react";

interface ExtendedDocument extends Document {
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
}

interface ExtendedHTMLElement extends HTMLElement {
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
}

const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  {
    /* START Mở Full màn hình */
  }
  const openFullscreen = useCallback(() => {
    const elem = document.documentElement as ExtendedHTMLElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
    setIsFullscreen(true);
  }, []);

  {
    /* END Mở Full màn hình */
  }

  {
    /* START Đóng Full màn hình */
  }
  const closeFullscreen = useCallback(() => {
    const doc = document as ExtendedDocument;

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (doc.webkitExitFullscreen) {
      /* Safari */
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      /* IE11 */
      doc.msExitFullscreen();
    }
    setIsFullscreen(false);
  }, []);

  {
    /* END Đóng Full màn hình */
  }

  const toggleFullscreen = useCallback(() => {
    if (!isFullscreen) {
      openFullscreen();
    } else {
      closeFullscreen();
    }
  }, [isFullscreen, openFullscreen, closeFullscreen]);

  return { isFullscreen, openFullscreen, closeFullscreen, toggleFullscreen };
};

export default useFullscreen;
