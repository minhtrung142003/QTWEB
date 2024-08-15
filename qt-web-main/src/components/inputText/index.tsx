import "./styles.scss";

interface IInputText {
  title: string;
  isObligatory: boolean;
  category?: string;
}

const InputText = ({ isObligatory, title, category = "text" }: IInputText) => {
  return (
    <div className="inputText">
      <div className="inputText__title">
        {title}
        {isObligatory ? <span className="text-[#F04438]">*</span> : null}
      </div>
      <input type={category} className="inputText__input" />
    </div>
  );
};

export default InputText;
