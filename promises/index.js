/*
1 - obter usuario
2 - preciso obter numero de telefone de user por id
3 - obter o endereco do user pelo id
*/

function obterUsuario(){
    // quando der alguim problema -> REJECT(ERRO)
    // quando sucess -> RESOLVE
    return new Promise(function resolvePromise(resolve, reject){
        // return reject(new Error('Deu ruim de verdade!!!'))
        setTimeout(function (){
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        } ,1000)

    })
}

function obterTelefone(idUsuario){

    return new Promise(function resolvePromise(resolve, reject){        
        setTimeout(() => {
            return resolve({
                telefone: '1199000',
                ddd: 11
            })
        }, 2000);
    })

}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}

const usuarioPromise =  obterUsuario();
// para manipular o sucesso a função .then
// para manipular erros, usamos o .catch
// usuario -> telefone -> telefone
usuarioPromise
.then(function(usuario){
    return obterTelefone(usuario.id)
    .then(function resolverTelefone(result){
        return {
            usuario : {
                nome : usuario.nome,
                id: usuario.id
            },
            telefone : result
        }
    })
})
.then(function(resultado){
    console.log('resultado: ', resultado)
})
.catch(function(error){
    console.error('Deu ruim: ', error);
});






/*obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || 0 === false
    if(error){
        console.log('Error em Usuário: ',  erro)
        return;
    }

    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1){
            console.log('Error em Telefone: ',  erro)
            return;
        }
        obterEndereco(usuario.id,function resolverEndereco(error2, endereco){
            if(error2){
                console.log('Error em Endereço: ',  erro)
                return;
            }  
            
            console.log(`
            nome ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero},
            Telefone: (${telefone.ddd}) ${telefone.telefone},
            `)
        })
    })
});*/