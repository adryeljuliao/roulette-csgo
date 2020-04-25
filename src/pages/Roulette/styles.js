import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 980px;
  margin: auto;
  overflow: hidden;
  flex-direction: column;
  button {
    margin-top: 56px;
  }
  canvas {
    background-color: #ccc;
    margin-bottom: 16px;
  }
  .roll {
    position: relative;
  }
  .number_mark {
    background-color: #ccc;
    width: 1px;
    left: 50%;
    top: 0;
    position: absolute;
    height: 100%;
    z-index: 999;

    ::after,
    ::before {
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      position: absolute;
      content: '';
      left: 50%;
    }

    ::after {
      border-top: 14px solid #ccc;
      transform: translate(-50%, -8px);
    }
    ::before {
      border-bottom: 14px solid #ccc;
      transform: translate(-50%, 8px);
      bottom: 0;
    }
  }
`;

export const Numbers = styled.div`
  display: flex;
  /* transform: ${(props) =>
    !props.roll ? 'translate3d(0px, 0px, 0px)' : props.roll};
  transition-timing-function: cubic-bezier(0.12, 0.8, 0.38, 1);
  transition-duration: 6.79368s; */
  .number {
    padding: 10px;
    width: 60px;
    display: flex;
    color: #fff;
    justify-content: center;
  }
  .red {
    background-color: red;
  }
  .black {
    background-color: black;
  }
  .green {
    background-color: green;
  }
`;
