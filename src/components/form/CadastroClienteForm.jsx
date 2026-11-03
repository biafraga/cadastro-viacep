"use client";

import { useEffect, useState } from "react";
import DadosBasicos from "./DadosBasicos";
import Endereco from "./Endereco";
import Contato from "./Contato";
import { criarClienteInicial } from "@/models/clienteModel";
import { buscarEnderecoPorCep } from "@/services/viacepService";

export default function CadastroClienteForm() {
  const [formulario, setFormulario] = useState(criarClienteInicial);
  const [buscandoCep, setBuscandoCep] = useState(false);
  const [erroApi, setErroApi] = useState("");

  // Validação simples do CEP
  const cepLimpo = formulario.cep.replace(/\D/g, "");
  let erroValidador = "";
  if (cepLimpo.length > 8) {
    erroValidador = "O CEP deve conter exatamente 8 números.";
  }

  // Define qual erro vai mostrar na tela (erro de digitação ou erro da API)
  const erroCep = erroValidador || erroApi;

  function handleChange(event) {
    const { name, value } = event.target;
    setFormulario((estadoAtual) => ({
      ...estadoAtual,
      [name]: value,
    }));
  }

  useEffect(() => {
    // Só chama a API se o CEP tiver exatamente 8 números
    if (cepLimpo.length !== 8) {
      return;
    }

    let consultaCancelada = false;

    async function carregarEndereco() {
      try {
        setBuscandoCep(true);
        const endereco = await buscarEnderecoPorCep(cepLimpo);

        if (consultaCancelada) return;

        setErroApi("");
        setFormulario((estadoAtual) => ({
          ...estadoAtual,
          rua: endereco.rua,
          bairro: endereco.bairro,
          estado: endereco.estado,
          municipio: endereco.municipio,
        }));
      } catch (error) {
        if (consultaCancelada) return;

        setErroApi(error.message);
        setFormulario((estadoAtual) => ({
          ...estadoAtual,
          rua: "",
          bairro: "",
          estado: "",
          municipio: "",
        }));
      } finally {
        if (!consultaCancelada) {
          setBuscandoCep(false);
        }
      }
    }

    carregarEndereco();

    return () => {
      consultaCancelada = true;
    };
  }, [cepLimpo]);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Dados do formulário:", formulario);
    alert("Cadastro capturado! Verifique os dados no console.");
  }

  function handleLimpar() {
    setFormulario(criarClienteInicial());
    setErroApi("");
    setBuscandoCep(false);
  }

  return (
    <section className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-200 md:p-8">
      <div className="mb-8 border-b border-slate-200 pb-6">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          Aula prática
        </span>
        <h1 className="mt-4 text-3xl font-bold text-blue-700">
          Cadastro de Cliente
        </h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          Preencha os dados abaixo. Ao informar o CEP, o endereço será
          buscado automaticamente na API ViaCEP.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <DadosBasicos formulario={formulario} onChange={handleChange} />

        <Endereco
          formulario={formulario}
          onChange={handleChange}
          buscandoCep={buscandoCep}
          erroCep={erroCep}
        />

        <Contato formulario={formulario} onChange={handleChange} />

        <div className="flex flex-col gap-3 pt-2 md:flex-row md:justify-end">
          <button
            type="button"
            onClick={handleLimpar}
            className="rounded-lg bg-slate-200 px-5 py-3 font-bold text-slate-800 transition hover:bg-slate-300"
          >
            Limpar
          </button>
          <button
            type="submit"
            className="rounded-lg bg-blue-700 px-5 py-3 font-bold text-white transition hover:bg-blue-800"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </section>
  );
}