import React from "react";

export default function Content({ subHeader, content, className }) {
  return (
    <div className={className}>
      <b>{subHeader}:</b>
      <p title={content}>{content}</p>
    </div>
  );
}
