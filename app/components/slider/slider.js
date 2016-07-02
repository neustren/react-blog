import React, {Component} from 'react';
import styles from './slider.less';
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


var placeholder=[];



export default class Slider extends Component {
  constructor(props) {

    super(props);
    this.state={selected: 0, placeholder: []};
    this.dragging=false;

  }

  updateDimensions() {
        this.setState({width: $(window).width(), height: $(window).height()});
    }


    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

  componentDidMount() {
    //this.refs.slider.addEventListener("mousemove",(e) => { } )
    window.addEventListener('resize', function(){
      if(!this.refs.slider) return;
    this.refs.slider.scrollLeft=window.innerWidth*this.state.selected;
  }.bind(this));
  window.addEventListener("resize", this.updateDimensions.bind(this));
  this.updateDimensions.call(this);

    $.ajax({
      url: ROOT_URL + '/wp-json/wp/v2/posts?categories=9',
      success: function(r) {

        this.setState({placeholder: r.map(function(a, i) {
          var d=new Date(a.date);
          return {
            banner: a.banner,
            titulo: a.title.rendered,
            subTitulo: a.Subtitulo[0],
            // data: ('0'+d.getDate()).slice(-2) + '/' + ('0' + (d.getMonth() + 1)).slice(-2) + '/' + d.getFullYear(),
            data: a.date.slice(8,10) + '/' + a.date.slice(5,7) + '/' + a.date.slice(0,4),
            categories: a.categories,
            tempo: a.minutos_para_ler[0],
            slug: a.slug

          }
        })});
      }.bind(this)
    });
    setInterval(function(){
      if(this.state.selected>=this.state.placeholder.length-1){
        this.megazord=1;
      }
      if(this.state.selected<=0){
        this.megazord=0;
      }
      this.moveTo(this.megazord ? this.state.selected-1 : this.state.selected+1);
    }.bind(this), 7000);

  }



  moveLeft() {
    //if(this.halt) return;
    if(this.halt||(this.state.selected===0)||!this.refs.slider) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft: window.innerWidth*(this.state.selected-1)
  }, 700);
  setTimeout(function() {
    this.halt=false;

    this.setState({selected: this.state.selected-1});
    if(!this.refs.slider) return;
    this.refs.slider.style.pointerEvents='';
  }.bind(this), 700);
  //  this.doScroll.call(this, this.refs.slider, this.startScroll-window.innerWidth);
  }

  moveTo(n) {
    if(this.halt||(n>this.state.placeholder.length-1)||(n<0)||!this.refs.slider) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft:window.innerWidth*n
  }, 700);
    setTimeout(function() {
      this.halt=false;

      this.setState({selected: n});
        if(!this.refs.slider) return;
        this.refs.slider.style.pointerEvents='';
    }.bind(this), 700);
    //this.startScroll=
  }

  moveRight() {
    if(this.halt||(this.state.selected===this.state.placeholder.length-1)||!this.refs.slider) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft:window.innerWidth*(this.state.selected+1)
  }, 700);
    setTimeout(function() {
      this.halt=false;

      this.setState({selected: this.state.selected+1});
      if(!this.refs.slider) return;
      this.refs.slider.style.pointerEvents='';
    }.bind(this), 700);
    //this.startScroll=
  }

  moveStart() {
    if(this.halt||!this.refs.slider) return;
    this.refs.slider.style.pointerEvents='none';
    $(this.refs.slider).animate({
    scrollLeft: window.innerWidth*this.state.selected
  }, 700);
  setTimeout(function() {
    this.halt=false;
    if(!this.refs.slider) return;
    this.refs.slider.style.pointerEvents='';
  }.bind(this));

    // this.doScroll.call(this, this.refs.slider, this.startScroll);
  }

  render() {
    console.log(this.state.selected);
    return (
      (this.state.width<1024) ? (<div className={styles.sliderWrapper}>
      <div  ref="slider" onMouseDown={(e) => {e.persist(); this.startScroll=this.refs.slider.scrollLeft;  this.dragging=e.pageX||(e.pageX+1);}}
        onMouseUp={(e) => {e.persist(); var dragging=this.dragging; this.dragging=false; if(e.pageX-dragging>100) {e.preventDefault(); e.stopPropagation; this.moveLeft.call(this);return;} else if(e.pageX-dragging<-100) {e.preventDefault(); e.stopPropagation; this.moveRight.call(this); return;} this.moveStart.call(this)}}
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
    </div>) :
    (<div ref="megaSlider" className={styles.megaSlider}>
      <Slide {...this.state.placeholder[0]} megaSchizo={true} megaCrap={this.refs.megaSlider}></Slide>
      <div className={styles.megaSchizo}>
        <MiniSlide {...this.state.placeholder[1]}></MiniSlide>
        <MiniSlide {...this.state.placeholder[2]}></MiniSlide>
        <MiniSlide {...this.state.placeholder[3]}></MiniSlide>
      </div>
    </div>)

    )
  }
}

