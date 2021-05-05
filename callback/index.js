/*
1 - obter usuario
2 - preciso obter numero de telefone de user por id
3 - obter o endereco do user pelo id
*/

function obterUsuario(callback){
    setTimeout(function (){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    } ,1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
            telefone: '1199000',
            ddd: 11
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null,{
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000);

}

function resolverUsuario(erro,usuario){
    console.log('usuario: ', usuario);

}

obterUsuario(function resolverUsuario(error, usuario){
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
});


// const telefone = obterTelefone(usuario.id);

// console.log('telefone: ', telefone)