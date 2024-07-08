import React from 'react';
import '../css/Landing.css';

const App = () => {
  const handleStudentSignIn = () => {
    localStorage.setItem('signinType', 'studentsignin');
  };

  const handleFacultySignIn = () => {
    localStorage.setItem('signinType', 'facultysignin');
  };

  return (
    <div>
      <head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Meta */}
        <meta name="description" content="BMSCE Campus" />
        <meta name="author" content="Medha Tech Solutions" />
        {/* Favicon */}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://webcampus.bmsce.in/assets/img/favicon.png"
        />
        <title>BMSCE Campus</title>
        {/* Vendor css */}
        <link
          href="https://webcampus.bmsce.in/lib/@fortawesome/fontawesome-free/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="+"
          rel="stylesheet"
        />
        {/* DashForge CSS */}
        <link
          rel="stylesheet"
          href="https://webcampus.bmsce.in/assets/css/dashforge.css"
        />
        <link
          rel="stylesheet"
          href="https://webcampus.bmsce.in/assets/css/dashforge.auth.css"
        />
      </head>
      <body>
        <header className="navbar navbar-header navbar-header-fixed">
          <a href="#" id="mainMenuOpen" className="burger-menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </a>
          <div className="navbar-brand">
            <a href="" className="df-logo">
              COURSEREGISTRATION 
            </a>
          </div>
          {/* navbar-right */}
          <div className="navbar-right">
            <a
              href="https://bmsce.ac.in/"
              className="btn btn-buy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        </header>
        {/* content */}
        <div className="content content-fixed content-auth">
          <div className="container">
            <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
              {/* sign-wrapper */}
              <div className="sign-wrapper">
                <div className="wd-120p">
                  <h3 className="tx-color-01 mg-b-9">
                    Welcome to Course Registration Portal
                  </h3>
                  <p className="tx-color-03 tx-14 mg-b-40"></p>
                  <a 
                    href="/Login" 
                    className="btn btn-outline-primary btn-block"
                    onClick={handleStudentSignIn}
                  >
                    Student Sign In
                  </a>
                  <a 
                    href="/Login" 
                    className="btn btn-outline-danger btn-block"
                    onClick={handleFacultySignIn}
                  >
                    Faculty Sign In
                  </a>
                  <p className="tx-color-03 tx-14 mg-t-40">
                    If any queries or issues kindly contact <br />
                    CodeIO Developer team
                  </p>
                  <p className="mg-t-20 tx-16 tx-medium">
                    If any queries or issues kindly contact{' '}
                    <a href="" className="tx-pink">
                      codeio.bmsce.ac.in
                    </a>
                  </p>
                </div>
              </div>
              {/* sign-wrapper */}
            </div>
            {/* media */}
          </div>
          {/* container */}
        </div>
        {/* content */}
        <footer className="footer">
          <div>
            <span>© 2024 BMSCE COURSEREGISTRATION </span>
          </div>
          <div></div>
        </footer>
      </body>
    </div>
  );
};

export default App;
