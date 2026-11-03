import InputField from "./InputField";

export default function Endereco({
    formulario,
    onChange,
    buscandoCep,
    erroCep,
}) {
 return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">

    <h2 className="mb-5 text-xl font-bold text-slate-900">
        Endereço
    </h2>

    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
    <InputField
        label="CEP"
        name="cep"
        value={formulario.cep}
        onChange={onChange}
        placeholder="Digite apenas números"
        required
        maxLength={9}
        inputMode="numeric"
    />
    <InputField
        label="Rua"
        name="rua"
        value={formulario.rua}
        onChange={onChange}
        placeholder="Rua"
    />
    <InputField
        label="Número"
        name="numero"
        value={formulario.numero}
        onChange={onChange}
        placeholder="Número"
        required
    />
    <InputField
        label="Complemento"
        name="complemento"
        value={formulario.complemento}
        onChange={onChange}
        placeholder="Casa, apartamento, bloco..."
    />
    <InputField
        label="Bairro"
        name="bairro"
        value={formulario.bairro}
        onChange={onChange}
        placeholder="Bairro"
    />
    <InputField
        label="Estado"
        name="estado"
        value={formulario.estado}
        onChange={onChange}
        placeholder="UF"
    />
    <InputField
        label="Município"
        name="municipio"
        value={formulario.municipio}
        onChange={onChange}
        placeholder="Município"
    />
    </div>
    {buscandoCep && (
    <p className="mt-4 rounded-lg bg-blue-50 px-4 py-3
    text-sm font-semibold text-blue-700">
        Buscando endereço pelo CEP...
    </p>
    )}
    {erroCep && (
    <p className="mt-4 rounded-lg bg-red-50 px-4 py-3
    text-sm font-semibold text-red-700">
    {erroCep}
    </p>
    )}
    </section>
 );
}