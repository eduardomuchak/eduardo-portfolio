import PixelsArt from './images/pixels-art.gif';
import ToDoList from './images/to-do-list.gif';
import TrybeWarts from './images/trybewarts.gif';
import ShoppingCart from './images/shopping-cart.gif';
import SolarSystem from './images/solar-system.gif';
import TrybeTunes from './images/trybetunes.gif';
import TrybeWallet from './images/trybewallet.gif';
import Trivia from './images/trivia.gif';
import TrybeRecipes from './images/tryberecipes.gif';

const Projects = [
      {
        title: 'Trybe Recipes',
        gitHubURL: 'https://github.com/eduardomuchak/19-trybe-recipes',
        vercelURL: 'https://tryberecipes-eduardomuchak.vercel.app/',
        description: 'Último projeto desenvolvido em grupo durante o módulo de Front-End do curso da Trybe. O projeto consistia em criar uma aplicação mobile que pudesse auxiliar a pessoa usuária nos momentos de buscas e preparações de drinks e refeições.',
        technologies: ["API's The CocktailDB e The MealDB", 'Context API', 'JavaScript', 'React Router Dom', 'ReactJS', 'React Testing Library (RTL)', 'TailwindCSS'],
        image: `${TrybeRecipes}`,
      },
      {
        title: 'Trivia Game',
        gitHubURL: 'https://github.com/eduardomuchak/17-trivia-game',
        vercelURL: 'https://trivia-eduardomuchak.vercel.app/',
        description: 'Projeto desenvolvido em grupo durante o módulo de Front-End do curso da Trybe. A concepção do projeto foi criar um jogo de perguntas e respostas que somasse os pontos da pessoa usuária baseada no tempo de acerto da questão.',
        technologies: ['API Trivia', 'Bootstrap', 'CSS', 'JavaScript', 'React Router Dom', 'ReactJS', 'Redux'],
        image: `${Trivia}`,
      },
      {
        title: 'Trybe Wallet',
        gitHubURL: 'https://github.com/eduardomuchak/16-trybe-wallet',
        vercelURL: 'https://trybewallet-eduardomuchak.vercel.app/',
        description: 'Primeiro projeto do módulo de Front-End da Trybe em que usamos Redux. O projeto consistia em criar uma aplicação que ajudasse a pessoa usuária a acrescentar suas despesas em diversas moedas para facilitar a visualização de gastos.',
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
      },
      {
        title: 'Solar System',
        gitHubURL: 'https://github.com/eduardomuchak/10-solar-system',
        vercelURL: 'https://solarsystem-eduardomuchak.vercel.app/',
        description: 'Primeiro projeto feito no módulo de Front End da Trybe. O projeto consistia em praticar e aplicar o conceito de Componentes de Classe do React criando uma página com informações das missões espaciais e os nomes dos planetas do sistema solar.',
        technologies: ['CSS', 'JavaScript', 'ReactJS'],
        image: `${SolarSystem}`,
      },
      {
        title: 'Shopping Cart',
        gitHubURL: 'https://github.com/eduardomuchak/09-shopping-cart',
        vercelURL: 'https://shoppingcart-eduardomuchak.vercel.app/',
        description: 'Último projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe. O projeto consistia em consumir a API do Mercado Livre e criar um sistema de adicionar e remover itens de um carrinho de compras.',
        technologies: ['API Mercado Livre', 'CSS', 'HTML', 'JavaScript'],
        image: `${ShoppingCart}`,
      },
      {
        title: 'Trybe Warts',
        gitHubURL: 'https://github.com/eduardomuchak/06-trybewarts',
        vercelURL: 'https://trybewarts-eduardomuchak.vercel.app/',
        description: 'Sexto projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe e o primeiro projeto em Dupla. O projeto consistia em criar um formulário de cadastro de uma pessoa estudante da escola TrybeWarts.',
        technologies: ['CSS', 'HTML', 'JavaScript'],
        image: `${TrybeWarts}`,
      },
      {
        title: 'To Do List',
        gitHubURL: 'https://github.com/eduardomuchak/04-to-do-list',
        vercelURL: 'https://todolist-eduardomuchak.vercel.app/',
        description: 'Quarto projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe. O projeto consistia em criar uma lista de tarefas onde a pessoa usuária poderia inserir, finalizar e excluir tarefas.',
        technologies: ['CSS', 'HTML', 'JavaScript', 'Local Storage'],
        image: `${ToDoList}`,
      },
      {
        title: 'Pixels Art',
        gitHubURL: 'https://github.com/eduardomuchak/03-pixels-art',
        vercelURL: 'https://pixelsart-eduardomuchak.vercel.app/',
        description: 'Terceiro projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe. O projeto consistia em criar um board de pixels para a pessoa usuária colorir conforme as cores disponibilizadas. ',
        technologies: ['CSS', 'HTML', 'JavaScript'],
        image: `${PixelsArt}`,
      }
    ]
    
    export default Projects;