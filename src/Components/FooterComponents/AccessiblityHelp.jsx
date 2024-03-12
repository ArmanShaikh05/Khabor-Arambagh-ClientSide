import React, { useEffect } from "react";

const AccessiblityHelp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="content-wrapper">
      <h1 className="news-title">Accessibility Help for Khaborarambagh</h1>
      <div className="footer-link-data">
        <p>
          At Khaborarambagh, we are committed to ensuring that our website is
          accessible to all users, including those with disabilities. We strive
          to provide a user-friendly experience for everyone, regardless of
          their abilities or limitations. If you encounter any accessibility
          issues while using our website, please refer to the following
          resources for assistance:
        </p>
        <br />
        <h2 id="1-accessibility-features-">1. Accessibility Features:</h2>
        <br />
        <p>
          <strong>Keyboard Navigation:</strong> Our website supports keyboard
          navigation to ensure that users who cannot use a mouse or touchpad can
          still navigate through the content.
        </p>
        <br />
        <p>
          <strong>Screen Reader Compatibility:</strong> We have optimized our
          website to be compatible with screen reader software, allowing
          visually impaired users to access and understand the content more
          easily.
        </p>
        <br />
        <p>
          <strong>Text Size and Contrast:</strong> Users can adjust the text
          size and contrast settings on our website to accommodate their
          preferences and improve readability.
        </p>
        <br />
        <h2 id="2-reporting-accessibility-issues-">
          2. Reporting Accessibility Issues:
        </h2>
        <br />
        <p>
          If you encounter any accessibility barriers while using
          Khaborarambagh, please let us know so that we can address them
          promptly. You can report accessibility issues by contacting our
          support team at khaborarambagh2020@gmail.com.
        </p>
        <br />
        <h2 id="3-alternative-formats-">3. Alternative Formats:</h2>
        <br />
        <p>
          If you require content in alternative formats, such as Braille, large
          print, or audio, please contact us, and we will do our best to
          accommodate your request.
        </p>
        <br />
        <h2 id="4-feedback-and-suggestions-">4. Feedback and Suggestions:</h2>
        <br />
        <p>
          We welcome feedback and suggestions on how we can improve the
          accessibility of our website. If you have any ideas or
          recommendations, please email us at khaborarambagh2020@gmail.com.
        </p>
        <br />
        <h2 id="5-contact-us-">5. Contact Us:</h2>
        <br />
        <p>
          If you have any questions or need further assistance regarding
          accessibility on Khaborarambagh, please feel free to contact us:
        </p>
        <br />
        <h4 id="email-khaborarambagh2020-gmail-com">
          Email: khaborarambagh2020@gmail.com
        </h4>
        <br />
        <p>
          Thank you for helping us make Khaborarambagh accessible to all users.
          We are committed to continuously improving the accessibility of our
          website to ensure that everyone can access our content easily and
          enjoy a positive browsing experience.
        </p>
        <br /><br /><br />
      </div>
    </div>
  );
};

export default AccessiblityHelp;
