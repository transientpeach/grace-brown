"use client";
import { CustomLink } from "@/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faBluesky } from "@fortawesome/free-brands-svg-icons";

import { useOverlay } from "@/context/OverlayContext";

export const Footer = () => {
  const { activeOverlay } = useOverlay();

  return (
    <footer
      inert={activeOverlay ? !!activeOverlay : undefined}
      className="w-full flex flex-col items-center mt-2 mb-12 border-t-neutral-700 dark:border-t-neutral-50 border-t"
    >
      <div className="w-full max-w-4xl px-4 pt-2 flex gap-2 justify-between flex-col md:px-16 md:flex-row">
        <div>
          <p>Grace Brown (she/her)</p>
        </div>
        <div>
          <ul className="flex flex-col md:flex-row gap-2 w-min">
            <li>
              <CustomLink
                href="mailto:%20grace.brown@glasgow.ac.uk"
                className="flex gap-0.5 items-center flex-basis-auto "
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                <span>Mail</span>
              </CustomLink>
            </li>

            <li>
              <CustomLink
                href="https://@graceebrown.bsky.social"
                className="flex gap-0.5 items-center"
              >
                <FontAwesomeIcon icon={faBluesky} size="lg" />
                <span>Bluesky</span>
              </CustomLink>
            </li>

            <li>
              <CustomLink
                href="https://www.linkedin.com/in/grace-brown-5050531b9/"
                className="flex gap-0.5 items-center"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
                <span>LinkedIn</span>
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
