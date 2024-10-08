import { Request, Response} from "express";
import { Carro} from "../model/Carro";

class CarroController extends Carro{
    
    /**
     * método estático chamado todos que faz parte de uma classe (provavelmente um controlador).
     *  Ele é marcado como assíncrono (async), o que significa que dentro dele podem ser usadas 
     * operações assíncronas com await
     * @param req Representa a requisição HTTP que contém informações enviadas pelo cliente.
     * @param res Representa a resposta HTTP que será enviada de volta ao cliente.
     */
    static async todos(req: Request, res: Response){
        try{
            const listaDeCarros = await Carro.listarCarros();

            res.status(200).json(listaDeCarros);

        } catch (error) {
            console.log(`erro ao acessar método herdado: ${error}`);

            res.status(400).json('erro ao recupera as informações de pessoas.')

        }
        
    }
}

export default CarroController;