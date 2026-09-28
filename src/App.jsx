import React, { useState } from "react";
import "./index.css";

const youtubeUrl = ""; // Cole aqui o link do vídeo do YouTube quando estiver pronto.
const assetPath = (name) => `${import.meta.env.BASE_URL}images/${name}`;

const modules = [
  "Boas Vindas!",
  "Quadríceps Cadeira Extensora",
  "Quadríceps Cadeira Extensora pt2",
  "Quadríceps Leg Press",
  "Quadríceps Leg Press pt2",
  "Quadríceps Máquina Rack",
  "Quadríceps Máquina Rack pt2",
  "Posterior de Coxa",
  "Posterior de Coxa Stiff",
  "Quadríceps Passada",
  "Posterior de Coxa Mesa Flexora",
  "Posterior de Coxa Mesa Flexora pt2",
  "Posterior de Coxa Cadeira Flexora",
  "Posterior de Coxa Cadeira Flexora pt2",
  "Panturrilha",
  "Panturrilha pt2",
  "Coxa Interna Máquina Adução",
  "Coxa Interna Máquina Adução pt2",
  "Levantamento Terra",
  "Levantamento Terra pt2",
];

const benefits = [
  "Curso completo de exercícios para pernas",
  "Suporte",
  "Atualizações gratuitas",
  "Garantia de 7 dias",
  "Todos os bônus inclusos",
];

const faq = [
  {
    question: "Sou iniciante. Vou conseguir acompanhar?",
    answer:
      "Sim. O curso foi pensado para quem está começando na academia e também para quem já tem experiência e quer aprender mais sobre os exercícios.",
  },
  {
    question: "Preciso ter um personal ao meu lado?",
    answer:
      "Não. As aulas mostram os principais exercícios para você aprender a treinar com mais autonomia, no seu ritmo.",
  },
  {
    question: "Para quem é o curso?",
    answer:
      "Para mulheres que querem aprender exercícios para pernas e organizar melhor os próprios treinos.",
  },
];

