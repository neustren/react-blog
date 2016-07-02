import React, {Component} from 'react';

import { ROOT_URL } from '../../actions/index';

import $ from 'jquery';

import styles from './destaque.scss';
import {Link} from 'react-router';
import Categoria from '../categorias/categorias';


const Centro = require('../../img/Centro.png');
const dataIcone = require('../../img/dataIcone.png');
const Mundo = require('../../img/Mundo.png');
const Financas = require('../../img/Financas.png');
const Imoveis = require('../../img/Imoveis.png');
const Direita = require('../../img/Direita.png');
const Esquerda = require('../../img/Esquerda.png');

const sliderSetaEsquerdaBranca = require('../../img/aleEsqWhite.png');
const sliderSetaEsquerdaCinza = require('../../img/aleEsqGrey.png');
const sliderSetaDireitaBranca = require('../../img/aleDirWhite.png');
const sliderSetaDireitaCinza = require('../../img/aleDirGrey.png');

export default class Destaque extends Component {
  constructor() {
    super();
    this.state={selected: 0, placeholder:[{}]};
    this.dragging=false;
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



  componentDidMount() {
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
            banner: a.banner||a.preview_image,
            titulo: a.title.rendered,
            subTitulo: a.Subtitulo[0],
            data: a.date.slice(8,10) + '/' + a.date.slice(5,7) + '/' + a.date.slice(0,4),
            // autor: a.autor_name[0],
            categories: a.categories,
            tempo: a.minutos_para_ler[0],
            slug: a.slug,
            imagem: a.preview_image||a.banner

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
  render() {

return (
  <div className={styles.sliderWrapper}>
    <div className={styles.controleSlider}>
        <div className={styles.materiasEmDestaque}>MATÉRIAS EM DESTAQUE</div>

    <div className={styles.paginacaoDestaque}>
      <div className={styles.pagWrapper}>
      {(this.state.selected===0)&&(<img width="28" height="40" src={sliderSetaEsquerdaCinza}></img>)||(<img width="28" height="40" style={{cursor: 'pointer'}} onClick={this.moveTo.bind(this,this.state.selected-1)} src={sliderSetaEsquerdaBranca}></img>)}
        {(this.state.selected===(this.state.placeholder.length-1))&&(<img width="28" height="40" src={sliderSetaDireitaCinza}></img>)||(<img width="28" height="40" onClick={this.moveTo.bind(this,this.state.selected+1)} style={{cursor: 'pointer'}} src={sliderSetaDireitaBranca}></img>)}
      </div>
    </div>
    </div>
    <div ref="slider"
      onMouseDown={(e) => { e.persist(); this.startScroll=this.refs.slider.scrollLeft;  this.dragging=e.pageX||(e.pageX+1);}}
        onMouseUp={(e) => {e.persist(); var dragging=this.dragging; this.dragging=false; if(e.pageX-dragging>100) {this.moveTo.call(this,this.state.selected-1);return;} else if(e.pageX-dragging<-100) {this.moveTo.call(this, this.state.selected+1); return;} this.moveTo.call(this,this.state.selected)}}
        onMouseMove={(e) => {e.persist(); if(!this.dragging) return;  this.refs.slider.scrollLeft=this.startScroll-(e.pageX-this.dragging);}}
        onMouseLeave={(e) => {if(this.dragging) {this.moveTo.call(this, this.state.selected); this.dragging=false}}}
      className={styles.Slider}>
      {this.state.placeholder.map(function(a, i) {
          return <DesSlide {...a} key={i} />
      })}

    </div>

</div>

)
}
}

class DesSlide extends Component {
  joinPost() {

        this.context.router.push('/post/'+this.props.slug);

  }

  static contextTypes = {
  router: React.PropTypes.object.isRequired
  }
  render() {
    var mull=null;
    var props=this.props;
    return (<div style={{backgroundImage: 'url(' + props.banner + ')'}} className={styles.backgroundOpaco}>
      <div className={styles.opacidadeAqui}>

      <div className={styles.caixaImagem}>
        {/*<img src={props.imagem} className={styles.imagemDestaque}></img>*/}
        <div className={styles.imagemBlog}><div className={styles.content} style={{backgroundImage: `url('${props.imagem||mull}')`, backgroundSize: 'cover'}}></div></div>
        <div className={styles.tagFlutuante}>
          {/*<img src={props.preview_image} className={styles.imagemFlutuante}></img>*/}
          <Categoria opcoes={props.categories}></Categoria>
        </div>
      </div>
      <div onClick={this.joinPost.bind(this)} style={{cursor: 'pointer'}} className={styles.descricaoDestaque}>
      <div className={styles.tituloDestaque}>{props.titulo}</div>
        <div className={styles.descricaoBanner} >
          {/*<div className={styles.preNomeAutorBanner}>por</div>
          <div className={styles.nomeAutorBanner} >{props.autor}</div>*/}
            <img className={styles.iconeDescricaoBanner} src={dataIcone}></img>
            <div className={styles.dataBanner}>{props.data}</div>
          </div>
        </div>


    </div>
  </div>)
  }
}
