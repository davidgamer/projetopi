var controller = require('../controllers/calculadora.js')();

describe('Calculadora', function() {
	describe('Testa se as operações-núcleo funcionam corretamente.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
			
			it('Deveria retornar -3 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-3);
			});
			
			it('Deveria retornar 3 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(3);
			});
			
			it('Deveria retornar -5 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.somar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-5);
			});
		});
		
		describe('Subtrair', function() {
			it('Deveria retornar 1 quando for passado 4 e 3.', function() {
				var numero1 = 4;
				var numero2 = 3;
				
				var resultado = controller.utils.calculos.subtrair(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(1);
			});
			
		});

		 describe('multaMidia', function() {
            it('Deveria retornar 6 quando for passado 6.', function() {
                var numero1 = 6;

                var resultado = controller.utils.calculos.multaMidia(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(6);
            });

        });

		  describe('multaAcessorios', function() {
            it('Deveria retornar 6 quando for passado 6.', function() {
                var numero1 = 6;

                var resultado = controller.utils.calculos.multaAcessorios(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(6);
            });

        });


        describe('multaLivro', function() {
            it('Deveria retornar 6 quando for passado 6.', function() {
                var numero1 = 6;

                var resultado = controller.utils.calculos.multaLivro(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(6);
            });

        });

        describe('multacartao', function() {
            it('Deveria retornar 9 quando for passado 3.', function() {
                var numero1 = 7;

                var resultado = controller.utils.calculos.multacartao(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(49);
            });

        });

        describe('SMultacartaoApos45dias', function() {
            it('Deveria retornar 135 quando for passado 3.', function() {
                var numero1 = 3;

                var resultado = controller.utils.calculos.SMultacartaoApos45dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(135);
            });

        });

        describe('multamanga', function() {
            it('Deveria retornar 8 quando for passado 4.', function() {
                var numero1 = 4;

                var resultado = controller.utils.calculos.multamanga(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(8);
            });

        });
        describe('multahq', function() {
            it('Deveria retornar 15 quando for passado 3.', function() {
                var numero1 = 3;


                var resultado = controller.utils.calculos.multahq(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(15);
            });

        });

        describe('SomarMultaboleto', function() {
            it('Deveria retornar 30 quando for passado 1.', function() {
                var numero1 = 1;

                var resultado = controller.utils.calculos.SomarMultaboleto(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(30);
            });

        });

        describe('Somarmultahqapos40dias', function() {
            it('Deveria retornar 83 quando for passado 5.', function() {
                var numero1 = 5;

                var resultado = controller.utils.calculos.Somarmultahqapos40dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(83);
            });

        });

        describe('SomarMangaeHQApos10Dias', function() {
            it('Deveria retornar 70 quando for passado 10.', function() {
                var numero1 = 10;

                var resultado = controller.utils.calculos.SomarMangaeHQApos10Dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(78);
            });

        });



 describe('somarMultalivroAcessorio10dias', function() {
            it('Deveria retornar 70 quando for passado 10.', function() {
                var numero1 = 2;

                var resultado = controller.utils.calculos.somarMultalivroAcessorio10dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(202);
            });

        });



        describe('Somamultamangaapos40dias', function() {
            it('Deveria retornar 80 quando for passado 2.', function() {
                var numero1 = 2;

                var resultado = controller.utils.calculos.Somamultamangaapos40dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(80);
            });

        });

         describe('SomamultaAcessorios40dias', function() {
            it('Deveria retornar 80 quando for passado 2.', function() {
                var numero1 = 2;

                var resultado = controller.utils.calculos.SomamultaAcessorios40dias(numero1);

                resultado.should.be.a.Number;
                resultado.should.be.equal(80);
            });

        });

		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
			
			it('Deveria retornar -4 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar -4 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-4);
			});
			
			it('Deveria retornar 4 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.multiplicar(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});

		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando for passado 1 e 4.', function() {
				var numero1 = 1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado -1 e 4.', function() {
				var numero1 = -1;
				var numero2 = 4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar -0.25 quando for passado 1 e -4.', function() {
				var numero1 = 1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(-0.25);
			});
			
			it('Deveria retornar 0.25 quando for passado -1 e -4.', function() {
				var numero1 = -1;
				var numero2 = -4;
				
				var resultado = controller.utils.calculos.dividir(numero1, numero2);

				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});

	describe('Testa se a função calcular funciona.', function() {
		describe('Somar', function() {
			it('Deveria retornar 5 quando somar 1 e 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'somar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(5);
			});
		});
		
		describe('Subtrair', function() {
		
		});
		
		describe('Multiplicar', function() {
			it('Deveria retornar 4 quando multiplicar 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'multiplicar'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(4);
			});
		});
		
		describe('Dividir', function() {
			it('Deveria retornar 0.25 quando dividir 1 por 4.', function() {
				var parametros = {
					numero1: 1,
					numero2: 4,
					operacao: 'dividir'
				};
				
				var resultado = controller.utils.calculos.calcular(parametros);
				
				resultado.should.be.a.Number;
				resultado.should.be.equal(0.25);
			});
		});
	});
	
	describe('Testa se as funções utilitárias funcionam.', function() {
		describe('Controller.utils.formatarResposta()', function() {
			it('Deveria retornar 1,56 quando passado 1.55555558.', function() {
				var resultado = 1.55555558;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('1,56');
			});
			
			it('Deveria retornar 0,00 quando passado undefined.', function() {
				var resultado = undefined;
				var formatado = controller.utils.formatarResposta(resultado);
				
				formatado.should.be.an.Object;
				formatado.should.have.property('resultado');
				formatado.resultado.should.be.equal('0,00');
			});
		});
	});
});
