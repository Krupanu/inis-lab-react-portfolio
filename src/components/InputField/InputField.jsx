import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./InputField.module.css";
export default function InputField() {
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  function submit(event) {
    event.preventDefault();
    if (!value.trim()) {
      setError(true);
      setMessage("Введите текст сообщения.");
      return;
    }
    console.log(value);
    setError(false);
    setMessage("Значение выведено в консоль: " + value);
  }
  return (
    <form className={styles.form} onSubmit={submit}>
      <label className="field">
        Сообщение
        <input
          aria-invalid={error}
          aria-describedby="result"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
            setError(false);
          }}
          placeholder="Расскажите о вашей идее"
        />
      </label>
      <Button type="submit">Показать в консоли →</Button>
      <p id="result" role="status" className={error ? "error" : "status"}>
        {message}
      </p>
    </form>
  );
}
