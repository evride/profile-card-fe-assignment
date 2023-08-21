const css = require('./scss/main.scss');
import jsonPathReq from './static/data/cards-data.json';
import App from './app';



/**
 *
 *  THIS METHOD RETURNS THUMBNAIL URL BASED ON THUMBNAIL PROP VALUE
 *
 * */
const createImageFinderMethod = ()=> {

  function getImgThumbsObj() {
    const imgFilesObj = require.context('imgs/thumbs', true, /\.jpg|\.jpeg|\.svg|\.png$/);
    const imgCache = {};
    const importAll = (r) => r.keys().forEach(key => imgCache[key] = r(key));
    importAll(imgFilesObj);
    return imgCache;
  }

  const imgThumbsObj = getImgThumbsObj();
  return (imgUrl)=>imgThumbsObj[imgUrl];

}

window._getThumbnailURL = createImageFinderMethod();


const app = new App(document.getElementById('app'), jsonPathReq);
