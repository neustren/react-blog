import React, {Component} from 'react';
import styles from './slider.less';
import Assinatura from '../../components/assinatura/assinatura';
const banner = require('../../img/banner.png');

const bolinhaAmarela = require('../../img/sliderBolinhaAmarela.png');
const bolinhaCinza = require('../../img/sliderBolinhaCinza.png');
const sliderSetaEsquerdaBranca = require('../../img/sliderSetaEsquerdaBranca.png');
const sliderSetaEsquerdaCinza = require('../../img/sliderSetaEsquerdaCinza.png');
const sliderSetaDireitaBranca = require('../../img/sliderSetaDireitaBranca.png');
const sliderSetaDireitaCinza = require('../../img/sliderSetaDireitaCinza.png');


var placeholder=[{banner: banner, categoria: "Finanças", titulo: "Inadimplência: perspectivas continuam negativas para 2016", subTitulo: "Desemprego e a falta de educação são os dois maiores motivos, segundo pesquisa.", autor: "Isabella Abreu", data: "22/02/2015", tempo: "5 min"}, {banner: "http://cdn-w.pornstarblognetwork.com/clubfayereagan.com/public_html/wp-content/uploads/2010/08/0738.jpg", categoria: "Finanças", titulo: "Inadimplência: perspectivas continuam negativas para 2016", subTitulo: "Desemprego e a falta de educação são os dois maiores motivos, segundo pesquisa.", autor: "Isabella Abreu", data: "22/02/2015", tempo: "5 min"}];

export default class Slider extends Component {
  constructor(props) {

    super(props);
    this.state={selected: 0};
    this.dragging=false;

  }

  componentDidMount() {
    this.refs.slider.addEventListener("mousemove",(e) => { } )
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
        </div>
          <div className={styles.setinhasSlider2}>
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
        <Assinatura cor="white" autor={props.autor} data={props.data} tempo={props.tempo}></Assinatura>
        </div>

      </div>
    </div>
  </div>
)
}
