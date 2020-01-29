<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Desafio 1: Conceitos do NodeJS
</h3>
  
  # Routes

  - GET /projects
    - Response 200 OK

        ```json
          [
            {
              "id": "1",
              "title": "PROJECT NAME",
              "tasks": ["FIRST TASK","SERCORD TASK"]
            }
          ]
        ```
  - POST /projects 
    - Resquest

        ```json
          { "id": "1", "title": "NEW PROJECT", "tasks": [] }
        ```
    - Response 200 OK

        ```json
          { "id": "1", "title": "PROJECT NAME", "tasks": [] }
        ```      
  - PUT /projects/:id 
    - Resquest

      ```json
        { "id": "1", "title": "NEW PROJECT NAME" }
      ```
    - Response 200 OK

        ```json
          { "id": "1", "title": "PROJECT NAME" }
        ```      

  - DELETE /projects/:id
    - Response 200 OK

  - POST /projects/:id/tasks
      - Resquest

        ```json
          { "title": "NAME TASK" }
        ```
      - Response 200 OK

        ```json
          { "id": "1", "title": "PROJECT NAME", "tasks": [] }
        ```   
# Rules
- ID end title in String format with double quotes
