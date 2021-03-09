import React from "react"
import PropTypes from "prop-types"

import styled from "styled-components"

const Container = styled.div`
  align-items: ${props => props.alignItems};
  animation: fadeInAnimation ease 0.75s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  background-color: ${props => props.backgroundColor};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  height: ${props => props.height};
  justify-content: space-between;
  margin: ${props => props.margin};
  max-width: ${props => props.maxWidth};
  min-height: ${props => props.minHeight};
  padding: ${props => props.padding};
  width: ${props => props.width};
  z-index: ${props => props.zIndex};
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (min-width: 1024px) {
    ${props => props.responsiveStyles}
  }
`

const ContainerComponent = ({
  alignItems,
  backgroundColor,
  children,
  display,
  flexDirection,
  height,
  margin,
  maxWidth,
  minHeight,
  padding,
  responsiveStyles,
  width,
  zIndex,
  ...props
}) => (
  <Container
    alignItems={alignItems}
    backgroundColor={backgroundColor}
    display={display}
    flexDirection={flexDirection}
    height={height}
    margin={margin}
    maxWidth={maxWidth}
    minHeight={minHeight}
    padding={padding}
    responsiveStyles={responsiveStyles}
    width={width}
    zIndex={zIndex}
    props={props}
  >
    {children}
  </Container>
)

ContainerComponent.propTypes = {
  alignItems: PropTypes.string,
  display: PropTypes.string,
  backgroundColor: PropTypes.string,
  flexDirection: PropTypes.string,
  height: PropTypes.string,
  margin: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.string,
  padding: PropTypes.string,
  responsiveStyles: PropTypes.object,
  width: PropTypes.string,
  zIndex: PropTypes.number,
}

ContainerComponent.defaultProps = {
  alignItems: "center",
  display: "block",
  backgroundColor: "transparent",
  flexDirection: "row",
  height: "100vh",
  margin: "0rem",
  maxWidth: "auto",
  minHeight: "auto",
  padding: "0rem",
  responsiveStyles: {},
  width: "100vw",
  zIndex: 1,
}

export default ContainerComponent
