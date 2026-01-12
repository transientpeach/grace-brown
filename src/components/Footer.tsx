export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center mt-2 border-t-neutral-700 dark:border-t-neutral-50 border-t">
      <div className="w-full max-w-6xl px-16 pt-2 flex gap-2 justify-between  flex-col md:flex-row">
        <div>
          <p>Grace Brown (she/her)</p>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row gap-2">
            <li>
              <a
                href="mailto:%20grace.brown@glasgow.ac.uk"
                className="flex gap-0.5"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="fill-current"
                >
                  <path d="M19,5H5c-1.1,0-2,.9-2,2v10c0,1.1.9,2,2,2h14c1.1,0,2-.9,2-2V7c0-1.1-.9-2-2-2zm.5,12c0,.3-.2.5-.5.5H5c-.3,0-.5-.2-.5-.5V9.8l7.5,5.6,7.5-5.6V17zm0-9.1L12,13.6,4.5,7.9V7c0-.3.2-.5.5-.5h14c.3,0,.5.2.5.5v.9z"></path>
                </svg>
                <span>Mail</span>
              </a>
            </li>

            <li>
              <a
                href="https://@graceebrown.bsky.social"
                className="flex gap-0.5"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="fill-current"
                >
                  <path d="M6.3,4.2c2.3,1.7,4.8,5.3,5.7,7.2.9-1.9,3.4-5.4,5.7-7.2,1.7-1.3,4.3-2.2,4.3.9s-.4,5.2-.6,5.9c-.7,2.6-3.3,3.2-5.6,2.8,4,.7,5.1,3,2.9,5.3-5,5.2-6.7-2.8-6.7-2.8,0,0-1.7,8-6.7,2.8-2.2-2.3-1.2-4.6,2.9-5.3-2.3.4-4.9-.3-5.6-2.8-.2-.7-.6-5.3-.6-5.9,0-3.1,2.7-2.1,4.3-.9h0Z"></path>
                </svg>
                <span>Bluesky</span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/grace-brown-5050531b9/"
                className="flex gap-0.5"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  focusable="false"
                  className="fill-current"
                >
                  <path d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"></path>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
