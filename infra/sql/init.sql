CREATE TABLE cliente(
	id_cliente SERIAL PRIMARY KEY,
	nome VARCHAR (50) NOT NULL,
	cpf VARCHAR (11) UNIQUE NOT NULL,
	telefone VARCHAR (16)
);

CREATE TABLE carro(
	id_carro SERIAL PRIMARY KEY,
	marca VARCHAR (50) NOT NULL,
	modelo VARCHAR (50) NOT NULL,
	ano INT,
	cor VARCHAR (20)
);

CREATE TABLE pedido_venda (
	id_pedido SERIAL PRIMARY KEY,
	id_carro INT NOT NULL,
	id_cliente INT NOT NULL,
	data_pedido DATE NOT NULL,
	valor_pedido DECIMAL(6) NOT NULL,
	FOREIGN KEY(id_carro) REFERENCES carro(id_carro),
	FOREIGN KEY(id_cliente) REFERENCES cliente(id_cliente)
);



INSERT INTO cliente (nome, cpf, telefone)
VALUES ('Percy Jackson', 41593620710, '(11) 94567-2381');
INSERT INTO cliente (nome, cpf, telefone)
VALUES ('Annabeth Chase',35827014981, '(11) 98654-3219');
INSERT INTO cliente (nome, cpf, telefone)
VALUES ('Katniss Everdeen', 17650893247, '(16) 99752-8431');
INSERT INTO cliente (nome, cpf, telefone)
VALUES ('Peeta Mellark', 23491750672, '(16) 98763-4290');
INSERT INTO cliente (nome, cpf, telefone)
VALUES ('Tris Prior', 13729584609, ' (11) 99684-2301');
INSERT INTO cliente (nome, cpf, telefone)
VALUES ('Tobias Eaton', 86532059432, '(11) 98543-1762');

INSERT INTO carro (marca, modelo, ano, cor)
VALUES ('Mitsubishi', 'Mitsubishi', '1994', 'Azul-Royal');
INSERT INTO carro (marca, modelo, ano, cor)
VALUES ('Nissan', 'TIIDA SL 1.8/1.8 Flex 16V Aut.', '2008', 'Dourado');
INSERT INTO carro (marca, modelo, ano, cor)
VALUES ('Audi', 'A3 1.8 3p Aut.', '1997', 'Vermelho');
INSERT INTO carro (marca, modelo, ano, cor)
VALUES ('Buggy', 'Buggy 1.6 2-Lug.', '1988', 'Cinza');
INSERT INTO carro (marca, modelo, ano, cor)
VALUES  ('BMW', '120iA Cabrio 2.0 16V 156cv 2p', '2009', 'Branco');
INSERT INTO carro (marca, modelo, ano, cor)
VALUES ('Porsche', 'Panamera GT-S 4.8', '2012', 'Preto');

INSERT INTO pedido_venda (id_carro, id_cliente, data_pedido, valor_pedido) 
VALUES (1, 6, '18/05/2004', '320000');
INSERT INTO pedido_venda (id_carro, id_cliente, data_pedido, valor_pedido) 
VALUES (2, 5, '28/03/2009', '280000');
INSERT INTO pedido_venda (id_carro, id_cliente, data_pedido, valor_pedido) 
VALUES (3, 4, '11/02/2002', '410000');
INSERT INTO pedido_venda (id_carro, id_cliente, data_pedido, valor_pedido) 
VALUES (4, 3, '30/08/2001', '300000');
INSERT INTO pedido_venda (id_carro, id_cliente, data_pedido, valor_pedido) 
VALUES (5, 2, '07/08/2007', '330000');
INSERT INTO pedido_venda (id_carro, id_cliente, data_pedido, valor_pedido) 
VALUES (6, 1, '08/08/2019', '150000');


SELECT * FROM cliente;
SELECT * FROM carro;
SELECT * FROM pedido_venda;
