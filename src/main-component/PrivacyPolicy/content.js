import React from "react";

const PrivacyPolicyContent = () => {
  return (
    <div className="container wpo-terms-wrap section-padding">
      <style>
        {`
          li {
            justify-content: left;
          }
        `}
      </style>
      <ol className="privacy-policy-intro-list">
        <li>1. <span>Company Name:</span> Jainam Jivika Foundation (referred to as “Company”)</li>
        <li>2. <span>Company Email:</span> <a href="mailto:info@SevakArmy.com" target="_blank">info@SevakArmy.com</a></li>
        <li>3. <span>Company Contact No.:</span> <a href="tel:+919552845284" target="_blank">+91 95 5284 5284</a></li>
        <li>4. <span>Company Website.:</span> <a href="https://jjfindia.com/" target="_blank">JJFIndia.com </a></li>
        <li>5. <span>Product Website:</span> <a href="https://sevakarmy.com/" target="_blank">SevakArmy.com</a></li>
        <li>6. <span>Registered Address:</span> <a href="https://maps.app.goo.gl/mCvV6mqmRgEaRtLL6" target="_blank">Jainam Jivika Foundation <br /> <span style={{ paddingLeft: '15px' }}></span>
          Jainam Tower, Sai Park, Thergaon, <br />  <span style={{ paddingLeft: '15px' }}></span>
          Pune - 411033, Maharashtra, India <br />  <span style={{ paddingLeft: '15px' }}></span>
         </a></li>
        <li>7. <span>Registered Country:</span> India</li>
      </ol>

      {/* <h1 className="section-start policy-heading">Privacy Policy</h1> */}

      <ol className="privacy-policy-intro-list2 policy-list-items" style={{ paddingLeft: '0px' }}>
        <li>
          <h4>1. What Information Do We Collect? </h4>
          <div>
            <p>  We collect personal information that you voluntarily provide when registering, expressing interest in our Services or contacting us. This may include:</p>
            <ul className="unordered-listtt">
              <li>1. Names</li>
              <li>2. Phone numbers</li>
              <li>3. Email addresses</li>
              <li>4. Mailing addresses</li>
              <li>5. Job titles</li>
              <li>6. Usernames</li>
              <li>7. Contact Preferences</li>
              <li>8. Contact or authentication data</li>
              <li>9. Billing addresses</li>
              <li>10. Payment card information</li>
              <li>11. Passwords</li>
            </ul>

            <ul className="policy-section-list" style={{ paddingLeft: '0px' }}>
              <li style={{ display: 'block' }}>
                <h5>Sensitive Information</h5>
                <p>We do not process sensitive personal information such as government IDs, financial account information, health information or biometric data.</p>
              </li>
              <li>
                <h5>Social Media Login Data</h5>
                <p>If you register using a social media account (e.g., Facebook or Twitter), we may collect information as described in the ‘How Do We Handle Your Social Logins section’.</p>
              </li>
              <li>
                <h5>Information Automatically Collected</h5>
                <p>We automatically collect certain information when you visit or use our Services, such as your IP address, browser type, device information and usage data to maintain the security and functionality of our Services.</p>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <h4>2. How Do We Process Your Information?</h4>
          <div className="policies-section">
            <p>We process your information to provide and improve our Services, manage user accounts, respond to inquiries, send administrative information, fulfil orders, request feedback and send marketing communications. Processing may also include fraud prevention, targeted advertising and complying with legal obligations.</p>
          </div>
        </li>
        <li style={{ display: 'block' }}>
          <h4>3. When and With Whom Do We Share Your Personal Information?</h4>
          <div className="policies-section">
            <p>We may share information with third parties in specific situations, such as:</p>
            <ul className="unordered-listtt">
              <li>Service Providers for performing services on our behalf.</li>
              <li>Affiliates to honour this Privacy Notice.</li>
              <li>Business Partners for co-marketing purposes.</li>
              <li>Legal Compliance and Security when required by law or to protect the Company’s rights.</li>
              <li>Merger, Sale or Other Asset Transfers if part of a business transition.</li>
            </ul>
          </div>
        </li>
        <li>
          <h4>4. Do We Use Cookies and Other Tracking Technologies?</h4>
          <div className="policies-section">
            <p>We may use cookies and similar technologies to collect and store information. For more details, see our Cookie Policy.</p>
          </div>
        </li>
        <li>
          <h4>5. How Do We Handle Your Social Logins?</h4>
          <div className="policies-section">
            <p>If you choose to register or log in using a social media account, we may access your profile information as permitted by the provider. We use this information to provide and improve our Services. We encourage you to review your social media provider’s privacy policy for more details.</p>
          </div>
        </li>
        <li>
          <h4>6. How Long Do We Keep Your Information?</h4>
          <div className="policies-section">
            <p>We retain personal information only as long as necessary to fulfil the purposes outlined in this Privacy Notice unless otherwise required by law. After that, we securely delete or anonymise the information.</p>
          </div>
        </li>
        <li>
          <h4>7. How Do We Keep Your Information Safe?</h4>
          <div className="policies-section">
            <p>We use organisational and technical security measures to protect your information. However, no system is entirely secure and the transmission of information over the internet carries inherent risks.</p>
          </div>
        </li>
        <li>
          <h4>8. What are Your Privacy Rights?</h4>
          <div className="policies-section">
            <p>Depending on your location, you may have the right to access, correct or delete your personal information. You may also opt out of marketing communications or withdraw consent for processing where applicable.</p>
          </div>
        </li>
        <li>
          <h4>9. Account Information</h4>
          <div className="policies-section">
            <p>Please contact us to review, update or delete your account information. Upon request, we will deactivate or delete your account from active databases, although some information may be retained to prevent fraud or comply with legal obligations.</p>
          </div>
        </li>
        <li style={{ display: 'block' }}>
          <h4>10. Controls for Do-Not-Track Features</h4>
          <div className="policies-section">
            <p>Currently, we do not respond to Do-Not-Track (DNT) signals due to the lack of a standardised DNT technology protocol.</p>
          </div>
        </li>
        <li>
          <h4>11. Do We Make Updates to this Notice?</h4>
          <div className="policies-section">
            <p>Yes, we may update this Privacy Notice as needed to comply with relevant laws. The revised version will be effective as soon as it is accessible. If we make significant changes, we may notify you.</p>
          </div>
        </li>
      </ol>

    </div>
  );
};

export default PrivacyPolicyContent;