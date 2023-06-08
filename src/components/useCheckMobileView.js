import { useMediaQuery } from "react-responsive";
import React ,{ useState, useEffect } from "react";

const useCheckMobileView = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 575.98px)",
  });
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(isMobile);
  }, [isMobile]);

  return data;
};

export default useCheckMobileView;