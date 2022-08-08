import React, { useState } from "react";
import PortableText from "@sanity/block-content-to-react";
import "./collabration.css";
import CustomPopup from "./CustomPopup.js";
const CollabCard = (props) => {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };
  const serializers = {
    marks: {
      internalLink: ({ mark, children }) => {
        const { slug = {} } = mark;
        const href = `people/${slug.current}`;
        return <a href={href}>{children}</a>;
      },
      link: ({ mark, children }) => {
        // Read https://css-tricks.com/use-target_blank/
        const { href } = mark;
        return (
          <a href={href} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
    },
  };
  return (
    <>
      <div className={"collab-container"}>
        <div className="card" onClick={(e) => setVisibility(!visibility)}>
          <div className="imgBox">
            <img src={props.img} alt="alter" />
          </div>

          <CustomPopup
            onClose={popupCloseHandler}
            show={visibility}
            title={props.name}
          >
            <PortableText blocks={props.desc} serializers={serializers} />
          </CustomPopup>
        </div>
      </div>
    </>
  );
};

export default CollabCard;
