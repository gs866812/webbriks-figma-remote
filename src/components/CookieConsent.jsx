"use client";
import { useState, useEffect } from "react";


const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookieConsent", "accepted");
    // Optionally: Implement tracking or other cookie-based features here
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem("cookieConsent", "rejected");
    // Optionally: Handle rejected cookies or disable certain features
    setShowBanner(false);
  };

  const handleSettings = () => {
    // Redirect or open a modal for cookie settings
    alert("This will open the cookie settings options.");
  };

  if (!showBanner) return null;

  return (
    <div className="cookieBanner">
      <div className="cookieContent">
        <p>
          By clicking “Accept All Cookies”, you agree to the storing of cookies
          on your device to enhance site navigation, analyze site usage, and
          assist in our marketing efforts.
        </p>
        <div className="cookieButtons">
          <button className="settingsBtn" onClick={handleSettings}>
            Cookie Settings
          </button>
          <button className="rejectBtn" onClick={handleRejectAll}>
            Reject All
          </button>
          <button className="acceptBtn" onClick={handleAcceptAll}>
            Accept All Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
