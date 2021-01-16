import React from 'react';
import "./footer.styles.css";

function FooterPanel () {
  return (
    <div>
      <div className="py-2 text-center footer-style">© William Nicholas Bork Rodriguez&nbsp;{new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;