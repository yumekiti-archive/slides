import React from 'react';
import { FaHome, FaTwitter, FaGithub } from 'react-icons/fa';

const A = ({ type, url, children }) => (
  <a key={type} href={url} aria-label={`${type} ${url}`}>
    {children}
  </a>
);

export const SNSList = () => (
  <div className="sns-list sns-list-end">
    <A type="site" url="https://portfolio.yumekiti.net">
      <FaHome />
    </A>
    <A type="twitter" url="https://twitter.com/yumekiti">
      <FaTwitter />
    </A>
    <A type="github" url="https://github.com/yumekiti">
      <FaGithub />
    </A>
  </div>
);
