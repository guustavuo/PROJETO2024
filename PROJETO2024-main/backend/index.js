const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Criar um usuário
  const usuario = await prisma.usuario.create({
    data: {
      nome: "João Silva",
      email: "joao.silva@example.com",
    },
  });

  console.log("Usuário criado:", usuario);

  // Buscar usuários
  const usuarios = await prisma.usuario.findMany();
  console.log("Lista de usuários:", usuarios);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
