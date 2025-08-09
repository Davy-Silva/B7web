// tsc src/script.ts -w
// Faz com que o ts fique monitorando o arquivo e quando salvar ele já compila
// Evitando toda vez repetir o comando tsc src/script.ts

const nomes: string = 'Davy'

function tests(x: number, y: number): number {
    return x + y
}