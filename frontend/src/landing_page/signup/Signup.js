import React, { useState } from "react";

function Signup() {
  const [mobile, setMobile] = useState("");

  const handleGetOTP = () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10 digit mobile number");
      return;
    }
    
    alert(`OTP sent to ${mobile} (Demo OTP: 123456)`);
    
    // Dashboard alag port pe hai, isliye redirect
    window.location.href = "http://localhost:3001";
    
    // Agar aapka dashboard 3002 pe hai to upar wali line ko ye kar dena:
    // window.location.href = "http://localhost:3002";
  };

  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          <h1 className="mt-5">Open a free demat and trading account online</h1>
          <p className="text-muted">
            Start investing brokerage free and join a community of 1.5+ crore investors and traders
          </p>
        </div>
        <div className="row mt-5">
          <div className="col-7 text-center">
            <img src="/media/images/signup.png" style={{width: "90%"}} alt="open account"/>
          </div>
          <div className="col-5 mt-5">
            <h2>Signup now</h2>
            <p className="text-muted">Or track your existing application.</p>
            <div className="mt-4">
              <input 
                placeholder="Enter your mobile number" 
                className="form-control"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                maxLength={10}
              />
              <button className="btn btn-primary mt-3" onClick={handleGetOTP}>
                Get OTP
              </button>
            </div>
            <p className="text-muted mt-3" style={{fontSize: "12px"}}>
              By proceeding, you agree to the Zerodha terms & privacy policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;