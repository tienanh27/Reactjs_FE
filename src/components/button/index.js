import React from "react";
import { Button } from "antd";
import styled from "styled-components";

function ButtonComponent(props) {
  const { text, type } = props;
  return (
    <SButton type="primary" typeof={type} htmlType="submit">
      {text}
    </SButton>
  );
}

const SButton = styled(Button)`
  width: 458px;
  height: 64px;
`;

export default ButtonComponent;
