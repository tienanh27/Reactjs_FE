import { Input } from "antd";
import { Field } from "formik";
import React from "react";
import styled from "styled-components";

function CustomInput(props) {
  const { placeholder, icon, name, size, type } = props;
  return (
    <div>
      <Field name={name}>
        {({ field }) => (
          <div>
            <SInput
              {...field}
              type={type}
              placeholder={placeholder}
              prefix={icon}
            />
          </div>
        )}
      </Field>
    </div>
  );
}

const SInput = styled(Input)`
  width: 458px;
  height: 64px;
  margin: 10px 0px;
`;

export default CustomInput;
