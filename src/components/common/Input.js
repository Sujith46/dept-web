import styled from "styled-components";

const TextInput = styled.input`
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 1px solid #dddddd;
  background-color: transparent;
  width: 100%;
`;

const TextArea = styled.textarea`
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  border-bottom: 1px solid #dddddd;
  background-color: transparent;
  width: 100%;
`;

export const Input = ({ label, type, error }) => {
  return (
    <div className="input__container">
      <div className="label">{label && label.toUpperCase()}</div>
      <TextInput type={type} />
      {error && <div className="error">This field is required</div>}
    </div>
  );
};

export const InputTextArea = ({ label, type, error }) => {
    return (
      <div className="input__container textarea">
        <div className="label">{label && label.toUpperCase()}</div>
        <TextArea/>
        {error && <div className="error">This field is required</div>}
      </div>
    );
  };
