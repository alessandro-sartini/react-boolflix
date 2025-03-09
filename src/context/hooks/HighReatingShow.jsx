import { useEffect, useState } from "react";

export default function HighReatingShow() {
  const [highReating, setHighReating] = useState([]);

  useEffect(() => {
    console.log(highReating); 
  }, [highReating]);
}
