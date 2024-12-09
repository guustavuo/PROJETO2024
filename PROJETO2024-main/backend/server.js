const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());

// Porta do servidor
const PORT = 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// POST
app.post('/usuarios', async (req, res) => {
try {
    const { nome, email } = req.body;

    const novoUsuario = await prisma.usuario.create({
    data: {
        nome,
        email,
    },
    });

    res.status(201).json(novoUsuario);
} catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
}
});


//GET LISTAR
app.get('/usuarios', async (req, res) => {
try {
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios);
} catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários.' });
}
});

//GET BUSCAR POR ID
app.get('/usuarios/:id', async (req, res) => {
try {
    const { id } = req.params;

    const usuario = await prisma.usuario.findUnique({
    where: { id: parseInt(id) },
    });

    if (!usuario) {
    return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    res.status(200).json(usuario);
} catch (error) {
    res.status(500).json({ error: 'Erro ao buscar usuário.' });
}
});

//PUT ATUALIZAR USUARIO
app.put('/usuarios/:id', async (req, res) => {
try {
    const { id } = req.params;
    const { nome, email } = req.body;

    const usuarioAtualizado = await prisma.usuario.update({
    where: { id: parseInt(id) },
    data: { nome, email },
    });

    res.status(200).json(usuarioAtualizado);
} catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
}
});

//DELETE EXCLUIR
app.delete('/usuarios/:id', async (req, res) => {
try {
    const { id } = req.params;

    await prisma.usuario.delete({
    where: { id: parseInt(id) },
    });

    res.status(204).send(); // Sem conteúdo
} catch (error) {
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
}
});
  
  
  

  