import React, { ChangeEventHandler } from "react";

type Props = {
  register?: any;
  name: string;
  label: string;
  onchange?: ChangeEventHandler | any;
  inputRef?: any;
};

const Checkbox = ({ register, name, label, onchange, inputRef }: Props) => {
  return (
    <div className="form_container">
      <div className="checkbox">
        {register ? (
          <>
            <input type="checkbox" id={name} {...register(name)} />
            <span></span>
          </>
        ) : (
          <>
            <input type="checkbox" id={name} ref={inputRef && inputRef} onChange={(e) => onchange(e, name)} />
            <span></span>
          </>
        )}
        <label>{label}</label>
      </div>
    </div>
  );
};

export default Checkbox;
