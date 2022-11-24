import axios from "axios";
export default class LivrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get("https://livraira.herokuapp.com/livros");
    return response.data;
  }
  async buscarLivro(id) {
    const response = await axios.get(`https://livraira.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async adicionarLivro(livro) {
    const response = await axios.post("https://livraira.herokuapp.com/livros", livro);
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(`https://livraira.herokuapp.com/livros/${id}`);
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://livraira.herokuapp.com/livros/${livro.id}`,
      livro
    );
    return response.data;
  }
}
