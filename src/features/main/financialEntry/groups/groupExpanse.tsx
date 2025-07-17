import Radio from "../../../../components/radio/radio";

interface GroupProps {
  onChange: (value: string) => void;
}

const GroupExpanses: React.FC<GroupProps> = ({ onChange }) => {
const expenses = [
  { id: "RENT", name: "aluguel" },
  { id: "MORTGAGE", name: "hipoteca" },
  { id: "UTILITIES", name: "serviços públicos" },
  { id: "GROCERIES", name: "mercado" },
  { id: "DINING_OUT", name: "refeições fora" },
  { id: "DELIVERY", name: "entrega" },
  { id: "FUEL", name: "combustível" },
  { id: "SUPPLIES", name: "suprimentos" },
  { id: "SUBSCRIPTIONS", name: "assinaturas" },
  { id: "CLOTHING", name: "roupas" },
  { id: "PERSONAL_CARE", name: "cuidados pessoais" },
  { id: "HEALTH", name: "saúde" },
  { id: "ENTERTAINMENT", name: "entretenimento" },
  { id: "TRAVEL", name: "viagem" },
  { id: "HOBBIES", name: "hobbies" },
  { id: "PHONE", name: "telefone" },
  { id: "INTERNET", name: "internet" },
  { id: "SOFTWARE", name: "software" },
  { id: "CREDIT_CARD", name: "cartão de crédito" },
  { id: "PETS", name: "pets" },
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
      {expenses.map((expenses) => (
        <Radio label={expenses.name} />
      ))}
    </div>
  );
};

export default GroupExpanses;
