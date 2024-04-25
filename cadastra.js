document.querySelector("#botao-cadastrar").addEventListener("click", (e) => {
    e.preventDefault()

    const article = document.querySelector("article")


    const tarefa = {
        nome: article.querySelector("#nome").value,
        time: article.querySelector("#time").value,
        gols: article.querySelector("#gols").value,
        foto: article.querySelector("#foto").value,
        assistencias: article.querySelector("#assistencias").value
    }
    if (validar(tarefa)){
        console.log(tarefa)
        let tarefas = JSON.parse( localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "index.html"
 
}
})

function validar(tarefa) {

    let valid = true


    if (tarefa.nome === "") {
        document.querySelector("#nome").classList.add("is-error")
        document.querySelector("#nome-error").innerText = "Tem que ter um nome !"
        valid = false
    }

    if (tarefa.time === "") {
        document.querySelector("#time").classList.add("is-error")
        document.querySelector("#time-error").innerText = "Tem que ter um Time"
        valid = false
    }

    if (tarefa.gols === "") {

        document.querySelector("#gols").classList.add("is-error")
        document.querySelector("#gols-error").innerText = "Valor minimo e 0"
        valid = false
    }

    if (tarefa.assistencias === "") {

        document.querySelector("#assistencias").classList.add("is-error")
        document.querySelector("#assistencias-error").innerText = "Valor minimo de assistencia e 0"
        valid = false
    }
    return valid
}

    console.log(nome, time, gols)

