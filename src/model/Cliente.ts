import { DatabaseModel } from "./DatabaseModel";

const database = new DatabaseModel().pool;

/**
 * Classe que representa o cliente.
 */
export class Cliente {

    /* Atributos */

    /* Identificador do cliente */
    private idCliente: number = 0;
    /* nome do cliente */
    private nome: string;
    /* cpf do cliente  */
    private cpf: number;
    /* telefone do cliente */
    private telefone: number;
    
    /**
     * Construtor da classe Cliente
     * 
     * @param nome nome do cliente
     * @param cpf  cpf do cliente 
     * @param telefone telefone do cliente
     */

    constructor(
        nome: string,
        cpf: number,
        telefone: number,
      
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;

    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do cliente
     * @returns o identificador do cliente
     */

    public getIdCliente(): number {
        return this.idCliente;
    }

    /**
     * Atribui um valor ao identificador do cliente
     * @param idCliente novo identificado do cliente
     */
    public setIdCliente(idCliente: number): void {
        this.idCliente = idCliente;
    }

    /**
     * Retorna o nome no cliente.
     *
     * @returns {string} O nome do cliente .
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do cliente
     * 
     * @param nome - o nome do cliente a ser definido.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o cpf do cliente 
     *
     * @returns {number} O cpf do cliente.
     */
    public getCpf(): number {
        return this.cpf;
    }

    /**
     * Define o cpf do cliente.
     *
     * @param cpf - O numero do cpf do cliente
     */
    public setCpf(cpf: number): void {
        this.cpf = cpf;
    }

    /**
     * Retorna o telefone do cliente.
     *
     * @returns O telefone do cliente.
     */
    public getTelefone(): number {
        return this.telefone;
    }

    /**
     * Define o telefone do cliente.
     * 
     * @param telefone - O telefone a ser definido para o cliente.
     */
    public setTelefone(telefone: number): void {
        this.telefone = telefone;
    }

    /**
     * O método listarClientes executa uma consulta SQL para buscar todos os clientes da tabela cliente no banco de dados.
     * @returns todos os clientes encontrados no banco de dados.
     */

    static async listarClientes(): Promise<Array<Cliente> | null> {

        let listaDeClientes: Array<Cliente> = [];

        try {

            const querySelectCliente = `SELECT * FROM cliente;`;

            const respostaBD = await database.query(querySelectCliente);

            respostaBD.rows.forEach((cliente) => {
                let novoCliente = new Cliente(
                    cliente.nome,
                    cliente.cpf,
                    cliente.telefone,
                    
                );

                novoCliente.setIdCliente(cliente.id);

                listaDeClientes.push(novoCliente);

            });    
            
            return listaDeClientes;


        } catch (error) {
            console.log(`Erro ao acessar o modelo: ${error}`);
            return null;
        }
    }
}