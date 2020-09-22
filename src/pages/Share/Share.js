import React, { useEffect } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

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
      <h1 style={{ textAlign: "center" }}>
        Teile Studierendenfutter mit deinen Freunden
      </h1>
      <div>
        <div>
          <WhatsappShareButton {...shareData}>
            <WhatsappIcon size={115} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton {...shareData}>
            <TelegramIcon size={115} round={true} />
          </TelegramShareButton>
          <FacebookShareButton {...shareData}>
            <FacebookIcon size={115} round={true} />
          </FacebookShareButton>
        </div>
        <div>
          <RedditShareButton {...shareData}>
            <RedditIcon size={115} round={true} />
          </RedditShareButton>
          <LinkedinShareButton {...shareData}>
            <LinkedinIcon size={115} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton {...shareData}>
            <TwitterIcon size={115} round={true} />
          </TwitterShareButton>
        </div>
        <div>
          <EmailShareButton {...shareData}>
            <EmailIcon size={115} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}
