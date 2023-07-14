import React, { useState } from 'react';
import BannerImg from '../../assets/RegistrationBanner.png';
import classes from './RegistrationPage.module.css';
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
const RegistrationPage = () => {
  const [authenticate, setAuthenticate] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState();

  const [checkbox, setCheckbox] = useState(false);
  const [nameError, setNameError] = useState('');
  const [usernameError, setUserameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileError, setMobileError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
    // validateName();
  };
  const usernameHandler = (e) => {
    setUsername(e.target.value);
    // validateUsername();
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
    // validateEmail();
  };
  const mobileHandler = (e) => {
    setMobile(e.target.value);
    // validateMobile();
  };
  const toggleCheckbox = (e) => {
    setCheckbox(!checkbox);
    // validateCheckbox();
  };
  const validateName = () => {
    setNameError('');
    console.log('name len ' + name?.trim().length);
    if (name?.trim()?.length < 3) {
      setNameError("Name can't be empty( min length = 3)");
    }
  };
  const validateUsername = () => {
    setUserameError('');
    if (username?.trim()?.length < 3) {
      setUserameError("Userame can't be empty( min length = 3)");
    }
  };
  const validateEmail = () => {
    setEmailError('');
    let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!regex.test(email)) {
      setEmailError('Invalid Email');
    }
  };
  const validateMobile = () => {
    setMobileError('');
    if (mobile?.trim()?.length !== 10) {
      setMobileError('Mobile Number should be 10 characters');
    }
  };
  const validateCheckbox = () => {
    setCheckboxError('');
    if (!checkbox) {
      setCheckboxError('Accept to complete registration');
    }
  };

  const onSubmitHandler = () => {
    validateName();
    validateUsername();
    validateEmail();
    validateMobile();
    validateCheckbox();
    if (
      nameError.length === 0 &&
      emailError.length === 0 &&
      usernameError.length === 0 &&
      mobileError.length === 0 &&
      checkboxError.length === 0
    ) {
      setAuthenticate(true);
    }
    if (authenticate) {
      localStorage.setItem('name', name);
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('mobile', mobile);
    }
  };
  return (
    <div className={classes.RegisterContainer}>
      <div className={classes.LeftSection}>
        <img className={classes.BannerImg} src={BannerImg} alt="" />
        <h2>Discover new things on Superapp</h2>
      </div>
      <div className={classes.RegisterFormContainer}>
        <div className={classes.RegisterForm}>
          <h2>Super App</h2>
          <h4>Create your new account</h4>
          <form>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={nameHandler}
            />
            <p className={classes.ErrorMsg}>{nameError}</p>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={usernameHandler}
            />
            <p className={classes.ErrorMsg}>{usernameError}</p>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={emailHandler}
            />
            <p className={classes.ErrorMsg}>{emailError}</p>
            <Input
              type="number"
              placeholder="Mobile"
              value={mobile}
              onChange={mobileHandler}
            />
            <p className={classes.ErrorMsg}>{mobileError}</p>
          </form>
          <div className={classes.CheckBox}>
            <input type="checkbox" onClick={toggleCheckbox} />
            <label>Share my registration data with Superapp</label>
            <p className={classes.ErrorMsg}>{checkboxError}</p>
          </div>
          <Button
            className={classes.Button}
            bgColor="#72DB73"
            textColor="#fff"
            btnText="SIGN UP"
            onClick={onSubmitHandler}
          />

          <p>
            By clicking on Sign up. you agree to Superapp{' '}
            <span className={classes.HighlightSpan}>
              Terms and Conditions of Use
            </span>
          </p>
          <p>
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{' '}
            <span className={classes.HighlightSpan}>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
