import React, { useState } from "react";
import { scrapeData } from "../services/crawler";
import { toast } from "react-toastify";

const GetLink = ({ setIsLinkAdded }) => {
  const [link, setLink] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (event) => {
    setLink(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlPattern = /^(https?:\/\/)/i; // Regex to check if the input starts with http:// or https://

    if (!urlPattern.test(link.trim())) {
      //   console.error("Error: Please enter a valid HTTP or HTTPS link.");
      toast.error("Error: Please enter a valid HTTP or HTTPS link.");
      setIsDisabled(false);
      setLink("")
    } else {
      const response = await scrapeData(link);
      // Handle valid link submission here
      if (response?.data?.isMatch) {
        toast.success("Alright exit URL so you can ask question");
        setIsLinkAdded(false)
        setIsDisabled(true);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="input-group mt-2">
      <input type="text" className="form-control" value={link} placeholder="Please enter link." disabled={isDisabled} onChange={handleChange} />
      <button type="button" className="btn btn-outline-secondary" onClick={handleSubmit} disabled={!link.trim() || isDisabled}>
        Send
      </button>
    </form>
  );
};

export default GetLink;
