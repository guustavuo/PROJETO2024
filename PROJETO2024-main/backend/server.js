const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

// Configuração do middleware
app.use(cors());
app.use(bodyParser.json());

// Porta do servidor
const PORT = 3000;
const JWT_SECRET = 'seuSegredoMuitoForteAqui';
// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// POST - Cadastro de usuário
app.post('/usuarios', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ error: 'Nome, email e senha são obrigatórios.' });
    }

    // Hash da senha
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(senha, salt);

    const novoUsuario = await prisma.usuario.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
      },
    });

    res.status(201).json(novoUsuario);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
});

// GET - Listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar usuários.' });
  }
});

// GET - Buscar usuário por ID
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

// PUT - Atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    // Se uma nova senha for fornecida, fazemos o hash dela
    let updatedData = { nome, email };
    if (senha) {
      const salt = await bcrypt.genSalt(10);
      updatedData.senha = await bcrypt.hash(senha, salt);
    }

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id: parseInt(id) },
      data: updatedData,
    });

    res.status(200).json(usuarioAtualizado);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar usuário.' });
  }
});

// DELETE - Excluir usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.usuario.delete({
      where: { id: parseInt(id) },
    });

    res.sendStatus(200); // Sem conteúdo
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir usuário.' });
  }
});
// POST - Login com JWT
app.post('/login', async (req, res) => {
    try {
      const { email, senha } = req.body;
  
      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
      }
  
      // Buscar usuário pelo email
      const usuario = await prisma.usuario.findUnique({
        where: { email },
      });
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
  
      // Comparar a senha fornecida com a senha criptografada no banco de dados
      const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  
      if (!senhaCorreta) {
        return res.status(401).json({ error: 'Credenciais inválidas.' });
      }
  
      // Gerar o JWT
      const token = jwt.sign(
        { id: usuario.id, nome: usuario.nome, email: usuario.email },
        JWT_SECRET, // Chave secreta
        { expiresIn: '1h' } // O token expira em 1 hora
      );
  
      // Retornar o token para o cliente
      res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao realizar login.' });
    }
  });
  
  // Middleware para autenticação com JWT
  const autenticarJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Espera um header Authorization: Bearer <token>
  
    if (!token) {
      return res.status(403).json({ error: 'Token não fornecido.' });
    }
  
    jwt.verify(token, JWT_SECRET, (err, usuario) => {
      if (err) {
        return res.status(403).json({ error: 'Token inválido.' });
      }
  
      req.usuario = usuario; // Adiciona os dados do usuário ao objeto de requisição
      next();
    });
  };
  
  // GET - Exemplo de rota protegida (precisa de token JWT)
  app.get('/perfil', autenticarJWT, async (req, res) => {
    try {
      const usuario = await prisma.usuario.findUnique({
        where: { id: req.usuario.id },
      });
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuário não encontrado.' });
      }
  
      res.status(200).json(usuario);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter o perfil do usuário.' });
    }
  });