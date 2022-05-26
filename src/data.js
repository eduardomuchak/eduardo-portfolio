import Trivia from './images/trivia.gif';
import TrybeTunes from './images/trybetunes.gif';
import TrybeWallet from './images/trybewallet.gif';

const Projects = [
        {
        title: 'Trivia Game',
        gitHubURL: 'https://github.com/eduardomuchak/17-trivia-game',
        vercelURL: 'https://trivia-eduardomuchak.vercel.app/',
        description: 'Projeto desenvolvido em grupo durante o módulo de Front-End do curso da Trybe. A concepção do projeto foi criar um jogo de perguntas e respostas que somasse os pontos da pessoa usuária',
        technologies: ['API Trivia', 'Bootstrap', 'CSS', 'JavaScript', 'React Router Dom', 'ReactJS', 'Redux'],
        image: `${Trivia}`,
      },
      {
        title: 'Trybe Wallet',
        gitHubURL: 'https://github.com/eduardomuchak/16-trybe-wallet',
        vercelURL: 'https://trybewallet-eduardomuchak.vercel.app/',
        description: 'Primeiro projeto do módulo de Front-End da Trybe em que usamos Redux. O projeto consistia em criar uma aplicação que ajudasse a pessoa usuária a gerenciar suas despesas em diversas moedas',
        technologies: ['API Cotação de Moedas', 'Bootstrap', 'CSS', 'JavaScript', 'React Router Dom', 'ReactJS', 'Redux'],
        image: `${TrybeWallet}`,
      },
      {
        title: 'Trybe Tunes',
        gitHubURL: 'https://github.com/eduardomuchak/12-trybe-tunes',
        vercelURL: 'https://trybetunes-eduardomuchak.vercel.app/',
        description: 'O projeto consistia em aplicar os conceitos de Estado do componente criando uma aplicação que consumisse informações da API do iTunes para recriarmos uma aplicação de busca e reprodução de músicas.',
        technologies: ['API iTunes', 'CSS', 'JavaScript', 'ReactJS', 'React Router Dom'],
        image: `${TrybeTunes}`,
      }
    ]
    
    export default Projects;