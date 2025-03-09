import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import Results from "../components/mainComponents/Results";

export default function FilmsPage({ type }) {
  const { handleTopNew, topNewProducts } = useGlobalContext();
  
  useEffect(() => {
    if (type === "tv") {

      handleTopNew("tv");
    }
    // switch (type==="tv") {
    //   case "tv":
    //     const stringtv = "in uscita";   
    
    // }
  }, [type]);
  

  
  return (
    <div className="container" style={{ minHeight: "50vh" }}>
      <h2 className="mt-4">{type === "movies" ? "Nuovi Film in uscita!" : "Nuove Serie TV in uscita"}</h2>
      <Results type={type} items={topNewProducts} />
    </div>
  );
}
