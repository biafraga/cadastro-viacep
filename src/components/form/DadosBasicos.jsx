import InputField from "./InputField";

export default function DadosBasicos({ formulario, onChange }) {
 return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
    <h2 className="mb-5 text-xl font-bold text-slate-900">
        Dados Básicos
    </h2>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
    <InputField
        label="Nome"
        name="nome"
        value={formulario.nome}
        onChange={onChange}
        placeholder="Digite o nome completo"
        required
    />
    <InputField
        label="Email"
        name="email"
        type="email"
        value={formulario.email}
        onChange={onChange}
        placeholder="Digite o email principal"
        required
    />
    <InputField
        label="Senha"
        name="senha"
        type="password"
        value={formulario.senha}
        onChange={onChange}
        placeholder="Digite uma senha"
        required
    />
    <InputField
        label="Data de Nascimento"
        name="dataNascimento"
        type="date"
        value={formulario.dataNascimento}
        onChange={onChange}
        required
    />
    </div>
    </section>
 );
}
