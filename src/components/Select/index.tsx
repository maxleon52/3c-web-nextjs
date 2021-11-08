import * as S from "./styles";

interface SelectProps {
  title: string;
  data: string[];
}

function Select({ title, data }: SelectProps) {
  return (
    <S.Container>
      <h1>{title}</h1>
      {data.map((item, index) => (
        <option key={index} value="">{item}</option>
      ))}
    </S.Container>
  );
}

export default Select;
