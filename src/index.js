import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

const Dot = (props) => {
  const override = {
    width: props.size,
    height: props.size,
    backgroundColor: props.color
  }

  return (
    <div className={styles.dot}>
      <div className={styles.outer} style={override} />
      <div className={styles.inner} style={override} />
    </div>
  )
}

class Drogen extends React.Component {
  render() {
    const {children, color, size} = this.props

    return (
      <div className={styles.drogen}>
        {children}
        <Dot color={color} size={size} />
      </div>
    )
  }
}

Drogen.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired
}

Drogen.defaultProps = {
  color: "#39c",
  size: "32px"
}

export default Drogen
