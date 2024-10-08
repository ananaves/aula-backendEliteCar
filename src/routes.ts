import { Request, Response, Router } from "express";
import CarroController from "./controller/CarroController";
import ClienteController from "./controller/ClienteController";
import PedidoVendaController from "./controller/PedidoVendaController";

const router = Router();

router.get("/carros", CarroController.todos)

router.get("/cliente", ClienteController.todos)

router.get("/pedidos_vendas", PedidoVendaController.todos)

export { router };