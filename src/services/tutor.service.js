const tutors = [
  {
    id: 1,
    nome: 'Anderson Dutra',
    email: 'anderson@gmail.com',
  },
  {
    id: 2,
    nome: 'Ralph Dutra',
    email: 'ralph@gmail.com',
  },
  {
    id: 3,
    nome: 'Teddy Dutra',
    email: 'teddy@gmail.com',
  },
];

// Lista todos os tutors
const listarTodostutors = async () => {
  return tutors;
};

// Busca um tutor específico pelo ID
const buscartutorPorId = async (id) => {
  const tutor = tutors.find((item) => item.id === Number(id));
  return tutor || null;
};

// Criar um novo tutor
const criartutor = async ({ nome, email }) => {
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }
  const novotutor = {
    id: tutors.length + 1,
    nome,
    email,
  };
  tutors.push(novotutor);
  return novotutor;
};

module.exports = { listarTodostutors, buscartutorPorId, criartutor };
