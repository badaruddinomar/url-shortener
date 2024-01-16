import { useParams } from "react-router-dom";
import { backendUrl } from "../../data";
import "./shortUrlPage.css";
import { useEffect } from "react";

const ShortUrlPage = () => {
  const { shortUrl } = useParams();

  useEffect(() => {
    const fetchHandler = async () => {
      try {
        const response = await fetch(`${backendUrl}/${shortUrl}`);
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          window.location.href = data.url.fullUrl;
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchHandler();
  }, [shortUrl]);

  return (
    <div className="pre-loader-container">
      <div className="pre-loader"></div>;
    </div>
  );
};

export default ShortUrlPage;
