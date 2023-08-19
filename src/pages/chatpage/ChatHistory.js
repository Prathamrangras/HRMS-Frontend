import React, { useEffect, useState } from "react";
import { useChatContext } from "../../context/ChatsContext";
import customFetch from "../../utils/customFetch";
import { useFetchChats } from "../../hooks/useFetchChats";
import { useAuthContext } from "../../context/AuthContext";
import { isSameSender } from "../../utils/chatLogic";

const ChatHistory = ({ socket }) => {
  const { selectedChat, messages, setMessage } = useChatContext();
  const [loading, setLoading] = useState(false);
  const { user } = useAuthContext();

  const fetchMessages = async () => {
    setLoading(true);
    const resp = await customFetch.get(`message/${selectedChat}`);
    setMessage(resp.data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, [selectedChat]);

  useEffect(() => {
    socket.on("message recieved", (newMessageRecieved) => {
      setMessage([...messages, newMessageRecieved.data]);
    });
  }, [messages, setMessage, socket]);

  if (!loading) {
    <div>LOADING...</div>;
  }

  return (
    <ul
      id="chatHistory"
      className="chat-history list-unstyled mb-0 py-lg-5 py-md-4 py-3 flex-grow-1"
    >
      {messages.map((e, i) => (
        <li
          className={
            isSameSender(messages, e, i, user._id)
              ? "mb-3 d-flex flex-row align-items-end justify-content-start"
              : "mb-3 d-flex flex-row align-items-end justify-content-end"
          }
        >
          <div className="max-width-70 ">
            <div className="user-info mb-1">
              <img
                className="avatar sm rounded-circle me-1"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
                alt="avatar"
              />
              <span className="text-muted small">10:10 AM, Today</span>
            </div>
            <div className="card border-0 p-3 ">
              <div className="message">
                {e?.content}
                <p className="mb-0"></p>
              </div>
            </div>
          </div>
          <div className="btn-group">
            <div className="hide-toggle dropdown">
              <a
                className="nav-link py-2 px-3 text-muted dropdown-toggle"
                id=""
                aria-expanded="false"
                variant=""
              >
                <i className="fa fa-ellipsis-v"></i>
              </a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ChatHistory;
