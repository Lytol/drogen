import React from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

const Dot = (props) => {
  const position = {
    top: props.top,
    left: props.left
  }
  const override = {
    width: props.size,
    height: props.size,
    backgroundColor: props.color
  }

  return (
    <div className={styles.dot} style={position}>
      <div className={styles.outer} style={override} />
      <div className={styles.inner} style={override} />
    </div>
  )
}

class Drogen extends React.Component {
  render() {
    const {children, color, size, top, left} = this.props

    return (
      <div className={styles.drogen}>
        {children}
        <Dot color={color} size={size} top={top} left={left} />
      </div>
    )
  }
}

Drogen.propTypes = {
  children: PropTypes.element.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  top: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
  left: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ])
}

Drogen.defaultProps = {
  color: "#39c",
  size: "32px",
  top: 0,
  left: 0
}

export default Drogen
