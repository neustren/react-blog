import React, {Component} from 'react';
import styles from './slider.less';

const banner = require('../../img/banner.png');
const leituraIcone = require('../../img/leituraIcone.png');
const bolinhaAmarela = require('../../img/sliderBolinhaAmarela.png');
const bolinhaCinza = require('../../img/sliderBolinhaCinza.png');
const sliderSetaEsquerdaBranca = require('../../img/sliderSetaEsquerdaBranca.png');
const sliderSetaEsquerdaCinza = require('../../img/sliderSetaEsquerdaCinza.png');
const sliderSetaDireitaBranca = require('../../img/sliderSetaDireitaBranca.png');
const sliderSetaDireitaCinza = require('../../img/sliderSetaDireitaCinza.png');

const dataIcone = require('../../img/dataIcone.png');


var placeholder=[{banner: banner, categoria: "Finanças", titulo: "Inadimplência: perspectivas continuam negativas para 2016", subTitulo: "Desemprego e a falta de educação são os dois maiores motivos, segundo pesquisa.", autor: "Isabella Abreu", data: "22/02/2015", tempo: "5 min"}, {banner: "http://cdn-w.pornstarblognetwork.com/clubfayereagan.com/public_html/wp-content/uploads/2010/08/0738.jpg", categoria: "Finanças", titulo: "Inadimplência: perspectivas continuam negativas para 2016", subTitulo: "Desemprego e a falta de educação são os dois maiores motivos, segundo pesquisa.", autor: "Isabella Abreu", data: "22/02/2015", tempo: "5 min"}];

export default class Slider extends Component {
  constructor(props) {

    super(props);
    this.state={selected: 0};
    this.dragging=false;

  }

  componentDidMount() {
    this.refs.slider.addEventListener("mousemove",(e) => { console.log('oi'+ (e.pageX-this.dragging)); } )
  }

  render() {
    return (
      <div className={styles.sliderWrapper}>
      <div  ref="slider" onMouseDown={(e) => {e.persist(); this.startScroll=this.refs.slider.scrollLeft; console.log(e); this.dragging=e.pageX||(e.pageX+1);}}
        onMouseUp={(e) => {var dragging=this.dragging; this.dragging=false; if(e.pageX-dragging>200) {this.refs.slider.scrollLeft=this.startScroll-window.innerWidth; return;} else if(e.pageX-dragging<-200) {this.refs.slider.scrollLeft=this.startScroll+window.innerWidth; return;} this.refs.slider.scrollLeft=this.startScroll}}
        onMouseMove={(e) => { if(!this.dragging) return; console.log(e.pageX-this.dragging); this.refs.slider.scrollLeft=this.startScroll-(e.pageX-this.dragging);}}
        onMouseLeave={(e) => {this.dragging=false}} className={styles.Slider}>
        {placeholder.map(function(x, i) {
          return (<Slide  key={i} {...x}></Slide>);
        })}

      </div>
      <div className={`${styles.controleSlider}`}>
        <div className="container">
        <div className={styles.bolinhasSlider}>
          {Array.apply(null, {length: placeholder.length}).map((x, i) => {
            return (this.state.selected===i)&&(<img key={i} src={bolinhaAmarela}></img>)||<img key={i} src={bolinhaCinza}></img>
          })}


          {/*<img src={bolinhaCinza}></img>*/}
        </div>
        <div className={styles.setinhasSlider}>
           {(this.state.selected===0)&&(<img src={sliderSetaEsquerdaCinza}></img>)||(<img src={sliderSetaEsquerdaBranca}></img>)}
            {(this.state.selected===(placeholder.length-1))&&(<img src={sliderSetaDireitaCinza}></img>)||(<img src={sliderSetaDireitaBranca}></img>)}
        </div>
      </div>
      </div>
    </div>
    )
  }
}

function Slide(props) {
  return (
  <div className={`${styles.imagemBanner}`} style={{
    backgroundImage: 'url(' + props.banner + ')'
  }}>
    <div className={styles.backgroundBanner}>
      <div className="container">
        <div className={styles.informacoesBanner}>
          <div className={styles.corCategoria}>{props.categoria}</div>
          <div className={styles.tituloBanner}>{props.titulo}</div>
          <div className={styles.subTituloBanner}>{props.subTitulo}</div>
          <div className={styles.descricaoBanner}>
            <div className={styles.preNomeAutorBanner}>por</div>
            <div className={styles.nomeAutorBanner}>{props.autor}</div>
            <div className={styles.mobileBlock}>
              <img className={styles.iconeDescricaoBanner} src={dataIcone}></img>
              <div className={styles.dataBanner}>{props.data}</div>
              <img className={styles.iconeDescricaoBanner} src={leituraIcone}></img>
              <div className={styles.leituraBanner}>{props.tempo} pra ler</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)
}
