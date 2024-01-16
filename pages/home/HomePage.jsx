import { useState } from "react";
import { backendUrl } from "../../data";
import "./homePage.css";
import { Link } from "react-router-dom";
const frontendUrl = "http://localhost:5173";

const HomePage = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [copiedText, setCopiedText] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${backendUrl}/createShortUrl`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullUrl }),
      });
      const data = await response.json();
      if (response.ok) {
        setShortUrl(data.url.shortUrl);
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  const copyHandler = () => {
    navigator.clipboard.writeText(`${frontendUrl}/${shortUrl}`);
    setCopiedText(true);
    setTimeout(() => {
      setCopiedText(false);
    }, 1000);
  };
  return (
    <div className="home-page">
      <h1>Short URL</h1>
      <form onSubmit={submitHandler}>
        <input
          type="url"
          placeholder="Enter your url"
          value={fullUrl}
          onChange={(e) => setFullUrl(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <ul>
        <li>Paste the long url and make your url short.</li>
        <li>Copy the generated short url and use it everywhere.</li>
      </ul>
      <div className="short-url">
        <Link
          to={`http://localhost:5173/${shortUrl}`}
        >{`http://localhost:5173/${shortUrl}`}</Link>
        <button onClick={copyHandler} type="button">
          {copiedText ? `Copied` : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
