import React from "react";

const ChatScreen = () => {
  return (
    <div className="col-12 d-flex">
      <div className="px-4 py-3 py-md-4 chat-min-w">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control mb-1"
            placeholder="Search..."
          />
        </div>
        <div
          className="nav nav-pills justify-content-between text-center"
          role="tablist"
        >
          <a
            className="flex-fill rounded border-0 nav-link active"
            data-bs-toggle="tab"
            id="tab1"
            href="#!"
            role="tab"
            aria-selected="true"
          >
            Chat
          </a>
          <a
            className="flex-fill rounded border-0 nav-link"
            data-bs-toggle="tab"
            id="tab2"
            href="#!"
            role="tab"
            aria-selected="false"
          >
            Groups
          </a>
          <a
            className="flex-fill rounded border-0 nav-link"
            data-bs-toggle="tab"
            id="tab3"
            href="#!"
            role="tab"
            aria-selected="false"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="card card-chat-body border-0 order-1 w-100 px-4 px-md-5 py-3 py-md-4">
        <div className="chat-header d-flex justify-content-between align-items-center border-bottom pb-3">
          <div className="d-flex">
            <a href="hr-dashboard" title="Home">
              <i className="icofont-arrow-left fs-4"></i>
            </a>
            <a href="#!" title="">
              <img
                className="avatar rounded"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
                alt="avatar"
              />
            </a>
            <div className="ms-3">
              <h6 className="mb-0">Chris Fox</h6>
              <small className="text-muted">Last seen: 12:37 PM</small>
            </div>
          </div>
          <div className="d-flex">
            <a
              className="nav-link py-2 px-3 text-muted d-none d-lg-block"
              href="#!"
            >
              <i className="fa fa-camera"></i>
            </a>
            <a
              className="nav-link py-2 px-3 text-muted d-none d-lg-block"
              href="#!"
            >
              <i className="fa fa-video-camera"></i>
            </a>
            <a
              className="nav-link py-2 px-3 text-muted d-none d-lg-block"
              href="#!"
            >
              <i className="fa fa-gear"></i>
            </a>
            <a
              className="nav-link py-2 px-3 text-muted d-none d-lg-block"
              href="#!"
            >
              <i className="fa fa-info-circle"></i>
            </a>
            <a
              className="nav-link py-2 px-3 d-block d-xl-none chatlist-toggle"
              href="!#"
            >
              <i className="fa fa-bars"></i>
            </a>
            <div className="nav-item list-inline-item d-block d-xl-none">
              <div className="hide-toggle dropdown">
                <a
                  className="nav-link text-muted dropdown-toggle"
                  id="react-aria7741514642-:r2:"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-v"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
