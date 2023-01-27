import React from "react";
import LoginModal from "../components/Login";

function Landing(){
    return(
      <div className="description">
        <div className="about-app">
          <h1>About</h1>
          <div className="about">
             <p>Dribble, is a platform for networking and self-promotion for digital designers and creatives. It is one of the world’s leading community for creatives and designers to share their work online and grow. It serves as a design portfolio platform, jobs and recruiting portal.</p>
          </div>
          <div className="started">
             <LoginModal />
          </div>
        </div>
      <div className="image">
            <img src="https://static.collectui.com/shots/3642841/for-you-medium" alt="logo" className="img2"></img>
            <img src="https://agentestudio.com/uploads/ckeditor/pictures/1565/content_user-profile-design-9.jpg" alt="logo" className="img3"></img>
            <img src="https://cdn.dribbble.com/users/1684289/screenshots/5836111/media/e4ff9ae546ca632df6fb9c07eee7d4fa.jpg?compress=1&resize=400x300&vertical=top" alt="logo" className="img4"></img>
        </div>
        <footer className="footer">
            <div>
              <p>Copyright @ 2023 All Rights Reserved by Dribbly</p>
            </div>
            <div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-facebook"></i></div>
                <span>Facebook</span>
              </div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-github"></i></div>
                <span>Github</span>
              </div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-twitter"></i></div>
                <span>Twitter</span>
              </div>
              <div className="button">
                <div className="icon"><i className="fa-brands fa-youtube"></i></div>
                <span>YouTube</span>
              </div>
            </div>
        </footer>
  </div>
    )
}
export default Landing;