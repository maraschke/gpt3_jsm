import React from "react";
import "./brand.css";
import { google, shopify, slack, dropbox, atlassian,  } from "./import";

const Brand = () => {
  return(
    <div className="gpt3__brand section__padding">
      <div>
        <a target="blank" href="https://google.com"><img src={google} alt="google" title="google"/></a>
      </div>
      <div>
        <a href="https://slack.com/" target="blank"><img src={slack} alt="slack" title="slack"/></a>
      </div>
      <div>
        <a href="https://www.atlassian.com" target="blank"><img src={atlassian} alt="atlassian" title="atlassian"/></a>
      </div>
      <div>
        <a target="blank" href="https://dropbox.com"><img src={dropbox} alt="dropbox" title="dropbox"/></a>
      </div>
      <div>
        <a target="blank" href="https://www.shopify.com/"><img src={shopify} alt="shopify" title="shopify"/></a>
      </div>
    </div>
  )
};

export default Brand;