function getYoutubeEmbedUrl(url) {
  if (!url.trim()) return "";

  try {
    const parsed = new URL(url);
    const videoId =
      parsed.hostname.includes("youtu.be")
        ? parsed.pathname.slice(1)
        : parsed.searchParams.get("v") ||
          parsed.pathname.match(/\/(?:embed|shorts)\/([^/?]+)/)?.[1];

    return videoId && /^[\w-]{11}$/.test(videoId)
      ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
      : "";
  } catch {
    return "";
  }
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m4 10 4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const videoEmbedUrl = getYoutubeEmbedUrl(youtubeUrl);

  return (
    <main className="page">
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Treine sem Personal Pernas — início">
          <span className="brand-mark">T</span>
          <span className="brand-name">TREINE SEM PERSONAL <b>· PERNAS</b></span>
        </a>
        <nav className="site-nav" aria-label="Navegação principal">
          <a href="#curso">O curso</a>
          <a href="#conteudo">Conteúdo</a>
          <a href="#garantia">Garantia</a>
        </nav>
        <a className="header-cta" href="#oferta">Ver o curso <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <div className="eyebrow"><span /> SEU TREINO, NO SEU RITMO</div>
            <h1>Construa pernas fortes com <em>mais autonomia.</em></h1>
            <p className="hero-lead">
              Aprenda os principais exercícios para pernas e treine com mais confiança,
              sem depender de um personal ao seu lado.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#oferta">Conhecer o curso <span aria-hidden="true">↓</span></a>
              <a className="button button-quiet" href="#conteudo">Ver o conteúdo</a>
            </div>
            <div className="hero-proof" aria-label="Informações do curso">
              <div><strong>20</strong><span>módulos de treino</span></div>
              <i aria-hidden="true" />
              <div><strong>7 dias</strong><span>de garantia</span></div>
              <i aria-hidden="true" />
              <div><strong>No seu ritmo</strong><span>do iniciante ao experiente</span></div>
            </div>
          </div>

          <div className="hero-video-wrap">
            <div className="video-label"><span className="live-dot" /> APRESENTAÇÃO DO CURSO</div>
            <div className="video-frame">
              {videoEmbedUrl ? (
                <iframe
                  src={videoEmbedUrl}
                  title="Apresentação do curso Treine sem Personal — Pernas"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <div className="video-placeholder">
                  <span className="play-button" aria-hidden="true">▶</span>
                  <strong>Seu vídeo entra aqui</strong>
                  <span>Espaço reservado para o link do YouTube</span>
                </div>
              )}
            </div>
            <div className="video-caption"><span>Treine sem Personal</span><span>·</span><span>Curso de pernas</span></div>
          </div>
        </div>
        <div className="hero-bottom-line" aria-hidden="true" />
      </section>

      <section className="intro-section section" id="curso">
        <div className="container intro-layout">
          <div className="product-art">
            <div className="art-orbit art-orbit-one" />
            <div className="art-orbit art-orbit-two" />
            <img src={assetPath("pernas-1.png")} alt="Material do curso Treine sem Personal — Pernas" />
            <span className="art-tag">TREINO COM AUTONOMIA</span>
          </div>
          <div className="intro-copy">
            <div className="eyebrow"><span /> UM GUIA PARA O SEU TREINO</div>
            <h2>Conheça os exercícios. <em>Treine com confiança.</em></h2>
            <p>
              Cada exercício, repetição e frequência importa. Com o curso, você aprende
              os movimentos mais usados nos treinos de pernas e pode praticar no seu
              horário, com mais clareza sobre cada etapa.
            </p>
            <ul className="check-list">
              <li><CheckIcon /> Aulas organizadas por exercício e grupo muscular</li>
              <li><CheckIcon /> Acesso para rever o conteúdo no seu ritmo</li>
              <li><CheckIcon /> Indicado para iniciantes e para quem já treina</li>
            </ul>
            <a className="text-link" href="#conteudo">Explore os módulos <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="content-section section" id="conteudo">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span /> CONTEÚDO DO CURSO</div>
              <h2>Um passo de cada vez. <em>Um treino de cada vez.</em></h2>
            </div>
            <p>Veja os exercícios que fazem parte do programa.</p>
          </div>
          <div className="module-panel">
            <div className="module-panel-top">
              <div><span className="panel-kicker">PROGRAMA COMPLETO</span><h3>Módulos e conteúdos</h3></div>
              <span className="module-count">{modules.length} aulas</span>
            </div>
            <ol className="module-list">
              {modules.map((item, index) => (
                <li key={item}>
                  <span className="module-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                  <span className="module-arrow" aria-hidden="true">↗</span>
                </li>
              ))}
            </ol>
            <div className="module-footer"><span /> Aprenda no seu ritmo, de onde estiver</div>
          </div>
          <div className="content-cta-row">
            <p>Pronta para dar o próximo passo no seu treino?</p>
            <a className="button button-primary" href="#oferta">Quero conhecer <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section className="offer-section section" id="oferta">
        <div className="offer-glow" aria-hidden="true" />
        <div className="container offer-layout">
          <div className="offer-copy">
            <div className="eyebrow"><span /> COMECE QUANDO QUISER</div>
            <h2>O seu próximo treino <em>começa aqui.</em></h2>
            <p>Tenha acesso ao curso completo e consulte as aulas sempre que precisar.</p>
            <ul className="offer-benefits">
              {benefits.map((benefit) => <li key={benefit}><CheckIcon />{benefit}</li>)}
            </ul>
            <div className="guarantee-inline"><span>7</span><p><strong>7 dias de garantia</strong><br />Experimente o curso e, se não for para você, solicite o reembolso dentro do prazo.</p></div>
          </div>
          <div className="offer-card">
            <div className="offer-card-top"><span>CURSO COMPLETO</span><span className="offer-spark" aria-hidden="true">✳</span></div>
            <h3>Treine sem Personal<br /><em>Pernas</em></h3>
            <div className="price-before">de <s>R$ 197,00</s> por</div>
            <div className="price">R$ 97<span>,00</span><small>/mês</small></div>
            <a
              className="button button-primary offer-button"
              href="SEU_LINK_DE_CHECKOUT_AQUI"
              onClick={(event) => {
                if (event.currentTarget.getAttribute("href") === "SEU_LINK_DE_CHECKOUT_AQUI") event.preventDefault();
              }}
            >Quero começar agora <span aria-hidden="true">↗</span></a>
            <p className="checkout-note">Acesso ao curso e todos os bônus inclusos.</p>
            <img className="seal" src={assetPath("selo-7-dias-alpha.png")} alt="Garantia de 7 dias" />
            <div className="secure-note"><span aria-hidden="true">⌑</span> Compra protegida</div>
          </div>
        </div>
      </section>

      <section className="faq-section section" id="garantia">
        <div className="container faq-layout">
          <div className="faq-intro">
            <div className="eyebrow"><span /> AINDA TEM DÚVIDAS?</div>
            <h2>Respostas para você <em>decidir com tranquilidade.</em></h2>
            <p>Se não encontrar o que procura, fale com a equipe de atendimento.</p>
            <a className="whatsapp-link" href="https://wa.me/SEU_NUMERO_AQUI?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Treine%20sem%20Personal%20Pernas" target="_blank" rel="noreferrer">
              <img src={assetPath("atendimento-whatsapp.svg")} alt="Atendimento via WhatsApp" />
            </a>
          </div>
          <div className="faq-list">
            {faq.map(({ question, answer }, index) => (
              <div className={`faq-item ${openFaq === index ? "is-open" : ""}`} key={question}>
                <button
                  className="faq-question"
                  aria-expanded={openFaq === index}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span>{question}</span><span className="faq-toggle" aria-hidden="true">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && <p className="faq-answer">{answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-top">
          <a className="brand" href="#inicio">
            <span className="brand-mark">T</span>
            <span className="brand-name">TREINE SEM PERSONAL <b>· PERNAS</b></span>
          </a>
          <a className="footer-top-link" href="#inicio">Voltar ao início ↑</a>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Treine sem Personal — Pernas.</p>
          <p>Os resultados dependem da consistência e das características individuais de cada pessoa.</p>
        </div>
        <img className="footer-img" src={assetPath("footer.png")} alt="Selos de compra segura" />
      </footer>
    </main>
  );
}
