const genel = function (tagName) {
  if (Array.isArray(tagName)) {
    return genel.div.apply(null, arguments).firstChild
  }

  return function (strings) {
    const el = document.createElement(tagName)
    el.innerHTML = strings.map((str, i) => str + (arguments[i + 1] || '')).join('').trim()
    return el
  }
}

'a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,math,menu,menuitem,meta,meter,nav,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rb,rp,rt,rtc,ruby,s,samp,script,section,select,slot,small,source,span,strong,style,sub,summary,sup,svg,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr'.split(',').forEach(tagName => { genel[tagName] = genel(tagName) })

export default genel
