import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="cloader">
        <div className="clface">
          <div className="clsface">
            <div id="h2" className="hand" />
          </div>
          <div className="top" />
          <div className="bottom" />
          <div className="left" />
          <div className="right" />
          <div id="sub" className="pin" />
          <div id="h1" className="hand" />
          <div id="main" className="pin" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .cloader {
  width: 10em;
  height: 10em;
  border: 4px solid white;
  border-radius: 50%;
  margin: 50px auto;
  position: relative;
  padding: 2rem;
}

.clface {
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-3px);
}

.top {
  height: 1em;
  width: 1em;
  content: '';
  background-color: white;
  border-radius: 5em;
  margin-top: -30px;
  margin-left: 42px;
}

.bottom {
  height: 10px;
  width: 4px;
  content: '';
  background-color: white;
  border-radius: 5em;
  margin-top: 135px;
  margin-left: 42px;
}

.left {
  height: 4px;
  width: 10px;
  content: '';
  background-color: white;
  border-radius: 5em;
  margin-top: -82px;
  margin-left: 112px;
}

.right {
  height: 4px;
  width: 10px;
  content: '';
  background-color: white;
  border-radius: 5em;
  margin-top: -4px;
  margin-left: -35px;
}

.clsface {
  position: absolute;
  width: 40px;
  height: 40px;
  margin-left: 24px;
  margin-top: 15px;
  border-radius: 6em;
  border: 2px solid #636363;
}

.hand {
  width: 65%;
  height: 4px;
  background-color: white;
  border-radius: 3em;
  border: none;
  position: absolute;
  top: 85%;
  left: -15%;
  transform-origin: 100%;
  transform: rotate(90deg);
}

.pin {
  width: 25%;
  height: 25%;
  border-radius: 50%;
  background: white;
  position: absolute;
  top: 86%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#sub {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  background: #636363;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#h1 {
  animation: rotate 4s linear infinite;
}

#h2 {
  width: 45%;
  left: 5%;
  top: 45%;
  background-color: #636363;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(90deg);
  }

  to {
    transform: rotate(450deg);
  }
}
`;

export default Loader;
