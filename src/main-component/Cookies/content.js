
import React from "react";

const CookiesContent = () => {
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

            {/* <h1 className="policy-heading mt-8">Cookie Policy</h1>f */}
            <p className="">By using our website, the Product Website, as mentioned above and agreeing to this policy, you consent to our use of cookies in accordance with the terms of this policy.</p>


            <ol className="privacy-policy-intro-list2 policy-list-items top-policy-margin" style={{ paddingLeft: '0px' }}>
                <li>
                    <h4>About cookies</h4>
                    <ol style={{ paddingLeft: '0px' }}>
                        <li>
                            A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server. Cookies may be either &quot;persistent&quot; cookies or &quot;session&quot; cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.
                            Cookies do not typically contain any information that personally identifies a user, but personal information that we store about you may be linked to the information stored in and obtained from cookies. Cookies can be used by web servers to identify and track users as they navigate different pages on a website and identify users returning to a website.
                        </li>
                    </ol>
                </li>
                <li>
                    We use both session and persistent cookies on our website. We use cookies to personalise content and ads and to analyse our traffic. Click Settings to change your cookie preferences. You consent to our cookies if you continue to use our website. Cookies are small text files that can be used by websites to make a user&apos;s experience more efficient. This site uses different types of cookies. Some cookies are placed by third party services that appear on our pages. We use data collection devices such as &quot;cookies&quot; on certain pages of the Company  Product Website, as mentioned above, to help analyse Our web page flow, measure promotional effectiveness and promote trust and safety. &quot;Cookies&quot; are small files placed on Your hard drive that assist Us in providing Our services. We offer certain features that are only available through the use of a &quot;cookie&quot;.We also use cookies to allow You to enter Your password less frequently during a session. Cookies can also help Us provide information that is targeted to Your interests. Most cookies are &quot;session cookies,&quot; meaning that they are automatically deleted from your hard drive at the end of a session. You are always free to decline Our cookies if Your browser permits, although in that case, You may not be able to use certain features and You may be required to re-enter Your password more frequently during a session.
                </li>
                <li className="mt-4">
                    Additionally, You may encounter &quot;cookies&quot; or other similar devices that are placed by third parties. We do not control the use of cookies by third parties.
                </li>
            </ol>

        </div>
    );
};

export default CookiesContent;
