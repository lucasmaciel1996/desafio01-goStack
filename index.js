const express = require('express');
const app = express();

const projects = [];

/**
 * Middleware com contagem das requisições realizada
*/
function countResquest(req, res , next)
{
  console.count('Total de Resquest');
  return next();
}
/**
 * Middleware que checa se o projeto existe, caso exista ativa Object project no body do req
*/
function checkProjectExist(req, res, next)
{
  const {id} = req.params;
  const project = projects.find(item => item.id === id);
  if(!project)
  {
    return res.status(400).json({error:'Project not Found'});
  }
  req.body.project = project;
  return next();
}

app.use(countResquest);
app.use(express.json());

/**
 * Lista  todos projetos
*/
app.get('/projects', (req, res) =>{
  res.json(projects);
});

/**
 * Cria  novos projetos
*/
app.post('/projects',(req, res) =>{
  const {id, title} = req.body;
  const project ={
      id,
      title,
      tasks:[]
    }
  projects.push(project);
  res.json(projects);

});

/**
 * Atualiza um projeto
*/
app.put('/projects/:id', checkProjectExist, (req, res) =>{
  const {project, title} = req.body;
  project.title = title;
  return res.json(project);
});

/**
 * Exclui um projeto
*/
app.delete('/projects/:id', checkProjectExist, (req, res) =>{
  const {id} = req.params;
  const projectIndex = projects.findIndex(item =>item.id ==id);
  projects.splice(projectIndex,1);
  return res.send();
});

/**
 * Adciona uma nova tarefas a um projeto
*/
app.post('/projects/:id/tasks', checkProjectExist,(req, res) =>{
  const {project,title} = req.body;
  
  project.tasks.push(title);
  return res.json(project);
});

app.listen(3000);