class Slide extends Component {
  joinPost() {
        if(this.dragging||this.halt) return;
        this.context.router.push('/post/'+this.props.slug);

  }

  static contextTypes = {
  router: React.PropTypes.object.isRequired
  }

    componentDidMount() {
      window.addEventListener('resize', _.debounce(function(){
        // this.forceUpdate.call(this, function() {

          // $(this.refs.titulo).triggerHandler('update.dot');
          // $(this.refs.subTitulo).triggerHandler('update.dot');
        // }.bind(this));

    }.bind(this), 150).bind(this));
    // $(this.refs.titulo).dotdotdot();
    // $(this.refs.subTitulo).dotdotdot();
    }
  render() {
    var props=this.props;
  return (
  <div className={`${styles.megaImagemBanner}`} style={{
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
        {props.megaSchizo&& (  <div>
          <div className={styles.leiaMais}>
                LEIA MAIS {seta('#fff')}
              </div>
               <div onClick={(e) => {
                   e.stopPropagation();
                   e.preventDefault();
                 $('html, body').animate({
                    scrollTop: $(props.megaCrap).offset().top+$(props.megaCrap).height()
                  }, 700);
                 }} className={styles.vejaTudo}>{seta('#fff')}VEJA TODOS OS POSTS</div>
               </div>
            )}
        </div>

      </div>
    </div>
  </div>
)
  }
}

var seta=function(fill) {
  return (<svg style={{fill}} version="1.1" id="Camada_1" x="0px" y="0px"
  	 width="22px" height="22px" viewBox="0 0 22 22" enable-background="new 0 0 22 22" >
  <g>
  	<path d="M11,2.5c4.687,0,8.5,3.813,8.5,8.5s-3.813,8.5-8.5,8.5S2.5,15.687,2.5,11S6.313,2.5,11,2.5 M11,1C5.477,1,1,5.477,1,11
  		s4.477,10,10,10s10-4.477,10-10S16.523,1,11,1L11,1z"/>
  </g>
  <polygon points="13.652,7.818 12.591,6.757 9.409,9.939 8.348,11 12.591,15.243 13.652,14.182 10.47,11 "/>
  </svg>)
}

class MiniSlide extends Component {
  joinPost() {
        if(this.dragging||this.halt) return;
        this.context.router.push('/post/'+this.props.slug);

  }

  static contextTypes = {
  router: React.PropTypes.object.isRequired
  }

    componentDidMount() {
    // $(this.refs.titulo).dotdotdot();
    // $(this.refs.subTitulo).dotdotdot();
    }
  render() {
    var props=this.props;
  return (
  <div className={`${styles.schizoImagemBanner}`} style={{
    backgroundImage: 'url(' + props.banner + ')'
  }}>
    <div className={styles.backgroundBanner}>
      <div className={styles.maculele}>
        <div onClick={this.joinPost.bind(this)} style={{cursor: 'pointer'}} className={styles.informacoesBanner}>
          {/*<div className={styles.corCategoria}>{props.categoria}</div>*/}
          <Categorias opcoes={props.categories}></Categorias>
          <div ref="titulo" className={styles.tituloBanner}>{props.titulo}</div>
          <div ref="subTitulo"  className={styles.subTituloBanner}>{props.subTitulo}</div>
        <Assinatura cor="white" autor={props.autor} data={props.data} tempo={props.tempo}></Assinatura>
          <div className={styles.leiaMais}>
            LEIA MAIS {seta('#fff')}
          </div>
        </div>

      </div>
    </div>
  </div>
)
  }
}
