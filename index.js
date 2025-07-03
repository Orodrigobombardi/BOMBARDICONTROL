materiais = {
  "Metais": [ { nome, quantidade, categoria } ],
  "Parafusos": [ { nome, quantidade, categoria } ],
}
function apagarCategoria(categoria) {
  if (confirm(`Tem certeza que deseja apagar a categoria "${categoria}" com todos os materiais?`)) {
    delete materiais[categoria];
    salvarLocal();
    atualizarCategorias();
    atualizarLista();
  }
}

