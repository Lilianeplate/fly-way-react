import React from "react"; // Importa o React para criar o componente funcional
import Slider from "react-slick"; // Importa o Slider da biblioteca react-slick

// Importa os estilos do Slick (obrigatórios para o funcionamento do carrossel)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importa os estilos personalizados do componente (CSS Modules)
import styles from "./ImageSlider.module.css";

// Importação das imagens do diretório 'assets'
import sydney from "@/assets/sydney.png";
import portugal from "@/assets/portugalp.png";
import canada from "@/assets/canada.png";


// Array contendo as imagens e seus respectivos títulos
const slides = [
  { src: sydney, title: "Austrália" },
  { src: portugal, title: "Portugal" },
  { src: canada, title: "Canadá" },
];

const ImageSlider = () => {
  // Configurações do slider (parâmetros fornecidos pela biblioteca react-slick)
  const settings = {
    dots: true, // Exibe indicadores de navegação (bolinhas abaixo do slider)
    infinite: true, // Permite navegação infinita (volta ao primeiro slide após o último)
    speed: 500, // Tempo da transição entre slides (em milissegundos)
    slidesToShow: 1, // Número de slides visíveis por vez
    slidesToScroll: 1, // Número de slides avançados por vez
    autoplay: true, // Ativa a troca automática de slides
    autoplaySpeed: 3000, // Tempo entre cada troca de slide (3 segundos)
  };

  return (
    <div className={styles.sliderContainer}> {/* Container principal do slider */}
      <Slider {...settings}> {/* Aplica as configurações ao componente Slider */}
        {slides.map((slide, index) => ( // Percorre o array de imagens e cria os slides dinamicamente
          <div key={index} className={styles.slide}> {/* Cada slide recebe uma key única */}
            <img src={slide.src} alt={slide.title} className={styles.image} /> {/* Imagem do slide */}
            <div className={styles.overlay}> {/* Camada escura para melhorar a legibilidade do título */}
              <h2>{slide.title}</h2> {/* Exibe o título da imagem */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider; // Exporta o componente para ser utilizado em outros arquivos
