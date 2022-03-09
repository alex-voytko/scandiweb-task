import { v4 as uuidv4 } from "uuid";

function CreateInputField({ array, handleChange }) {
  return (
    <>
      {array.map(item => (
        <input
          key={uuidv4()}
          required={item[0]}
          type={item[1]}
          name={item[2]}
          value={item[3]}
          onChange={handleChange}
        />
      ))}
    </>
  );
}

export default CreateInputField;
