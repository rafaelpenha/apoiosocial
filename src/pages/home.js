import './App.css';
import './Normalize.css';

function home(){

    function cad(){

    }
    


return(
    <body>
			<div className="header">

				<div class="cabeca">
					<header className="">
						<div class="coluna col4">
							<h1 class="logo"><a href=""><strong>Apoio social</strong></a></h1>
						</div>

						<div className="coluna col8">
							<nav>
								<ul className="menu inline sem-marcador">
									<li><a onClick={cad}>cadastro</a></li>
									<li><a href="cadastroemp.html">login</a></li>
									<li><a href="">menu</a></li>
								</ul>
							</nav>

						</div>
					</header>
				</div>
			</div>

			<div className="slider">
				<ul>
					<li><a>
						
						<input type="radio" id="slide1" name="slide" checked/>
						<label for="slide1"></label>
						<img src="../imagens/maos.jpeg" alt=" Mãos unidas"/>
						</a>
					</li>



					<li><a>	
						
						<input type="radio" id="slide2" name="slide" checked/>
						<label for="slide2"></label>
						<img src="../imagens/maossepia.png" alt=" Mãos unidas"/>
						</a>
					</li>
				</ul>

			</div>


			<div class="linha">
				<section>
					<div class="coluna col3 sidebar apresentacao">
						<h2><strong>Conheça sua nova plataforma de serviços e ajuda da comunidade</strong></h2>
						<ul class="sem-marcador sem-padding menu1">
							<li><a href="clientes.html">Empregos ou serviços no meu bairro</a></li>
							<li><a href="divulgarvaga.html">Divulgar vaga de emprego ou serviço</a></li>
							<li><a href="precisoajuda.html">Preciso de ajuda</a></li>
							<li><a href="casasapoio.html">Localizar casas de apoio</a></li>
						</ul>

					</div>
				
					<div class="coluna col13">
						<h3> Sobre este projeto </h3>
						<p>
							Este projeto tem por objetivo abordar formas de acessibilidade a uma gama de
							pessoas em vulnerabilidade social na sociedade, tendo em vista a evolução que
							mundo da informação e tecnologia tem ganhado a cada dia, é importante se atentar as
							áreas na qual a mesma possui a capacidade de influenciar em meio a fatores
							importantes, em ramos como o meio social e trabalhista, é evidente que houve
							melhorias na questão das oportunidades e apoio social por meio da Internet,
							Aplicativos e sites que facilitam a transmissão da informação até mesmo a pessoas
							que não possuem uma vivência diária neste meio tecnológico. Com isso, diante da
							compatibilidade do assunto, é de alto agrado que a idealização de um App chamado
							Apoio Social, obtenha um cunho inovador cujo a ideia é apoiar classes mais
								vulneráveis no quesito empregatício e social.<a href="sobre.html">Leia mais &raquo;</a>
						</p>

					</div>

				</section>
			</div>
			<div class="conteudo-extra">
				<div class="linha">
					<div class="coluna col7">
						<section>
							<h2>sessão de comentarios</h2>
							<p>A razão de se pesquisar o apoio social em meio a tecnologia, é uma maneira de compreender as diferentes formas de contribuição a vida do próximo, seja por meios manuais ou digitais, acabará impactando na criação de possibilidades para que pessoas se aproximem e compartilhem informações favoráveis.</p>
						</section>
					</div>
					<div class="coluna col5">
						<h3>Pessoas que precisam da sua ajuda</h3>
						<ul class="sem-marcador sem-padding noticias">
							<li>
								<a href=""><img src="img/thumb-pequena.jpg" /></a>
								<a href=""><h4>Fulano de tal</h4></a>
								<p>informações sobre pessoas que precisam de ajuda<a href="">Leia mais&raquo;</a>
								</p>
							</li>
							<li>
								<a href=""><img src="img/thumb-pequena.jpg" /></a>
								<a href=""><h4>Fulano de tal</h4></a>
								<p>informações sobre pessoas que precisam de ajuda<a href="">Leia mais&raquo;</a>
								</p>

							</li>
							<li>
								<a href=""><img src="img/thumb-pequena.jpg" /></a>
								<a href=""><h4>Fulano de tal</h4></a>
								<p>informações sobre pessoas que precisam de ajuda<a href="">Leia mais&raquo;</a>
								</p>
							</li>
						</ul>

					</div>


				</div>


			</div>

			<div class="footer">
				
					<section>
						<div className="grid">
							<section className="grid-1">									
					  		  <h3>Sobre o site</h3>
								<p>A ideia do projeto em relaçao as questões relativas ao trabalho, e aos trabalahadores,
								aos excluídos socialmente, somam- se indignações, o projeto reforça a ideia de trazêá reflexão para dar maior visibilidade, e, assim contirbuir para amenizar a dor e o
								sofrimento de pessoas afetadas pelo desemprego, pela precarização do trabalho, pela
								desigualdade.</p>
							</section>
						
						<div className="grid-2">
							<h3>Nos siga nas Redes Socias</h3>
							<img className="face" src="../imagens/face.png" alt="facebook" />
							<img className="insta" src="../imagens/instagram.png" alt="instagram"/>
												
						</div>

						<div className="contatos">
							<h3>Contatos</h3>
							<p>TEL: (98) 32000000</p>
							<p>CEL: (98) 98000000</p>

						
				
						
						</div>
						</div>
                        </section>

						<div class="coluna col12">
							<span>&copy; 2020 - apoio social</span>
						</div>
                     
                        </div>
            </body>
);

}
export default home;