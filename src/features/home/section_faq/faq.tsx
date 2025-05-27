import React from 'react';
import style from './faq.module.sass'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Dados do FAQ
const faqs = [
  {
    id: 'faq1',
    question: 'Qual é a história do PinkFinances?',
    answer: 'A PinkFinances nasceu da visão de tornar as finanças acessíveis e simples para todos. Fundada por um grupo de jovens que identificaram a necessidade de uma abordagem mais intuitiva e leve para o controle financeiro, nosso objetivo é desmistificar o mundo do dinheiro, oferecendo ferramentas digitais amigáveis que empoderam as pessoas a gerenciar suas finanças com confiança e tranquilidade.'
  },
  {
    id: 'faq2',
    question: 'Posso utilizar o aplicativo em qualquer dispositivo?',
    answer: 'Sim! O PinkFinances é um aplicativo totalmente responsivo, projetado para funcionar perfeitamente em diversos dispositivos, incluindo smartphones, tablets e computadores. Você pode acessar e gerenciar suas finanças de qualquer lugar, a qualquer momento, bastando ter acesso à internet.'
  },
  {
    id: 'faq3',
    question: 'Onde posso fazer sugestões ou mandar elogios?',
    answer: 'Sua opinião é muito importante para nós e nos ajuda a melhorar! Você pode enviar suas sugestões, elogios ou relatar problemas diretamente através do nosso repositório no GitHub: https://github.com/BudgetBoys. Sinta-se à vontade para abrir uma issue ou entrar em contato por lá!'
  },
  {
    id: 'faq4',
    question: 'É seguro utilizar o PinkFinances?',
    answer: 'Sim, a segurança dos seus dados é nossa prioridade máxima. O PinkFinances utiliza criptografia de ponta a ponta e segue rigorosos protocolos de segurança para garantir que suas informações financeiras e pessoais estejam sempre protegidas e confidenciais. Investimos continuamente em tecnologias e práticas para oferecer um ambiente seguro e confiável.'
  },
];

const Faq: React.FC = () => {
  const [expandedPanel, setExpandedPanel] = React.useState<string | false>(false);

  const handleChange = (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedPanel(isExpanded ? panelId : false);
  };

  return (
    <div className={style.faq}>
      <div className={style.faq_container}>
        <div className={style.title_container}>
          <h1> Ficou com duvida? </h1>
        </div>
        {faqs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expandedPanel === faq.id}
            onChange={handleChange(faq.id)}
            className={style.accordion_item}
            elevation={0}
          >
            <AccordionSummary
              expandIcon={expandedPanel === faq.id ? <RemoveIcon /> : <AddIcon />}
              aria-controls={`${faq.id}-content`}
              id={`${faq.id}-header`}
              className={style.accordion_summary} >
              <Typography
                className={style.accordion_question}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              className={style.accordion_details}
            >
              <Typography
                className={style.accordion_answer}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};


export default Faq;