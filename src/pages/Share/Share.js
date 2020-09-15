import React, { useEffect } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
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
            <WhatsappIcon size={120} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton {...shareData}>
            <TelegramIcon size={120} round={true} />
          </TelegramShareButton>
          <FacebookShareButton {...shareData}>
            <FacebookIcon size={120} round={true} />
          </FacebookShareButton>
        </div>
        <div>
          <RedditShareButton {...shareData}>
            <RedditIcon size={120} round={true} />
          </RedditShareButton>
          <LinkedinShareButton {...shareData}>
            <LinkedinIcon size={120} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton {...shareData}>
            <TwitterIcon size={120} round={true} />
          </TwitterShareButton>
        </div>
        <div>
          <EmailShareButton {...shareData}>
            <EmailIcon size={120} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}
