//#region Avarage Studant Grade 

  // let student = prompt("Qual o nome do(a) aluno(a)?")
  // let n1 = prompt("Qual a nota da primeira prova?")
  // let n2 = prompt("Qual a nota da segunda prova?")
  // let n3 = prompt("Qual a nota da terceira prova?")

  // let avarage = (Number(n1) + Number(n2) + Number(n3)) / 3

  // let result = avarage >= 6
  // avarage = avarage.toFixed(2)

  // result ? alert("Parabéns " + student + "! Sua média foi de: " + avarage) : alert(student + " estude para sua prova de recuperação! Sua média foi de: " + avarage) 
  
//#endregion

//#region Shopping List

  // let items = [];

  // for(let item = 1; item <= 5; item++){
  //   let itemName = prompt("Digite o item " + item)

  //   items[item - 1] = itemName
  // }

  // alert(items)

//#endregion

//#region Jogo da Adivinhação

  // let result = prompt("Adivinhe o numero que estou pensando? Está entre 0 e 10")
  // const randomNumber = Math.round(Math.random() * 10)
  // let xAttempts = 1;

  // while(Number(result) != randomNumber){
  //   result = prompt("Erro, tente novamente:")
  //   xAttempts++;
  // }

  // xAttempts == 1 ? alert(`Parabéns, você adivinhou de primeira!`) : alert(`Parabéns, você adivinhou o número em ${xAttempts} tentativas`)

//#endregion

//#region Menu de Opções

  // let option
  // let items = []

  // while(option != 3){
  //   option = Number(prompt(`Olá usuário! Digite o número da opção desejada:

  //   1. Cadastrar um item na lista
  //   2. Mostrar itens cadastrados
  //   3. Sair do programa`))

  //   switch(option){
  //     case 1:
  //       let item = prompt("Digite o nome do item")
  //       items.push(item)
  //       break
  //     case 2:
  //       if(items.length == 0) alert("Não existem itens cadastrados")
  //       else alert(items)
  //       break
  //     case 3:
  //       alert("Tchau")
  //       break
  //     default:
  //       alert("Opção inválida. Tente novamente!")
  //   }
  // }

//#endregion 

//#region Lista de Pacientes

  // const patients=[
  //   {
  //     name: "Bruno",
  //     age: 19,
  //     weight: 80,
  //     height: 170
  //   },
  //   {
  //     name: "Granja",
  //     age: 20,
  //     weight: 90,
  //     height: 175
  //   },
  //   {
  //     name: "Lelis",
  //     age: 21,
  //     weight: 80,
  //     height: 180
  //   }
  // ]

  // // for(let patient of patients) {
  //   //   alert(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem uma altura de ${patient.height}cm`)
  //   // }
    
  // // patients.forEach(patient => {
  // //   alert(`O paciente ${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e mede ${patient.height}cm.`)
  // // }) 

  // // for(let patient of patients) {
  // //   alert(`${patient.name} possui o IMC de ${(patient.weight / (patient.height / 100) ** 2).toFixed(2)}`)
  // // }

  // function printPatientIMC(patient){
  //   return`${patient.name} possui o IMC de ${(patient.weight / (patient.height / 100) ** 2).toFixed(2)}`
  // }

  // for(let patient of patients){
  //   let IMCmassage = printPatientIMC(patient)
  //   alert(IMCmassage)
  // }

//#endregion

//#region Cálculo de dois números

  // let n1 = Number(prompt("Qual o primeira número que deseja inserir?"))
  // let n2 = Number(prompt("Qual o segundo número?"))

  // for(i = 0; i <= 7; i++){
  //   switch(i){
  //     case 1:
  //       alert("Soma dos dois números: " + (n1 + n2))
  //       break
  //     case 2:
  //       alert("Subtração dos dois números: " + (n1 - n2))
  //       break
  //     case 3:
  //       alert("Multiplicação dos dois números: " + (n1 * n2))
  //       break
  //     case 4:
  //       alert("Divisão dos dois números: " + (n1 / n2))
  //       break
  //     case 5:
  //       alert("Resto dos dois números: " + (n1 % n2))
  //       break
  //     case 6:
  //       if((n1 + n2) % 2 == 0) alert("A soma dos dois números é Par")
  //       else alert("A soma dos dois números é Impar")
  //       break
  //     case 7:
  //       if(n1 == n2) alert("Os dois números são Igais")
  //       else alert("Os dois números são Diferentes")
  //       break
  //   }
  // }

//#endregion

//#region Média Alunos

  const students=[
    {
      name: "Bruno",
      test1: 10,
      test2: 9.5
    },
    {
      name: "Granja",
      test1: 8.5,
      test2: 5.75
    },
    {
      name: "Lelis",
      test1: 6,
      test2: 4.5
    }
  ]

  students.forEach(studant => {
    let sum = ((studant.test1 + studant.test2) / 2).toFixed(2)
    if(sum < 6) phrase = `Não foi dessa vez, ${studant.name}! Tente novamente!`
    else phrase = `Parabéns, ${studant.name}! Você foi aprovado(a) no curso!`
    alert(`A média do(a) aluno(a) ${studant.name} é: ${sum}\n${phrase}`)
  });

//#endregion