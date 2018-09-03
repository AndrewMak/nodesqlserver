const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3000;
const sql = require('mssql');
const connStr = "Server=xxx;Database=xxx;User Id=xx;Password=xxxxx;";