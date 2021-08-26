window.onload = function(){
  const cadastrar = document.querySelector("#cadastrar");
  const nome = document.querySelector("#nome");
  const cusro = document.querySelector("#curso");
  const buscar = document.querySelector("#buscar");
  const id = document.querySelector("#id");
  const alterar = document.querySelector("#alterar");

//Método para cadstro do nome e do curso
  cadastrar.addEventListener("click", function(){
    let formdata = new FormData ();
    formdata.append('nome',`${nome.value}`);
    formdata.append('nome',`${curso.value}`);

    fetch("http://jussimarleal.com.br/exemplo_api/pessoa",
      {
      body: formdata,
      method:"post",
      mode:"cors",
      cache:'default'
      }).then(()=>{
          alert("Registro efetuado com sucesso");
          limparCampos();
        }

      );
        
  });
  //método lista pessoa
  buscar.addEventListener("click", function(){
    fetch (`http://jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, {
      method:"get",
      mode:"cors",
      cache:'default'
    }).then(Response=>{
      response.json().then(data => {
        nome.value = data["nome"];
        curso.value = data ["curso"];
      })
    })
  })
  //alterar
  alterar.addEventListener("click", function(){
    fetch (`http://jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, {
      method:"put",
      mode:"cors",
      cache:'default',
      headers:{
        'content-type':'application/json; charset=UTF-8'
      },
      body:JSON.stringify({
        'nome': `${nome.value}`,
        'curso': `${curso.value}`
      })
    }).then(()=>{
      alert("Registro alterado com sucesso!")
      limparCampos();
    });
  });

  //deletar
  deletar.addEventListener("click", function(){
    fetch (`http://jussimarleal.com.br/exemplo_api/pessoa/${id.value}`, {
      method:"delete",
      mode:"cors",
      cache:'default'
    }).then(()=>{
      alert("Registro alterado com sucesso!")
      limparCampos();
  })

  //limpa campos
  function limparCampos(){
    nome.value = "";
    curso.value = "";
    }
  });