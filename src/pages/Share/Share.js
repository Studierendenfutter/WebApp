import React, { useEffect } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

import "./Share.css";

export default function Share() {
  const shareData = {
    title: "Studierendenfutter",
    text:
      "Hey, mit dem Lunchletter von Studierendenfutter bekomme ich jeden Tag mein persönliches Mittagsmenü zugeschickt. Wenn du dich auch anmelden möchtest, kannst du das hier tun:",
    url: "https://www.studierendenfutter.de",
    style: { margin: "1em" },
  };

  useEffect(() => {
    async function share() {}
    share();
  }, []);

  const copyText = () => {
    const text = shareData.text + " " + shareData.url;
    navigator.clipboard.writeText(text);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        <WhatsappShareButton {...shareData}>
          <WhatsappIcon size={115} round={true} iconFillColor="#FFFCDC" />
        </WhatsappShareButton>
        <TelegramShareButton {...shareData}>
          <TelegramIcon size={115} round={true} iconFillColor="#FFFCDC" />
        </TelegramShareButton>
        <FacebookMessengerShareButton {...shareData}>
          <FacebookMessengerIcon
            size={115}
            round={true}
            iconFillColor="#FFFCDC"
          />
        </FacebookMessengerShareButton>
        <EmailShareButton {...shareData}>
          <EmailIcon size={115} round={true} iconFillColor="#FFFCDC" />
        </EmailShareButton>
        <FacebookShareButton {...shareData}>
          <FacebookIcon size={115} round={true} iconFillColor="#FFFCDC" />
        </FacebookShareButton>
        <TwitterShareButton {...shareData}>
          <TwitterIcon size={115} round={true} iconFillColor="#FFFCDC" />
        </TwitterShareButton>
        <LinkedinShareButton {...shareData}>
          <LinkedinIcon size={115} round={true} iconFillColor="#FFFCDC" />
        </LinkedinShareButton>
        <RedditShareButton {...shareData}>
          <RedditIcon size={115} round={true} iconFillColor="#FFFCDC" />
        </RedditShareButton>
        <div className="sf-copy-button" onClick={copyText}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="115"
            viewBox="0 0 37 37"
            width="115"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
