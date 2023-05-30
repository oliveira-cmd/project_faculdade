function generateCurriculum() {
  const username = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const email = document.getElementById('email').value;
  const whatsapp = document.getElementById('whatsapp').value;
  const github = document.getElementById('github').value;
  const about_me = document.getElementById('bio').value;
  const popup = document.getElementById('popup');
  const popup_title = document.getElementById('popup_title');
  const popup_message = document.getElementById('content_popup');
  const url = `https://api.github.com/users/${github}/repos`;
  const image_user = `https://github.com/${github}.png`;
  const curriculumDiv = document.querySelector('body');

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.message != 'Not Found'){
        const repos = data.map(repo => repo.name);
        const privacy = data.map(repo => repo.private);
  
  
        curriculumDiv.innerHTML = `
          <div class="container mx-auto p-4">
            <h1 class="text-3xl font-bold mb-4">Currículo de  ${username} </h1>
        
            <div class="bg-white shadow-md p-6 rounded-lg flex justify-between  ">
              <div class="personal_informations">
                <h2 class="text-2xl font-bold mb-2">Informações Pessoais</h2>
                <p><strong>Nome:</strong> ${username}</p>
                <p><strong>Idade:</strong> ${age}</p>
                <p><strong>Email:</strong> ${email} </p>
                <p><strong>Telefone:</strong> ${whatsapp}</p>
                <p><strong>Sobre mim:</strong> ${about_me}</p>
              </div>
              <div class="bg-white-300">
                <img class="rounded-full" src="${image_user}">
              </div>
            </div>
        
            <div class="bg-white shadow-md p-6 mt-4 rounded-lg">
              <h2 class="text-2xl font-bold mb-2">Projetos Realizados</h2>
              <div class="mb-4">
                ${repos.map(
                  repo => ` 
                  <a href="https://github.com/${github}/${repo}">
                    <li>${repo} -  ${(!privacy ? 'Repositório Privado' : 'Repositório Público')}</li>
                  </a>
                  <a>
                  </a>
                  `
                ).join('')}
              </div>
            </div>
          </div>
          <style>
            img.rounded-full {
              display:flex;
              max-width:150px!important;
            }
          </style>
        `;
      } else {

        popup_title.innerHTML = `Erro no usuario ${github}!`;
        popup_message.innerHTML = `O usuario ${github} não existe no github, verifique os novamente`;
        popup.classList.remove('hidden');

        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    })
    .catch(error => console.error(error));
}


