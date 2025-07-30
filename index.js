const express = require('express');
const dotenv = require('dotenv');
const app = express();
const { sequelize } = require('./src/config/configDB.js');
const authRoute = require('./src/modules/autenticacao/routes/autenticacao.route.js');
const usuarioRoute = require('./src/modules/usuario/routes/usuario.route.js');
const servicoRoute = require('./src/modules/ordemServico/routes/ordemServico.route.js');
const tecnicoRoute = require('./src/modules/tecnico/routes/tecnico.route.js');
const clienteRoute = require('./src/modules/cliente/routes/cliente.route.js');

dotenv.config();

app.use(express.json());

app.use('/auth/', authRoute);
app.use('/usuarios/', usuarioRoute);
app.use('/clientes/', clienteRoute);
app.use('/tecnicos/', tecnicoRoute);
app.use('/ordens-servico/', servicoRoute);


const PORTA = process.env.PORTA;
app.listen(PORTA, async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');

        await sequelize.sync({ force: false, alter: true });
        console.log('Banco de dados sincronizado com sucesso.');
    } catch (err) {
        console.error('Erro ao conectar ou sincronizar o banco de dados:', err);
    }
    console.log(`Servidor rodando na porta ${PORTA}`);
});
