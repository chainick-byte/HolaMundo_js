var familia={
    nombre: "Stark",
    castillo: {
        nombre: "Invernalia",
        gobierno:{
            Lord: "Ned Star",
            Lady: "Cathlyn Stark",
        },
        lema: "Invierno se acerca",

    },
    hijos:[
        {edad: 14, nombre: "Rob Stark"},
        {edad: 14, nombre: "Jhon Snow"},
        {edad: 11, nombre: "Sansa Stark"},
        {edad: 9, nombre: "Arya Stark"},
        {edad: 7, nombre: "Bran Stark"},
        {edad: 3, nombre: "Rickon Stark"},
    ],
    fundador: function(){
        document.write("Brandon el Constructor");
    },
    listado: function(){
        for(i in this.hijos){
            document. write(this.hijos[i].nombre + " edad: "+this.hijos[i].edad+"<Br>");
        }
    }
    
};
function prueba2(){
    console.log("jefe: " + familia.castillo.gobierno.Lord);
    console.log("lema: " + familia.castillo.lema);
    console.log("hijo tercer es..." + familia.hijos[2].nombre + "!");
}