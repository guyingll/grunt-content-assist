/*
 * grunt-content-assist
 * https://github.com/guyingll/grunt-content-assist
 *
 * Copyright (c) 2014 yanpeng
 * Licensed under the MIT license.
 */

'use strict';
var $ = require('jquery');

// the plugin to use jquery to get owntext except children texts
$.fn.owntext = function() {
   return $(this).clone().children().remove().end().text();
};

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('content_assist', 'content assist', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      namespace:""
    });

    function dom2property(elem){
        var property={},title=elem.find(".title");
        property.define=title.find(".meta").text();//define
        property.name=(title.find(".name").text()).trim();//name
        var type=title.eq(0).owntext();
        property.type=type.substring(type.indexOf(":")+1).trim();//type
        property.comment=elem.find(".description").find(".short").text();//shortcomment
              
        return property;
    }

    function dom2method(elem){

        var method={},title=elem.find(".title"),detail=elem.find(".description");

        method.define=title.find(".meta").text();//define
        method.name=(title.find(".name").text()).trim();//name
        method.comment=detail.find(".short").text().replace(new RegExp("\\n","g"),"");  

        var example=detail.find("code");
        
        if(example.length){
          method.example=example.text().replace(new RegExp("\\n","g"),"")  ;
        }
        
        var par=-1;
        var ret=-1;
        var pas=detail.find(".pa");
        if(pas.length){
          for(var i=0;i<pas.length;i++){ 
            var paname=pas.eq(i).text();
            paname=paname.replace(new RegExp("\\n","g"),"");  

            if("Parameters"===paname){
              par=i;
            }
            else if("Returns"===paname){
              ret=i;
            }
          }
        }
        

        if(par!==-1){
          var paras=detail.find("ul").eq(par).find("li");          

          var parameters=[];
          
          for(var para=0;para<paras.length;para++){
            var parameter={};

            parameter.paraname=paras.eq(para).find(".pre").text().replace(new RegExp("\\n","g"),"");  
               
            parameter.paraComment=paras.eq(para).find(".sub-desc").text().replace(new RegExp("\\n","g"),""); 

            var types=paras.eq(para).owntext();
            parameter.types=types.substring(types.lastIndexOf(":")+1).trim();    

            parameters.push(parameter);
          }

          method.paras=parameters;
        }
        

        if(ret!==-1){
          var returns=$(detail.find("ul").eq(ret)).find("li");
          method.returnType=returns.find(".pre").text();
          method.returnComment=returns.find(".sub-desc").text();
        }
        return method;
    }

    function genContent(api){
        var content="",namespace=api.namespace,statics=api.statics,
        constructor=api.constructor,protos=api.protos,define=api.define,
        superClass=api.superClass;
        // console.log(protos.methods)
        //gen property
        content+=getPropertyJs(define,statics,namespace,true);
        content+=getPropertyJs(define,protos,namespace,false);

        //gen method
        content+=getConstructMethodJs(define,constructor,namespace,superClass);
        content+=getStaticMethodJs(define,statics,namespace);
        content+=getProtoMethodJs(define,protos,namespace);
        return content;
    }


    function getPropertyJs(define,statics,namespace,isStatic){
      return statics.properties.reduce(function(sum,item){
        if(namespace!==define){
          return sum;
        }
        sum+="/**\n";
        sum+=" * @type "+item.type+"\n";
        sum+=" * @comment "+item.comment+"\n";
        sum+=" */\n";
        sum+=namespace;
        if(!isStatic){
          sum+=".prototype";
        }
        sum+="."+item.name+"=new "+item.type+"();\n";
        return sum;
      },"");
    }

    function getConstructMethodJs(define,constructor,namespace,superClass){
      var sb="",methods=constructor.methods;

      if(methods.length!==0){
        sb+=methods.reduce(function(sum,item){     
          var constr=getMethodJs(namespace,item,1,1);
          if(superClass!==undefined){
            constr=constr.replace(new RegExp(namespace+"\\(\\);","g"), superClass+"\\(\\);");
          }
          sum+=constr;
          return sum;
        },"");
      }
      else if(superClass===undefined&&namespace!=="global"){
        sb+="/**\n";
        sb+=" * @constructor new "+namespace+"()\n";
        sb+=" */\n";
        sb+=namespace+"=function(){};\n";
        sb+=namespace+".prototype"+"=new "+namespace+"();\n";
      }
      else if(namespace!=="global"){
        sb+="/**\n";
        sb+=" * @constructor new "+namespace+"()\n";
        sb+=" */\n";
        sb+=namespace+"=function(){};\n";
        sb+=namespace+".prototype"+"=new "+superClass+"();\n";
      }
      return sb;
    }

    function getStaticMethodJs(define,statics,namespace){
      return statics.methods.reduce(function(sum,item){
        return sum+=getMethodJs(namespace,item,2,2);
      },"");
    }

    function getProtoMethodJs(define,protos,namespace){
      return protos.methods.reduce(function(sum,item){
        return sum+=getMethodJs(namespace,item,2,3);
      },"");
    }
    
    function getMethodJs(namespace,method,commentType,methodType){
      var sb="";

      if(namespace!==method.define&&methodType!==1){
        return sb;
      }

      // StringBuilder sb=new StringBuilder();
      sb+="/**\n";

      switch(commentType){
        case 1:
          sb+=" * @constructor new "+method.name+getFunctionParas(method.paras)+"\n";
          break;
        case 2:
          sb+=" * Function "+method.name+getFunctionParas(method.paras)+"\n";
          break;
      }
      

      if(method.comment!==undefined){
        sb+=" * @comment "+method.comment+"\n";
      }
      
      if(method.paras!==undefined){
        for(var para in method.paras){
          sb+=" * @param";
          sb+=" ";
          sb+="{"+method.paras[para].types+"}";
          sb+=" ";
          sb+= method.paras[para].paraname;
          sb+="\n";
          sb+=" * "+method.paras[para].paraComment;
          sb+="\n";
        }
      }

      if(methodType!==1&&"global"!==namespace){
        sb+=" * @memberOf "+namespace.substring(namespace.lastIndexOf(".")+1)+"\n";
      }
      
      if(method.returnType!==undefined){
        sb+=" * @returns {"+method.returnType+"}\n";
      }
      
      if(method.returnComment!==undefined){
        sb+=" * "+method.returnComment+"\n";
      }
      
      
      if(method.example!==undefined){
        sb+=" * @example "+method.example+"\n";
      }
      

      sb+=" */\n";
      if("global"!==namespace){
        sb+=namespace;
      }

      switch(methodType){
        case 1:
          // sb+=getConstructorMethodJs(namespace);
          sb+="=function"+getFunctionParas(method.paras)+"{};\n";
          sb+=namespace+".prototype"+"=new "+method.define+"();\n";
          break;
        case 2:
          var tmp="."+method.name;
          tmp+="=function"+getFunctionParas(method.paras);
          tmp+="{};\n";

          if("global"===namespace){
            sb+="var ";
          }else{
            sb+=".";
          }
          sb+=method.name;
          sb+="=function"+getFunctionParas(method.paras);
          sb+="{};\n";
          break;
        case 3:
          sb+=".prototype."+method.name;
          sb+="=function"+getFunctionParas(method.paras);
          sb+="{};\n";
          break;
      }

      return sb;
    }


    function getFunctionParas(paras){
      return paras?paras.reduce(function(sum,item,index){
        if(index===paras.length-1){
          sum+=item.paraname+")";
        }else{
          sum+=item.paraname+",";
        }
        return sum;
      },"("):"()";
    }

    function getObjectTree(ns_string,obj,globelnamespace) {
        var parts = ns_string.split('.'),
            parent = obj,
            i;

        // strip redundant leading global
        if (parts[0] === globelnamespace) {
            parts = parts.slice(1);
        }
        for (i = 0; i < parts.length; i += 1) {
            // create a property if it doesn't exist
            if (typeof parent[parts[i]] === "undefined") {
                parent[parts[i]] = {};
                parent.length=(parent.length===undefined?1:parent.length+1);
            }
            parent = parent[parts[i]];
        }
        return parent;
    }
    
    function genPackageContent(result,global){
      var content="var "+global+"={\n",i=1;
      content+=genTree(result,i);
      content+="}";
      return content;
    }
    
    function genTree(parent,i){
    var content="",k=1;
    for(var pro in parent){     
      if(JSON.stringify(parent[pro]) === "{}"){
        content+=getTab(i)+pro+":"+"{\n";
        content+=getTab(i)+"}";
        content+=(parent.length===k?"\n":",\n");
          // content+=getTab(i)+"}\n";
          k++;
        }else if(pro!=="length"){
          content+=getTab(i)+pro+":"+"{\n";
          content+=genTree(parent[pro],i+1);
          content+=getTab(i)+"}";
          content+=(parent.length===k?"\n":",\n");
          k++;
        }
      }
      return content;
    }
    
    function getTab(num){
      var tab="  ",tabs="";
      while(num--){
        tabs+=tab;
      }
      return tabs;
    }

  var result={};
    this.files.forEach(function(f) {
       // Concat specified files.
       var src = f.src.filter(function(filepath) {
           // Warn on and remove invalid source files (if nonull was set).
           if (!grunt.file.exists(filepath)) {
             grunt.log.warn('Source file "' + filepath + '" not found.');
             return false;
           } else {
             return true;
           }
       }).map(function(filepath) {
           // Read file source.
           var src= grunt.file.read(filepath);
           //get json content
           src=src.substring(src.indexOf("(")+1, src.lastIndexOf(")"));  
           // src=src.replace(new RegExp("\\n","g"),"");  
           //change to eclipse 
           src=JSON.parse(src);

           src.doc=$(src.html);
           
           var api={};
           api.namespace=src.name;
           
           api.name=src.name.substring(src.name.lastIndexOf(".")+1);

           api.superClass=src.superClass;
           var constructor={
              methods:[]
           },statics={
              properties:[],
              methods:[]
           },protos={
              properties:[],
              methods:[]
           };

          src.members.forEach(function(item){
              var id=item.id,tag=item.tagname,name=item.name;
              if("global"===api.namespace){
                  if("property"===tag){
                    statics.properties.push(dom2property(src.doc.find("#"+id)));
                  }
                  else if ("method"===tag){
                    statics.methods.push(dom2method(src.doc.find("#"+id)));
                  } 
              }else{
                var isprivate=item.meta.private;
                var isstatic=item.meta.static;
                
                if(!isprivate){
                  //constructor
                  if("constructor"===name&&"method"===tag){
                    constructor.methods.push(dom2method(src.doc.find("#"+id)));
                  }
                  else if("property"===tag){
                    
                    if(isstatic){
                      statics.properties.push(dom2property(src.doc.find("#"+id)));
                    }
                    else{
                      protos.properties.push(dom2property(src.doc.find("#"+id)));
                    }
                  }
                  //method
                  else if("method"===tag){
                    if(isstatic){
                      statics.methods.push(dom2method(src.doc.find("#"+id)));
                    }
                    else{
                      protos.methods.push(dom2method(src.doc.find("#"+id)));
                    }
                    
                  }
                }
              }
            });
            api.statics=statics;
            api.protos=protos;
            api.constructor=constructor;

            var content=genContent(api);
            
            grunt.file.write(f.dest+"/"+api.namespace+".js", content);
            grunt.log.writeln('File "' + f.dest+"/"+api.namespace+".js" + '" created.');
            if(api.namespace!=="global"){
              getObjectTree(api.namespace,result,options.namespace);   
            }         
        });

    var packageContent=genPackageContent(result,options.namespace);
      // var packageContent="var "+this.options.namespace+"="; 
      // packageContent+=getString(this,0).replace(namespace+":", ""));
  
      grunt.file.write(f.dest+"/package.js",packageContent );
      grunt.log.writeln('File "' + f.dest+"/package.js" + '" created.');
    });

  });
};
