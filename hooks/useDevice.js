import React, { useEffect } from 'react';
import * as Parser from 'ua-parser-js';
const botList = ['facebook', 'twitter'];

export default function useDevice(req) {
  let userAgent;

  if (req) {
    userAgent = Parser(req.headers['user-agent'] || '');
  } else {
    userAgent = new Parser().getResult();
  }

  const userAgentString = (userAgent?.ua || '').toLowerCase();

  // useEffect(() => {
  //   console.log('device type:', userAgent?.device?.type);
  // }, []);

  return {
    isMobile: userAgent?.device?.type === 'mobile',
    isTablet: userAgent?.device?.type === 'tablet',
    isBot: botList.some(bot => userAgentString.includes(bot)),
  };
}
