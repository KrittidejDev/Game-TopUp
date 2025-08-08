import { ContactUsStyles, ContactArrow } from "./styled";

export function ContactUs() {
  return (
    <ContactUsStyles>
      <div className="contactUsContainer">
        <h2>Contact Us</h2>
        <div className="itemsContainer">
          <div className="orangeDecoLeft"></div>
          <div className="orangeDecoRight"></div>
          <div className="contactItem">
            <img src="/images/icons/tel-icon.png" />
            <p>0838 2029 880</p>
          </div>
          <div className="breakLine"></div>
          <div className="contactItem">
            <img src="/images/icons/ig-icon.png" />
            <p>fuadshop03</p>
          </div>
          <div className="breakLine"></div>
          <div className="contactItem">
            <img src="/images/icons/email-icon.png" />
            <p>cs@fuadshop.my.id</p>
          </div>
        </div>
      </div>
      <ContactArrow
        src="/images/icons/contact-arrow.png"
        className="contactArrow"
      />
    </ContactUsStyles>
  );
}
