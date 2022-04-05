import axios from 'axios'

class Api {
  static async getAddress(cep) {
    const response = new Address(
      (await axios.get(`https://viacep.com.br/ws/${cep}/json/`)).data
    )
    return response
  }
}

//Criação da Classe de endereços
class Address {
  constructor({ rua, bairro, cidade, uf }) {
    ;(this.rua = rua),
      (this.bairro = bairro),
      (this.cidade = cidade),
	  (this.uf = uf)
  }
}

Api.getAddress('96030080').then(v => {
  console.log(v)
})
