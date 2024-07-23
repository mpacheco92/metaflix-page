import Header from '../components/Header';
import tv3d from '../images/tv3d2.png';
import watch from '../images/watch.png';
import metaflix from '../images/logo.png';
import { images } from '../components/ArrayLogos';
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = (event: any) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    const faqItems = document.querySelectorAll<HTMLElement>('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector<HTMLButtonElement>('.faq-question');
      const answer = item.querySelector<HTMLElement>('.faq-answer');

      if (question && answer) {
        const icon = document.createElement('i');
        icon.classList.add('bi', 'bi-arrow-down-square-fill');
        question.appendChild(icon);
        question.insertBefore(icon, question.firstChild);

        item.addEventListener('click', () => {
          const isExpanded = answer.style.maxHeight && answer.style.maxHeight !== '0px';

          if (isExpanded) {
            answer.style.maxHeight = '0px';
            icon.classList.remove('bi-arrow-up-square-fill');
            icon.classList.add('bi-arrow-down-square-fill');
          } else {
            answer.style.maxHeight = `${answer.scrollHeight}px`;
            icon.classList.remove('bi-arrow-down-square-fill');
            icon.classList.add('bi-arrow-up-square-fill');
          }
        });
      }
    });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section className="part-one">
          <div className="texts-one">
            <h1>Você acabou de encontrar<br /> <span className="destaque">A MELHOR PLATAFORMA<br /> de IPTV</span> do Brasil</h1>
            <h2>Assista seus programas favoritos sem travamentos,<br /> estabilidade de sinal e muita qualidade de som e imagem.</h2>
            <h3 className="btn-acess"><a href="https://tinyurl.com/metaflix-contact" target="_blank">QUERO ACESSAR AGORA</a></h3>
          </div>
          <img src={tv3d} alt="tv-3d" className="tv-3d" />
        </section>
        <section className="part-two">
          <img src={watch} alt="watching-tv" className="dispositivos-img" />
          <div className="texts-two">
            <h1 className="destaque">ASSISTA ONDE QUISER</h1>
            <div className="subtitle-content">
              <h3>A <span className="negrito italico">Metaflix Entretenimento</span> oferece um aplicativo totalmente adaptado para <span className="negrito">SMART TV, TV BOX, CELULARES ANDROID e iOS, CHROMECAST, FIRESTICK, COMPUTADOR, VIDEO-GAMES</span>, e muito mais...</h3>
              <div className="contents">
                <div className="contents-child">
                  <i className="bi bi-film destaque"></i>
                  <div>
                    <h4 className="destaque">São mais de 15 mil filmes!</h4>
                    <p>Nossa plataforma é recheada de filmes separados por gêneros, e uma seção exclusiva só com os lançamentos.</p>
                  </div>
                </div>
                <div className="contents-child">
                  <i className="bi bi-camera-video destaque"></i>
                  <div>
                    <h4 className="destaque">Todas as suas séries preferidas estão aqui.</h4>
                    <p>Chega de pagar um absurdo por cada streaming. Estão todos reunidos aqui!</p>
                  </div>
                </div>
                <div className="contents-child">
                  <i className="bi bi-tv destaque"></i>
                  <div>
                    <h4 className="destaque">O melhores canais da TV fechada? Também temos!</h4>
                    <p>São milhares de canais fechados e abertos para você acompanhar sua programação ao vivo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="logos">
          <div className="slide">
            {
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="logo"
                  className="img-logo"
                />
              ))
            }
            {
              images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="logo"
                  className="img-logo"
                />
              ))
            }
          </div>
        </section>
        <section className="part-three">
          <h3 className="destaque">AQUI VOCÊ ENCONTRA MUITA QUALIDADE</h3>
          <h1>Metaflix TV</h1>
          <div className="qualities">
            <div className="quality-box destaque">
              <i className="bi bi-cpu "></i>
              <div className="quality-text">
                <p className="destaque negrito">TECNOLOGIA</p>
                <p>Investimos na tecnologia CDN antitravamentos que permite absoluta estabilidade de sinal.</p>
              </div>
            </div>
            <div className="quality-box destaque">
              <i className="bi bi-whatsapp "></i>
              <div className="quality-text">
                <p className="destaque negrito destaque">SUPORTE TÉCNICO</p>
                <p>Nosso time está à sua disposição sempre, até finais de semana e feriados.</p>
              </div>
            </div>
            <div className="quality-box destaque">
              <i className="bi bi-cash-coin"></i>
              <div className="quality-text">
                <p className="destaque negrito destaque">PAGAMENTO</p>
                <p>Aceitamos PIX e Cartão de Crédito. Liberação de acesso imediata após envio do comprovante.</p>
              </div>
            </div>
            <div className="quality-box destaque">
              <i className="bi bi-cloud-check-fill"></i>
              <div className="quality-text">
                <p className="destaque negrito destaque">SERVIDOR</p>
                <p>Servidores 100% protegido contra quedas de sinal.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="part-four" id="planos">
          <h1>CONHEÇA OS <span className="destaque">NOSSOS PLANOS</span></h1>
          <h3>Faça parte do time <span className="negrito destaque italico">Metaflix</span>. Planos sem fidelidade, com ativação de sinal imediata.</h3>
          <div className="plans">
            <div className="plan-box destaque">
              <h2>PLANO <span className="destaque">MENSAL</span></h2>
              <div>
                <p><span className="destaque">de</span> <span className="riscado">R$ 35,00</span></p>
                <h1><span className="small-h1 destaque">por</span> R$ 29,90</h1>
              </div>
              <div className="plan-check">
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Teste GRÁTIS antes de assinar</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Qualidade 4K/FHD/HD/SD</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Canais / Filmes / Séries</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Todos os <span className="destaque">streamings</span> liberados</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Mais de 100 mil conteúdos</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>{`Guia de Programação [EPG]`}</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>{`Conteúdo Adulto (Opcional)`}</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Atualização diária</p>
                </div>
              </div>
              <div className="plan-btn">
                <a href="https://tinyurl.com/metaflix-contact" target="_blank">
                  <i className="bi bi-arrow-right-square destaque-2"></i>
                  <h3>ASSINAR</h3>
                </a>
              </div>
            </div>
            <div className="plan-box destaque">
              <h2>PLANO <span className="destaque">TRIMESTRAL</span></h2>
              <div>
                <p><span className="destaque">de</span> <span className="riscado">R$ 99,90</span></p>
                <h1><span className="small-h1 destaque">por</span> R$ 79,90</h1>
              </div>
              <div className="plan-check">
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Teste GRÁTIS antes de assinar</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Qualidade 4K/FHD/HD/SD</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Canais / Filmes / Séries</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Todos os <span className="destaque">streamings</span> liberados</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Mais de 100 mil conteúdos</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>{`Guia de Programação [EPG]`}</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>{`Conteúdo Adulto (Opcional)`}</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Atualização diária</p>
                </div>
              </div>
              <div className="plan-btn">
                <a href="https://tinyurl.com/metaflix-contact" target="_blank">
                  <i className="bi bi-arrow-right-square destaque-2"></i>
                  <h3>ASSINAR</h3>
                </a>
              </div>
            </div>
            <div className="plan-box destaque">
              <h2>PLANO <span className="destaque">SEMESTRAL</span></h2>
              <div>
                <p><span className="destaque">de</span> <span className="riscado">R$ 189,90</span></p>
                <h1><span className="small-h1 destaque">por</span> R$ 149,90</h1>
              </div>
              <div className="plan-check">
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Teste GRÁTIS antes de assinar</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Qualidade 4K/FHD/HD/SD</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Canais / Filmes / Séries</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Todos os <span className="destaque">streamings</span> liberados</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Mais de 100 mil conteúdos</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>{`Guia de Programação [EPG]`}</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>{`Conteúdo Adulto (Opcional)`}</p>
                </div>
                <div className="check">
                  <i className="bi bi-check2-square destaque"></i>
                  <p>Atualização diária</p>
                </div>
              </div>
              <div className="plan-btn">
                <a href="https://tinyurl.com/metaflix-contact" target="_blank">
                  <i className="bi bi-arrow-right-square destaque-2"></i>
                  <h3>ASSINAR</h3>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="part-five" id="perguntas">
          <h1>DÚVIDAS FREQUENTES</h1>
          <div className="faq-item">
            <h3 className="faq-question">O que é o teste grátis da plataforma <span className="destaque italico">Metaflix</span>?</h3>
            <div className="faq-answer">
              <p>O teste grátis da <span className="destaque italico">Metaflix</span> permite que você experimente nossa plataforma, oferecendo acesso completo à todos os canais e funcionalidades durante um período limitado, sem custos.</p>
            </div>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Posso usar a plataforma na minha TV comum?</h3>
            <div className="faq-answer">
              <p>{`Se você não possui uma TV SMART (com acesso à internet), você ainda pode usar nossa plataforma utilizando um TV BOX, CHROMECAST, FIRESTICK, entre outros aparelhos que transformam sua TV comum em uma Smart TV.`}</p>
            </div>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Em quais dispositivos posso usar a plataforma <b className="destaque italico">Metaflix</b>?</h3>
            <div className="faq-answer">
              <p>Nossa plataforma pode ser acessada de vários dispositivos:</p>
              <ul>
                <li>SMART TV</li>
                <li>TV BOX</li>
                <li>CELULAR Android e iOS</li>
                <li>CHROMECAST</li>
                <li>FIRESTICK</li>
                <li>COMPUTADOR</li>
                <li>VIDEO-GAMES</li>
                <li>E muito mais...</li>
              </ul>
              <p>Basta ser um dispositivo conectado à internet.</p>
            </div>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Posso assistir em mais de uma tela ao mesmo tempo?</h3>
            <p className="faq-answer">A configuração do seu login em diversos dispositivos é possível, mas, para assistir ao mesmo tempo, será necessário adquirir um ponto extra, dependendo do plano escolhido. Caso tenha alguma dúvida, entre em contato.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Por quanto tempo posso acessar o teste gratuito?</h3>
            <p className="faq-answer">O teste gratuito fica disponível por um período de 3 horas após o registro, permitindo que você explore todos os recursos.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Preciso fornecer informações de pagamento para acessar o teste?</h3>
            <p className="faq-answer">Teste sem compromisso! Você <b>não</b> precisa fornecer nenhuma informação de pagamento antes do teste.</p>
          </div>
          <div className="faq-item">
            <h3 className="faq-question">Como funciona o pagamento e as renovações?</h3>
            <p className="faq-answer">Você pode renovar nossos planos mensais via PIX ou cartão de crédito, tudo direto com nosso suporte no WhatsApp. Além disso, temos alternativas mais prolongadas, como trimestrais e semestrais, com descontos proporcionais ao período. A decisão é sua. Lembre-se de que nossas assinaturas não possuem multas nem fidelidade.</p>
          </div>
          <a href="https://tinyurl.com/metaflix-contact" target="_blank">
            <h3 className="btn-acess">QUERO ACESSAR AGORA</h3>
          </a>
        </section>
        <footer className="contact" id="contatos">
          <div className="footer-metalfix">
            <img src={metaflix} alt="metaflix-logo" />
            <div>
              <p>A <b className="destaque italico">Metaflix</b> é uma plataforma de assinatura que oferece uma ampla programação de TV para públicos de todas as idades.</p>
            </div>
          </div>
          <div className="bar"></div>
          <div className="footer-div">
            <h3>Fale Conosco</h3>
            <div>
              <a href="https://tinyurl.com/metaflix-contact" target="_blank" className="expand">
                <i className="bi bi-whatsapp "></i>
                <p>{`(22) 99248-9516`}</p>
              </a>
            </div>
          </div>
          <div className="bar"></div>
          <div className="footer-div redes">
            <h3>Siga-nos nas redes sociais</h3>
            <div>
              <a href="https://instagram.com/metaflixtv" target="_blank">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61557713080341&mibextid=ZbWKwL" target="_blank">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://tiktok.com/@metaflixtv" target="_blank">
                <i className="bi bi-tiktok"></i>
              </a>
              <a href="https://www.youtube.com/@metaflixtv" target="_blank">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>
        </footer>
        <p className="direitos">Metaflix Entretenimento - 2024 | Todos os direitos reservados.</p>
        <div>
          {isVisible && (
            <a href="#" onClick={scrollToTop}>
              <i className="bi bi-arrow-up-circle-fill scroll-to-top"></i>
            </a>
          )}
        </div>
      </main>
    </div>
  )
}
