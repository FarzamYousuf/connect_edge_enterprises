import React from "react";
import styled from "styled-components";
// Assets
import ContactImg1 from "../../assets/img/contact-1.png";
import ContactImg2 from "../../assets/img/contact-2.png";
import ContactImg3 from "../../assets/img/contact-3.png";
import Whatsapp from "../../assets/img/WhatsApp_icon.png";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, feel free to reach out using the below.
              <br />
              We'll get back to you as soon as possible.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form>
                <label className="font13">Phone:</label>
                <p className="font20 extraBold">+92 311 2808871</p>
                <p className="font20 extraBold">+92 340 8392112</p>
                <label className="font13">Email:</label>
                <p className="font20 extraBold">
                  info@connectedgeenterprises.com
                </p>
              </Form>
              <div
                className="flex"
                style={{
                  border: "1px solid #25d366",
                  backgroundColor: "#25d366",
                  width: "30%",
                  padding: "15px",
                  outline: "none",
                  color: "#fff",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: "10px",
                  height: "50px",
                }}
                onClick={() => {
                  window.location.href =
                    "https://wa.me/+923112808871?text=I want to enquire about your services";
                }}
              >
                <img
                  src={Whatsapp}
                  alt="whatsapp"
                  className=""
                  style={{ height: 30, width: 30 }}
                />
                <h5 style={{ height: "100%" }}>WhatsApp</h5>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
// const SumbitWrapperStyle = styled.input`
//   border: 1px solid #25d366;
//   background-color: #25d366;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #256cab;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
const ButtonInput = styled.input`
  border: 1px solid #25d366;
  background-color: #25d366;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #256cab;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
