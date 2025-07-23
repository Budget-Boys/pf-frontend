import Input from "../../../components/input/input";

const Settigns: React.FC = () => {
  return (
    <div className="max-w-xl mx-auto p-6 space-y-8">
      <div>
        <h2 className="text-lg font-semibold">Nome</h2>
        <p className="text-sm text-gray-500 mb-1">
          Isso permitirá que você envie ou altere seu nome exibido.
        </p>
        <Input placeholder="Nome" icon="arrow-circle-right" type="text" />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Endereço de E-mail</h2>
        <p className="text-sm text-gray-500 mb-1">
          Este e-mail não pode ser alterado.
        </p>
        <Input placeholder="E-mail" icon="envelope" type="text"  />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Data de Nascimento</h2>
        <p className="text-sm text-gray-500 mb-1">
          Esta informação não será exibida em outros perfis.
        </p>
        <Input placeholder="01 de Janeiro de 1998" icon="calendar-day" type="date" />
      </div>

      <div>
        <h2 className="text-lg font-semibold">Cargo Atual</h2>
        <p className="text-sm text-gray-500 mb-1">
          Esta informação não será exibida em outros perfis.
        </p>
        <Input placeholder="Trabalho atual" icon="briefcase" type="text" />
      </div>

      <div>
        <h2 className="text-lg font-semibold mt-8">Alterar Senha</h2>
        <p className="text-sm text-gray-500 mb-4">
          Você pode alterar sua senha a qualquer momento que achar necessário por segurança.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Sua senha atual</label>
          <p className="text-sm text-gray-500 mb-1">
            Isso confirmará que é você quem deseja alterar a senha.
          </p>
          <div className="relative">
            <Input placeholder="********" icon="" type="password" />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Nova senha</label>
          <p className="text-sm text-gray-500 mb-1">
            Digite sua nova senha com no mínimo 6 caracteres.
          </p>
          <div className="relative">
            <Input placeholder="********" icon="" type="password" />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Confirme a nova senha</label>
          <p className="text-sm text-gray-500 mb-1">
            Digite a mesma senha inserida anteriormente.
          </p>
          <div className="relative">
            <Input placeholder="********" icon="" type="password" />
          </div>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
          Salvar Alterações
        </button>
      </div>
    </div>
  );
};

export default Settigns;
