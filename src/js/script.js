import { Api } from "./Api.js";
  
  const clientes = await Api.listarClientes()
  const listaClientes  = document.querySelector("ul")
  
  //EXEMPLO DE CONSTRUÇÃO DO MÉTODO
  function templateClientes(clientes){
  
    clientes.forEach(({nome,idade,cpf,data_nasc,sexo,email,endereco,telefone_fixo})=>{
        const {cep,rua,numero,bairro,cidade,estado} = endereco
        const li = document.createElement("li")
        
        li.innerHTML = `
            <p>Nome: ${nome}</p>
            <p>Idade: ${idade}</p>
            <p>CPF: ${cpf}</p>
            <p>Data de nascimento: ${data_nasc}</p>
            <p>Sexo: ${sexo}</p>
            <p>E-mail: ${email}</p>
            <p>Telefone: ${telefone_fixo}</p>
  
            <h3>Endereço:</h3>
            <p>CEP: ${cep}</p>
            <p>Rua: ${rua}</p>
            <p>Numero: ${numero}</p>
            <p>Bairro: ${bairro}</p>
            <p>Cidade: ${cidade}</p>
            <p>Estado: ${estado}</p>
        `
        
        listaClientes.appendChild(li)
    })
  
  }
templateClientes(clientes)
  
  