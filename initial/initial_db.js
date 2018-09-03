const connStr = "Server=i4pro10,11433;Database=testenode;User Id=sa;Password=Engine2017!;";
const sql = require("mssql");

// sql.connect(connStr)
//    .then(conn => console.log("Conexao com Sql server está ok!" + connStr))
//    .catch(err => console.log("erro! " + err));


function criarTabela(conn){
    const table = new sql.Table('Pessoa');
    const request = new sql.Request();
    table.create = true;
    table.columns.add('Codigo', sql.Int, {nullable: false, primary: true});
    table.columns.add('Nome', sql.NVarChar(150), {nullable: false});
    table.columns.add('Sobrenome', sql.NVarChar(150), {nullable: false});
    table.columns.add('CPF', sql.NChar(11), {nullable: false});
    table.rows.add(1, 'Andrew', 'Chan', '4566899985');
    table.rows.add(2, 'Pedro', 'Silva', '8455155151');
    table.rows.add(3, 'Joao', 'Salgado', '54454545615');

    request.bulk(table)
           .then(result => console.log('Tabela Criada com sucesso.'))
           .catch(err => console.log('erro no bulk. ' + err));
}

sql.connect(connStr)
   .then(conn => criarTabela(connStr))
   .catch(err => console.log("Ocorreu um erro: " + err));
