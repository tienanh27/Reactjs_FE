import React from "react";
import styled from "styled-components";
import { InputTypes } from "../../types/input";
import { Field } from "formik";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

function CustomInput(props: InputTypes) {
  const { placeholder, icon, name, size, type } = props;
  return (
    <div>
      <Field name={name}>
        {({ field }: any) => (
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
