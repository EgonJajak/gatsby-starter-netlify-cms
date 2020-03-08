import React from "react";
import PropTypes from "prop-types";
import { MyPageTemplate } from "../../templates/my-page";

const MyPagePreview = ({ entry, widgetFor }) => {
  return (
    <MyPageTemplate
      content={entry.getIn(["data", "content"])}
    />
  );
};

MyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  })
};

export default MyPagePreview;
