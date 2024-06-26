import Input from "../components/Input";
import TypePasswordActiveNo from "../components/TypePasswordActiveNo";
import NotARobotCheckbox from "../components/NotARobotCheckbox";
import Buttonprimary from "../components/Buttonprimary";
import IconYes from "../components/IconYes";
import "./frame.css";

const Frame = () => {
  return (
    <div className="frame-parent">
      <section className="frame-group">
        <img className="frame-child" alt="" src="/frame-40589@2x.png" />
        <div className="create-an-account-parent">
          <h3 className="create-an-account">Create an account</h3>
          <div className="input-section">
            <div className="login">
              <div className="input">
                <div className="email">
                  <div className="label">Name</div>
                  <Input
                    inputPlaceholder="Saisha Wagh"
                    propBorder="1px solid #4b5768"
                    propColor="#4b5768"
                  />
                </div>
                <div className="email">
                  <div className="label">Email Address</div>
                  <Input inputPlaceholder="hello@bluestock.in" />
                </div>
                <div className="email">
                  <div className="header">
                    <div className="label2">Password</div>
                  </div>
                  <TypePasswordActiveNo iconeye="/iconeye@2x.png" />
                </div>
              </div>
              <div className="button">
                <div className="remind-me">
                  <div className="tick">
                    <div className="fill" />
                    <img
                      className="iconsoutlinecheckmark"
                      alt=""
                      src="/iconsoutlinecheckmark.svg"
                    />
                  </div>
                  <div className="keep-me-signed-container">
                    <span className="by-continuing-you">{`By continuing, you agree to our `}</span>
                    <span className="terms-of-service">terms of service.</span>
                  </div>
                </div>
                <NotARobotCheckbox
                  checkBox="/check-box@2x.png"
                  googleRecaptchaOfficial2="/google-recaptchaofficial-2@2x.png"
                  notARobotCheckboxPosition="relative"
                />
                <Buttonprimary />
              </div>
            </div>
            <button className="devider">
              <div className="devider-child" />
              <div className="sign-in-with">
                <div className="or-sign-up">or sign up with</div>
              </div>
            </button>
            <IconYes google="/google@2x.png" />
          </div>
        </div>
      </section>
      <div className="already-have-an-container">
        <span>{`Already have an account? `}</span>
        <span className="sign-in-here">Sign in here</span>
      </div>
    </div>
  );
};

export default Frame;
