import fs from "fs";
import chalk from 'chalk';

function trataErro(erro){
    if (erro.code === 'ENOENT'){
        throw new Error(chalk.red(erro.code, 'arquivo não encontrado'));
    }else if (erro.code === 'EISDIR'){
        throw new Error(chalk.red(erro.code, 'caminho passado não corresponde a um arquivo'));
    }else{
        throw new Error(chalk.red(erro.code, 'erro no arquivo'));
    }
    
}

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    try{
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        console.log(chalk.yellowBright(texto));
    } catch (erro) {
        trataErro(erro);
    }
}

pegaArquivo('./arquivos/texto1.md');

