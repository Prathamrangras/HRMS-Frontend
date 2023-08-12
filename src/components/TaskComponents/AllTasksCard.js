import React from "react";

const AllTasksCard = (props) => {
  const tasksInProgress = props.tasks.filter(
    (e) => !e.isCompleted && e.submission === null
  );
  const tasksReview = props.tasks.filter((e) => !e.isCompleted && e.submission);
  const tasksCompleted = props.tasks.filter((e) => e.isCompleted);
  return (
    <>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
        <h6 className="fw-bold py-3 mb-0">In Progress</h6>
        <div className="Droppable">
          {tasksInProgress.map((e) => (
            <div type="grag" data="MEDI1UM" draggable="true">
              <div class="dd-handle mt-2">
                <div class="task-info d-flex align-items-center justify-content-between">
                  <h6 class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                    {e.title}
                  </h6>
                  <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                    <div class="avatar-list avatar-list-stacked m-0">
                      <img
                        class="avatar rounded-circle small-avt"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                        alt=""
                      />
                      <img
                        class="avatar rounded-circle small-avt"
                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
                        alt=""
                      />
                    </div>
                    <span class="badge bg-warning text-end mt-2">
                      {e.Priority}
                    </span>
                  </div>
                </div>
                <p class="py-2 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                  nec scelerisque massa.
                </p>
                <div class="tikit-info row g-3 align-items-center">
                  <div class="col-sm">
                    <ul class="d-flex list-unstyled align-items-center flex-wrap">
                      <li class="me-2">
                        <div class="d-flex align-items-center">
                          <i class="icofont-flag"></i>
                          <span class="ms-1">{e.lastDate}</span>
                        </div>
                      </li>
                      <li class="me-2">
                        <div class="d-flex align-items-center">
                          <i class="icofont-ui-text-chat"></i>
                          <span class="ms-1">5</span>
                        </div>
                      </li>
                      <li>
                        <div class="d-flex align-items-center">
                          <i class="icofont-paper-clip"></i>
                          <span class="ms-1">5</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm text-end">
                    <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                      Project Name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
        <h6 className="fw-bold py-3 mb-0">Needs Review</h6>
        <div className="Droppable">
          {tasksReview ? (
            tasksReview.map((e) => (
              <div type="grag" data="MEDI1UM" draggable="true">
                <div class="dd-handle mt-2">
                  <div class="task-info d-flex align-items-center justify-content-between">
                    <h6 class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                      {e.title}
                    </h6>
                    <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                      <div class="avatar-list avatar-list-stacked m-0">
                        <img
                          class="avatar rounded-circle small-avt"
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                          alt=""
                        />
                        <img
                          class="avatar rounded-circle small-avt"
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
                          alt=""
                        />
                      </div>
                      <span class="badge bg-warning text-end mt-2">
                        {e.Priority}
                      </span>
                    </div>
                  </div>
                  <p class="py-2 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    id nec scelerisque massa.
                  </p>
                  <div class="tikit-info row g-3 align-items-center">
                    <div class="col-sm">
                      <ul class="d-flex list-unstyled align-items-center flex-wrap">
                        <li class="me-2">
                          <div class="d-flex align-items-center">
                            <i class="icofont-flag"></i>
                            <span class="ms-1">{e.lastDate}</span>
                          </div>
                        </li>
                        <li class="me-2">
                          <div class="d-flex align-items-center">
                            <i class="icofont-ui-text-chat"></i>
                            <span class="ms-1">5</span>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-center">
                            <i class="icofont-paper-clip"></i>
                            <span class="ms-1">5</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm text-end">
                      <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                        Project Name
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h6>No tasks need to be Reviewed</h6>
          )}
        </div>
      </div>
      <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-12 mt-xxl-4 mt-xl-4 mt-lg-4 mt-md-4 mt-sm-4 mt-4">
        <h6 className="fw-bold py-3 mb-0">Completed</h6>
        <div className="Droppable">
          {tasksCompleted ? (
            tasksCompleted.map((e) => (
              <div type="grag" data="MEDI1UM" draggable="true">
                <div class="dd-handle mt-2">
                  <div class="task-info d-flex align-items-center justify-content-between">
                    <h6 class="light-success-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">
                      {e.title}
                    </h6>
                    <div class="task-priority d-flex flex-column align-items-center justify-content-center">
                      <div class="avatar-list avatar-list-stacked m-0">
                        <img
                          class="avatar rounded-circle small-avt"
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAIAAMFBgcECQL/2gAIAQEAAAAAP2m+MfR7JXVDIEpUXok0N0U9MkOoDIvjXrDwY3AuTe0VvM2H1pn/xAAXAQEBAQEAAAAAAAAAAAAAAAAHBQEC/9oACAECEAAAAMi2uThHCixT/8QAFgEBAQEAAAAAAAAAAAAAAAAABgEF/9oACAEDEAAAALr5FfAVqYz/AP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwQFBgAREhMhBwgUMVEQIjJBQmEVFyOislJUcaHC/9oACAEBAAE/ANdq2eQdmuBZBmEsSzTUcIWlhbylqZmEcSn7cR3bWV5nlWdXSe8ZVe6q4VUjlgJXPLiB+mJPhRR6DWI5flGEXOC84teaqgqo3BJiciOQD6ZU+F1Poddl2dQdouC2DL1jEU1XCUqYV8oqmFikqj7bjce3vg0dxuPZhabdbIJJ56nJKVeVEN2cJTzyaxfu8ZreKgG8JFaKEOQZZyHlcA/REv8A0Rr8pMVgwWrwmlo94ZEeUVMuxn8Xt0nLf1DXdKoa+39md1tl1p5IJ6fIakGGToyK9PBIPb3ocpOHY7gV1jg55gyqKd4S3DzI0pJ0df36s+ZWW64nR5gJWSglgWSUIjzNC/k6MIwTuh6HV1zCy2zE6zLjI0lBFA0kYdHhaZvJEUSAHdz0Gu7NlT5fj+c3SSHkNPk8kwi34+CN6WFEH7PbmuFYrnln/BMutUddRCZZo0LvG6SKCA6PGVZTqiw3DMG8TZcMpTT0hk580Znln/WICk7ysx8gNVOJYpnLxWTMaPxNCr8+GITywfrqCoPFEynyY6xLD8XwS0/gmJWuOhoTK0zKrvIzyMAC7vISzH2Xq6pabfNWFdyoARPVj0A1W5Neq/jWWsZEb6IvcH+Nx11z46ccyWQR9VVWJA95zwqOvqTsBppCfmdz1Y6osnvdBwLFWM6L9Evv/wCz11Y7tHdbbDWAcJIIZfRh0I1maGS3QIPnUr/E68J9tVFI/LXgEm/Ni+AKTtxjf4vl6/MDXhPtrwn21hiGO3Tqf7hv4jX/xAAkEQACAQMCBwEBAAAAAAAAAAABAgMABBEFEgYHEyEyUXEUMf/aAAgBAgEBPwAkAEk4Aq616xtnSNHErMwB2dwo95pSGUMpyCMipESRHR/FgQfhrp6at+IP0J0jcbOpvG3++P2o0SONETxVQB8Fcy+ItRt9XXS4LuSG3SBGZY227i/vFNdYgjHWfBdjt3dsjHfFctOItRuNXOlz3ck1u8DsFkYttKes1//EAB8RAQEAAgIDAQEBAAAAAAAAAAECAxEABAUTFBIxUf/aAAgBAwEBPwAFQDa863hO52Iu6j1hKn6/q8RlZTSciqi5uXVSic+vO+Le1632mL9a5d1d1dO6pV54Dr9P5nPmxTeRtBo3oOe/Fvnn+v1PmnPhxTGQsFk1sf8Aef/Z"
                          alt=""
                        />
                        <img
                          class="avatar rounded-circle small-avt"
                          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD//gAfQ29tcHJlc3NlZCBieSBqcGVnLXJlY29tcHJlc3P/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIADAAMAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAHAAUGCAECAwT/2gAIAQEAAAAAv9gYonZUaCmxrkabRSie8qEhvzGqcwin5A7jG5oVrq69GexX/8QAGAEBAAMBAAAAAAAAAAAAAAAABgADBQT/2gAIAQIQAAAAqGM4QX8ufof/xAAXAQEBAQEAAAAAAAAAAAAAAAAGAwUH/9oACAEDEAAAAKLyFlRXrWxj/wD/xAAqEAACAgIBAgUEAgMAAAAAAAABAgMEBREGACEHEhMxMhAUQXEIgVKxwv/aAAgBAQABPwDqxKsMUkrfFFLH9Dq3dsXZWkmc6J7LvsB1TvWKUqyQyEaPdd9j1BKs8MUy+zqGH6P15ldtVMLbFAoLDROUd4zIg8g2R5VKk71roZrNUcfic9k5Kk1O81YPVpV5ZJovuteT0mVmM3lJHm0g2NsOjmczdoZbPY2WrDRpNYCVbleWOaUVfn6rMyGEsQfLtToaJ64VfuW8HTfIpEtn0lZ/RVlQBu4QByTtQdE/n65+qJMbLPoj7cGbQGyVUdx+9dUuNYOrYhvU6x2nmeuvrSPBD6g0WgiZikewfdAOr3GsHZnmv3a3y09getJHBN6Y0GnjVhHJoD3cHrj0IXGwWNnVlROARohXG1BH6+vOOc0eF06809d7FiwWEMCkLsL8iT+AN9RZDkmfxVq9xOOtj614TRirblcms52plrSxptRvuEKkA9SWuTYHE07fMRWyVLHrDGadWZ92nXQEtuaRAXG/dAoBPv1wHxCx3N6lqWtXatZqlRPAx82vN8SG/IP055zzGcFx0Vq7E8887MlavH2MjKNkk/hR1y7xGynM7sE+RqQQQQB1hjh2Socj5Mfke3XhBnxYtT8YlcEyBp6mzruPmg/314v5v7Z4uNo4VlCzWgG33PwT/o9cL59lODXrNnHVYJ4rIRZ45tgsqf4ke3Xh/wA+xnOcfLYpwvXsQFVsQSdyjN3GiPdT1/IJDLb4wD7CK2R/ZToVgd9vY9YSWXF5nF5KFzG9a1FIGHYgBu/9Edcgllymdy+RmcyPPblfzE77Fuw/QHRra129zrr+PyGK3ycfgx1Cf6L9f//EACIRAAIBAwQCAwAAAAAAAAAAAAEDAgAREwQSMTIhIyJBgf/aAAgBAgEBPwB7ApTGE8CvflzZPlu7X+6QwNUtgN7inxXNTItNoEWNYvfjzjttv54pEIQVCC+oFhWpcLyVLisGlvl877/lad4MorHFf//EACURAAAFAwQCAwEAAAAAAAAAAAECAwQRAAUSExQyQQYiFiNRY//aAAgBAwEBPwBFMVVSEDsa+jS0dMMI4x1SpBTVOQehpig5cO0EWaYqLmN6FDuts71drtB3E44SXn+TMU+Qct3a6LxIU1ym9yj1XhFkZJ29rdhTydqZwcR4hIlgKGyD8h3/AK6GlqY/2mK83sjFS3ursCeLtPCTgPIJAsDX/9k="
                          alt=""
                        />
                      </div>
                      <span class="badge bg-warning text-end mt-2">
                        {e.Priority}
                      </span>
                    </div>
                  </div>
                  <p class="py-2 mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    id nec scelerisque massa.
                  </p>
                  <div class="tikit-info row g-3 align-items-center">
                    <div class="col-sm">
                      <ul class="d-flex list-unstyled align-items-center flex-wrap">
                        <li class="me-2">
                          <div class="d-flex align-items-center">
                            <i class="icofont-flag"></i>
                            <span class="ms-1">{e.lastDate}</span>
                          </div>
                        </li>
                        <li class="me-2">
                          <div class="d-flex align-items-center">
                            <i class="icofont-ui-text-chat"></i>
                            <span class="ms-1">5</span>
                          </div>
                        </li>
                        <li>
                          <div class="d-flex align-items-center">
                            <i class="icofont-paper-clip"></i>
                            <span class="ms-1">5</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="col-sm text-end">
                      <div class="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small">
                        Project Name
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h6>No tasks completed Yet</h6>
          )}
        </div>
      </div>
    </>
  );
};

export default AllTasksCard;
