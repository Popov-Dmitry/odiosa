import React from "react";

export async function generateMetadata() {
  return {
    title: "Odiosa – Privacy & Cookies Policy",
    description: "Odiosa – Privacy & Cookies Policy",
    openGraph: {
      title: "Odiosa – Privacy & Cookies Policy",
      url: "https://odiosa.eu/privacy-and-cookies"
    }
  };
}

const PrivacyAndCookies = () => {
  return (
    <div
      className="pl-18 pr-5 pb-5 mt-10 flex flex-col gap-20 lg:max-w-[1522px] lg:px-20 lg:mt-20 lg:justify-self-end lg:gap-10">
      <div className="text-[26px] uppercase text-glow-15 self-end lg:text-[54px] lg:text-glow-25 lg:self-start">
        PRIVACY & COOKIES POLICY
      </div>
      <ol className="list-decimal flex flex-col gap-6 text-xl text-glow-10 lg:text-[44px] lg:text-glow-25 lg:gap-0">
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">REGULATORY FRAMEWORK</div>
          <div>
            <div>This Privacy & Cookies Policy is based on:</div>
            <ul className="list-disc pl-5 lg:pl-[23px]">
              <li className="pl-5 lg:pl-[23px]">
                Directive 2002/58/EC on privacy and electronic communications.
              </li>
              <li className="pl-5 lg:pl-[23px]">
                Regulation (EU) 2016/679 (General Data Protection Regulation - GDPR).
              </li>
            </ul>
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">DATA CONTROLLER</div>
          <div>The data controller for odiosa.eu is:</div>
          <div className="font-bold">"My Favorite Corporation" LLC</div>
          <div>INN: 01709202410012</div>
          <div>Email: <a href="mailto:info@odiosa.eu">info@odiosa.eu</a></div>
          <br />
          <div>If you have any privacy-related concerns, contact:</div>
          <div>Email: <a href="mailto:info@odiosa.eu">info@odiosa.eu</a></div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">DATA PROCESSING LOCATION & RETENTION</div>
          <div>
            Data is processed either in-house or by GDPR-compliant service providers, including web hosting, email, and
            analytics platforms. Data is retained only for as long as needed to fulfill the stated purposes.
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">TYPES OF DATA PROCESSED</div>
          <ul className="list-disc pl-5 lg:pl-[23px]">
            <li className="pl-5 lg:pl-[23px]">
              <div className="font-bold">Browsing Data:</div>
              <div>
                Collected automatically via server logs and analytics tools. This includes IP addresses, browser types,
                URLs visited, timestamps, etc., used for technical maintenance and statistical purposes.
              </div>
            </li>
            <li className="pl-5 lg:pl-[23px]">
              <div className="font-bold">User-Provided Data:</div>
              <div>
                This includes name, email, phone number, and address when voluntarily submitted through contact forms or
                during purchases.
              </div>
            </li>
          </ul>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">COOKIES POLICY</div>
          <div className="font-bold mt-2">What Are Cookies?</div>
          <div>
            Cookies are small text files placed on your device by websites to help provide a better user experience.
          </div>
          <div className="font-bold mt-2">Types of Cookies Used:</div>
          <ul className="list-disc pl-5 lg:pl-[23px]">
            <li className="pl-5 lg:pl-[23px]">
              <span className="font-bold">Essential Cookies:</span> Required for core functionality of the site.
            </li>
            <li className="pl-5 lg:pl-[23px]">
              <span className="font-bold">Analytics Cookies:</span> Used to collect anonymous statistics on website
              usage (via Google Analytics).
            </li>
            <li className="pl-5 lg:pl-[23px]">
              <span className="font-bold">Advertising Cookies:</span> Enable personalized advertising experiences.
            </li>
          </ul>
          <div className="font-bold mt-2">Cookies Used on odiosa.eu:</div>
          <table className="table-auto w-full">
            <thead>
            <tr>
              <th>Song</th>
              <th>Type</th>
              <th>Purpose</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>_ga, _gid, _gat</td>
              <td>Analytics</td>
              <td>Google Analytics tracking</td>
            </tr>
            <tr>
              <td>DSID, IDE</td>
              <td>Advertising</td>
              <td>Google/DoubleClick ad targeting</td>
            </tr>
            <tr>
              <td>Session Cookies</td>
              <td>Essential</td>
              <td>Maintain session state</td>
            </tr>
            </tbody>
          </table>
          <div>
            Google may store and process cookie-related data outside the EU. You can read more at: Google Privacy Policy
          </div>
          <div className="font-bold mt-2">Managing Cookies:</div>
          <div>Users may adjust browser settings to block or delete cookies:</div>
          <ul className="list-disc pl-5 lg:pl-[23px]">
            <li className="pl-5 lg:pl-[23px]">
              <a target="_blank"
                 href="https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DDesktop">
                Chrome
              </a>
            </li>
            <li className="pl-5 lg:pl-[23px]">
              <a target="_blank" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">
                Firefox
              </a>
            </li>
            <li className="pl-5 lg:pl-[23px]">
              <a target="_blank" href="https://support.apple.com/en-il/guide/safari/sfri11471/mac">
                Safari
              </a>
            </li>
          </ul>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">THIRD-PARTY LINKS</div>
          <div>
            ODIOSA may link to social platforms or other third-party websites. Once you leave odiosa.eu, ODIOSA is not
            responsible for external site privacy practices.
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">OPTIONAL DATA SUBMISSION</div>
          <div>
            Submitting personal data (e.g., contact form, email newsletter) is voluntary. However, refusal to provide
            certain data may make it impossible to use some services.
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">DATA PROCESSING METHODS</div>
          <div>
            Data is processed using secure systems and protocols. SSL encryption is used on all transactional and
            sensitive pages.
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">DATA SHARING</div>
          <div>
            Data may be shared with external service providers (payment gateways, marketing platforms, analytics tools),
            only as necessary and under GDPR-compliant contracts. No data is sold.
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">USER RIGHTS</div>
          <div>You have the right to:</div>
          <ul className="list-disc pl-5 lg:pl-[23px]">
            <li className="pl-5 lg:pl-[23px]">
              Access your data
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Correct or delete your data
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Object to processing
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Request data portability
            </li>
            <li className="pl-5 lg:pl-[23px]">
              Withdraw consent
            </li>
          </ul>
          <div>To exercise these rights, please email: <a href="mailto:info@odiosa.eu">info@odiosa.eu</a></div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">RIGHT TO COMPLAIN</div>
          <div>
            If you believe your rights are being violated, you may lodge a complaint with your local data protection
            authority or the European Data Protection Board.
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">POLICY UPDATES</div>
          <div>
            We reserve the right to update this policy. Changes will be posted at odiosa.eu/privacy.
          </div>
        </li>
        <li className="pl-5 lg:pl-[23px]">
          <div className="font-bold">CONTACT</div>
          <div>If you have any questions regarding this policy, contact us at:</div>
          <a href="mailto:info@odiosa.eu">info@odiosa.eu</a>
        </li>
      </ol>
    </div>
  );
};

export default PrivacyAndCookies;