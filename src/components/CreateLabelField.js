import { v4 as uuidv4 } from "uuid";

function CreateLabelField({ array }) {
  return (
    <>
      {array.map(item => (
        <label key={uuidv4()} htmlFor={item[0]}>
          {item[1]}
        </label>
      ))}
    </>
  );
}

export default CreateLabelField;
