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
  };

  useEffect(() => {
    async function share() {}
    share();
  }, []);

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
      </div>
    </div>
  );
}
