import React from 'react'
import PropTypes from 'prop-types'
import { MyPageTemplate } from '../../templates/my-page'

const MyPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <MyPageTemplate
        content={data.content}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

MyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MyPagePreview
