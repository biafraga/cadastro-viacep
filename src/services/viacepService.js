export async function buscarEnderecoPorCep(cep) {
 const cepLimpo = cep.replace(/\D/g, "");
 if (cepLimpo.length !== 8) {
 throw new Error("O CEP deve conter exatamente 8 números.");
 }
 const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
 if (!resposta.ok) {
 throw new Error("Não foi possível consultar o CEP.");
 }
 const dados = await resposta.json();
 if (dados.erro) {
 throw new Error("CEP não encontrado.");
 }
 return {
 cep: dados.cep ?? "",
 rua: dados.logradouro ?? "",
 bairro: dados.bairro ?? "",
 estado: dados.uf ?? "",
 municipio: dados.localidade ?? "",
};
}