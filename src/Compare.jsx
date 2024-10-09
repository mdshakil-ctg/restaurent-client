/* Common styles for all screen sizes */
.signup-body {
  background-color: #080710;
}

.background {
  width: 430px;
  height: 520px;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 55%;
}

.background .shape {
  height: 200px;
  width: 200px;
  position: absolute;
  border-radius: 50%;
}

.shape:first-child {
  background: linear-gradient(#1845ad, #23a2f6);
  left: -100px;
  top: -145px;
}

.shape:last-child {
  background: linear-gradient(to right, #ff512f, #f09819);
  right: -100px;
  bottom: -145px;
}

.main-form {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  height: auto;
  width: 440px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
}

.main-form * {
  color: #ffffff;
  letter-spacing: 0.5px;
  outline: none;
  border: none;
}

.main-form h3 {
  font-size: 32px;
  font-weight: 500;
  line-height: 42px;
  text-align: center;
}

label {
  display: block;
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
}

input {
  display: block;
  height: 50px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.125);
  border-radius: 3px;
  padding: 0 10px;
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
}

.btn-reg {
  margin-top: 10px;
  width: 100%;
  background-color: #c1b228;
  color: #080710;
  padding: 10px 0;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
}

.btn-reg:disabled {
  background-color: #c1b22859;
  cursor: not-allowed;
}

.social {
  margin-top: 20px;
  display: flex;
}

.social div {
  width: 100%;
  border-radius: 3px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.27);
  color: #eaf0fb;
  text-align: center;
}

.social div:hover {
  background-color: rgba(179, 117, 42, 0.47);
  cursor: pointer;
}

.terms {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  margin-top: 5px;
}

.terms .terms-label {
  font-size: 10px;
  cursor: pointer;
  color: #a88f8f;
}

input[type="checkbox"] {
  width: 15px;
  cursor: pointer;
  accent-color: #4caf50;
  margin-right: 10px;
}

.captcha-container canvas {
  background-color: #4e3d3d !important;
  border-radius: 5px;
  padding: 10px;
}

/* Tablet Screens (768px and below) */
@media (max-width: 768px) {
  .main-form {
    width: 85%;
    padding: 35px 20px;
  }

  .main-form h3 {
    font-size: 26px;
  }

  .shape:first-child {
    height: 100px;
    width: 100px;
    top: -50px;
    left: -50px;
  }

  .shape:last-child {
    height: 100px;
    width: 100px;
    bottom: -50px;
    right: -50px;
  }

  .background {
    width: 350px;
    height: 400px;
  }

  label {
    font-size: 14px;
  }

  input {
    height: 45px;
    font-size: 13px;
  }

  .btn-reg {
    font-size: 16px;
    padding: 10px 0;
  }

  .social div {
    font-size: 14px;
  }

  .terms-label {
    font-size: 9px;
  }
}

/* Mobile Screens (480px and below) */
@media (max-width: 480px) {
  .main-form {
    width: 90%;
    padding: 30px 15px;
  }

  .main-form h3 {
    font-size: 22px;
  }

  label {
    font-size: 12px;
  }

  input {
    height: 40px;
    font-size: 12px;
  }

  .btn-reg {
    font-size: 14px;
    padding: 8px 0;
  }

  .social div {
    font-size: 14px;
    padding: 8px;
  }

  .terms-label {
    font-size: 9px;
  }

  input[type="checkbox"] {
    width: 12px;
  }

  .shape:first-child, .shape:last-child {
    display: none; /* Hide the shapes for small screens */
  }

  .background {
    display: none; /* Hide the background for small screens */
  }
}
