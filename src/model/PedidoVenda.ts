/**
 * Classe que representa um PedidoVenda.
 */
export class PedidoVenda {

    /* Atributos */

    /* Identificador do Pedido */
    private idPedido: number = 0;
    /* Identificador do carro */
    private idCarro: number = 0;
    /* Identificador do cliente */
    private idCliente: number = 0;
    /* data do Pedido */
    private dataPedido: Date;
    /* valor do pedido */
    private valorPedido: number;
 
    /**
     * Construtor da classe PedidoVenda.
     * @param idCarro identificador do carro
     * @param idCliente identificador do cliente
     * @param dataPedido Marca do carro
     * @param valorPedido Modelo do carro
     */
    constructor(
        idCarro: number,
        idCliente: number,
        dataPedido: Date,
        valorPedido: number
    ) {
        this.idCarro = idCarro;
        this.idCliente = idCliente;
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;
    }

    /* Métodos get e set */
    /**
     * Recupera o identificador do carro
     * @returns o identificador do carro
     */
    public getIdCarro(): number {
        return this.idCarro;
    }

    /**
     * Atribui um valor ao identificador do carro
     * @param idCarro novo identificado do carro
     */
    public setIdCarro(idCarro: number): void {
        this.idCarro = idCarro;
    }

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
     * Retorna a data do Pedido.
     *
     * @returns {Date} A data do pedido.
     */
    public getdataPedido(): Date {
        return this.dataPedido;
    }

    /**
     * Define a data do pedido.
     * 
     * @param dataPedido - A data do pedido a ser definida.
     */
    public setdataPedido(dataPedido: Date): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Retorna o valor do pedido.
     *
     * @returns {number} O valor do pedido.
     */
    public getvalorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor do pedido.
     *
     * @param valorPedido - O numero do valor do pedido.
     */
    public setvalorpedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }

}