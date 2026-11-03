import InputField from "./InputField";

export default function Contato({ formulario, onChange }) {
 return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
    <h2 className="mb-5 text-xl font-bold text-slate-900">
        Contato
    </h2>
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
    <InputField
        label="Telefone"
        name="telefone"
        value={formulario.telefone}
        onChange={onChange}
        placeholder="Telefone fixo"
    />
    <InputField
        label="Celular"
        name="celular"
        value={formulario.celular}
        onChange={onChange}
        placeholder="Celular"
        required
    />
    <InputField
        label="Email Secundário"
        name="emailSecundario"
        type="email"
        value={formulario.emailSecundario}
        onChange={onChange}
        placeholder="Digite um email alternativo"
    />
    </div>
    </section>
 );
}
