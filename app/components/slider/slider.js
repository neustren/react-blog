import React, {Component} from 'react';
import styles from './slider.css';
import Assinatura from '../../components/assinatura/assinatura';
import Categorias from '../../components/categorias/categorias';
import $ from 'jquery';
require('../../helpers/dotdotdot');

import { ROOT_URL } from '../../actions/index';

console.log($);

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
    this.state={selected: 0, placeholder: []};
    this.dragging=false;

  }

  componentDidMount() {
    //this.refs.slider.addEventListener("mousemove",(e) => { } )
    window.addEventListener('resize', function(){
      if(!this.refs.slider) return;
    this.refs.slider.scrollLeft=window.innerWidth*this.state.selected;
  }.bind(this));

    $.ajax({
      url: ROOT_URL + '/wp-json/wp/v2/posts?categories=9',
      success: function(r) {

        this.setState({placeholder: r.map(function(a, i) {
          var d=new Date(a.date);
          return {
            banner: a.banner,
            titulo: a.title.rendered,
            subTitulo: a.Subtitulo[0],
            data: ('0'+d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear(),
            autor: a.autor_name[0],
            categories: a.categories,
            tempo: a.minutos_para_ler[0],
            slug: a.slug

          }
        })});
      }.bind(this)
    });

  }



  moveLeft() {
    //if(this.halt) return;
    if(this.halt||(this.state.selected===0)) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft: window.innerWidth*(this.state.selected-1)
  }, 700);
  setTimeout(function() {
    this.halt=false;
    this.refs.slider.style.pointerEvents='';
    this.setState({selected: this.state.selected-1});
  }.bind(this), 700);
  //  this.doScroll.call(this, this.refs.slider, this.startScroll-window.innerWidth);
  }

  moveTo(n) {
    if(this.halt||(n>this.state.placeholder.length-1)||(n<0)) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft:window.innerWidth*n
  }, 700);
    setTimeout(function() {
      this.halt=false;
      this.refs.slider.style.pointerEvents='';
      this.setState({selected: n});
    }.bind(this), 700);
    //this.startScroll=
  }

  moveRight() {
    if(this.halt||(this.state.selected===this.state.placeholder.length-1)) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft:window.innerWidth*(this.state.selected+1)
  }, 700);
    setTimeout(function() {
      this.halt=false;
      this.refs.slider.style.pointerEvents='';
      this.setState({selected: this.state.selected+1});
    }.bind(this), 700);
    //this.startScroll=
  }

  moveStart() {
    if(this.halt) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft: window.innerWidth*this.state.selected
  }, 700);
  setTimeout(function() {
    this.halt=false;
    this.refs.slider.style.pointerEvents='';
  }.bind(this));

    // this.doScroll.call(this, this.refs.slider, this.startScroll);
  }

  render() {
    console.log(this.state.selected);
    return (
      <div className={styles.sliderWrapper}>
      <div  ref="slider" onMouseDown={(e) => {e.persist(); this.startScroll=this.refs.slider.scrollLeft;  this.dragging=e.pageX||(e.pageX+1);}}
        onMouseUp={(e) => {e.persist(); var dragging=this.dragging; this.dragging=false; if(e.pageX-dragging>200) {this.moveLeft.call(this);return;} else if(e.pageX-dragging<-200) {this.moveRight.call(this); return;} this.moveStart.call(this)}}
        onMouseMove={(e) => {e.persist(); if(!this.dragging) return;  this.refs.slider.scrollLeft=this.startScroll-(e.pageX-this.dragging);}}
        onMouseLeave={(e) => {if(this.dragging) {this.moveStart.call(this); this.dragging=false}}}
         className={styles.Slider}>
        {this.state.placeholder.map(function(x, i) {
          return (<Slide  key={i} {...x}></Slide>);
        })}

      </div>
      <div className={`${styles.controleSlider}`}>
        <div className="container">
        <div className={styles.bolinhasSlider}>
          {Array.apply(null, {length: this.state.placeholder.length}).map((x, i) => {
            return (this.state.selected===i)&&(<img key={i} src={bolinhaAmarela}></img>)||<img key={i} onClick={this.moveTo.bind(this,i)} style={{cursor: 'pointer'}} src={bolinhaCinza}></img>
          })}


          {/*<img src={bolinhaCinza}></img>*/}
        </div>
        <div className={styles.setinhasSlider}>
           {(this.state.selected===0)&&(<img src={sliderSetaEsquerdaCinza}></img>)||(<img style={{cursor: 'pointer'}} onClick={this.moveLeft.bind(this)} src={sliderSetaEsquerdaBranca}></img>)}
        </div>
          <div className={styles.setinhasSlider2}>
            {(this.state.selected===(this.state.placeholder.length-1))&&(<img src={sliderSetaDireitaCinza}></img>)||(<img onClick={this.moveRight.bind(this)} style={{cursor: 'pointer'}} src={sliderSetaDireitaBranca}></img>)}
        </div>
      </div>
      </div>
    </div>
    )
  }
}

class Slide extends Component {
  joinPost() {

        this.context.router.push('/post/'+this.props.slug);

  }

  static contextTypes = {
  router: React.PropTypes.object.isRequired
  }

    componentDidMount() {
      window.addEventListener('resize', _.debounce(function(){
        // this.forceUpdate.call(this, function() {

          $(this.refs.titulo).triggerHandler('update.dot');
          $(this.refs.subTitulo).triggerHandler('update.dot');
        // }.bind(this));

    }.bind(this), 150).bind(this));
    $(this.refs.titulo).dotdotdot();
    $(this.refs.subTitulo).dotdotdot();
    }
  render() {
    var props=this.props;
  return (
  <div className={`${styles.imagemBanner}`} style={{
    backgroundImage: 'url(' + props.banner + ')'
  }}>
    <div className={styles.backgroundBanner}>
      <div className="container">
        <div onClick={this.joinPost.bind(this)} style={{cursor: 'pointer'}} className={styles.informacoesBanner}>
          {/*<div className={styles.corCategoria}>{props.categoria}</div>*/}
          <Categorias opcoes={props.categories}></Categorias>
          <div ref="titulo" className={styles.tituloBanner}>{props.titulo}</div>
          <div ref="subTitulo"  className={styles.subTituloBanner}>{props.subTitulo}</div>
        <Assinatura cor="white" autor={props.autor} data={props.data} tempo={props.tempo}></Assinatura>
        </div>

      </div>
    </div>
  </div>
)
  }
}
