import express from "express";

const posts = [
    {
      id: 1,
      descricao: "Uma foto teste",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 2,
      descricao: "Gato fazendo yoga",
      imagem: "https://placecats.com/millie/300/150"
    },
    {
      id: 3,
      descricao: "Gatinho dormindo",
      imagem: "https://placecats.com/millie/300/150"
    }
    
  ];

const app = express();

app.use(express.json());// converte o body da requisição para JSON.

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

app.get("/api",(req,res)=>{
    res.status(200,"OK").send("Boas vindas à imersão!");
});

app.get("/posts",(req,res)=>{
    res.status(200,"OK").json(posts);
});

function buscarPostPorId(id){
    return posts.findIndex((post)=>{
        return post.id === Number(id)
    })
}   
app.get("/posts/:id", (req,res)=>{
    const id = req.params.id;
    const index = buscarPostPorId(Number(id));
    if(index>=0){
        res.status(200,"OK").json(posts[index]);
    }else{
     res.status(404,"Not Found").send("Post não encontrado");
    }
});
