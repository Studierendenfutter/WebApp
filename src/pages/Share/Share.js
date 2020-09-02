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
    text: "Erhalte täglich deinen Lunchletter!",
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
            <WhatsappIcon size={128} round={true} />
          </WhatsappShareButton>
          <TelegramShareButton {...shareData}>
            <TelegramIcon size={128} round={true} />
          </TelegramShareButton>
          <FacebookShareButton {...shareData}>
            <FacebookIcon size={128} round={true} />
          </FacebookShareButton>
        </div>
        <div>
          <RedditShareButton {...shareData}>
            <RedditIcon size={128} round={true} />
          </RedditShareButton>
          <LinkedinShareButton {...shareData}>
            <LinkedinIcon size={128} round={true} />
          </LinkedinShareButton>
          <TwitterShareButton {...shareData}>
            <TwitterIcon size={128} round={true} />
          </TwitterShareButton>
        </div>
        <div>
          <EmailShareButton {...shareData}>
            <EmailIcon size={128} round={true} />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
}
