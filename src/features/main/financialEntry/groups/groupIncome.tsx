import Radio from "../../../../components/radio/radio";

interface GroupProps {
  onChange: (value: string) => void;
}

const GroupIncome: React.FC<GroupProps> = ({ onChange }) => {
  const income = [
    { id: "SALARY", name: "salario" },
    { id: "FREELANCE", name: "freelance" },
    { id: "BUSINESS", name: "negócios" },
    { id: "PENSION", name: "pensão" },
    { id: "INVESTMENTS", name: "investimentos" },
  ];

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const containerGroupStyled = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap' as const,
  };

  return (
    <div style={containerGroupStyled}>
      {income.map((income) => (
        <Radio label={income.name} />
      ))}
    </div>
  );
};

export default GroupIncome;
