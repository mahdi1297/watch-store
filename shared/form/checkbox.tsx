import React, { ChangeEventHandler } from "react";

type Props = {
  register?: any;
  name: string;
  label: string;
  onchange?: ChangeEventHandler | any;
};

const Checkbox = ({ register, name, label, onchange }: Props) => {
  return (
    <div className="form_container">
      <div className="checkbox">
        {register ? (
          <>
            <input type="checkbox" {...register(name)} />
            <span></span>
          </>
        ) : (
          <>
            <input type="checkbox" onChange={(e) => onchange(e, name)} />
            <span></span>
          </>
        )}
        <label>{label}</label>
      </div>
    </div>
  );
};

export default Checkbox;
