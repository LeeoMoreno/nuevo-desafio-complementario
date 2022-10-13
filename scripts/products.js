/* Creación de Clases */
class Celular {
  constructor(id, marca, modelo, precio, imagen) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.imagen = imagen;
  }
}

/* Creación de celulares */
let celulares = [];

const cel1 = new Celular(1, "Apple", "Iphone 14 Pro", 1400, "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704099/Proyecto%20-%20New%20Phone/1-iphone-14-pro-max_cvdlhn.png");
const cel2 = new Celular(2, "Apple", "Iphone 13 Pro Max", 1200, "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704094/Proyecto%20-%20New%20Phone/2-iphone-13-pro-max_derph2.png");
const cel3 = new Celular(3, "Samsung", "Galaxy S22 Ultra", 1200, "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704095/Proyecto%20-%20New%20Phone/3-samsung-galaxy-S22-ultra_n6yogj.png");
const cel4 = new Celular(4, "Apple", "Iphone 14 Pro", 1100 , "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704093/Proyecto%20-%20New%20Phone/4-iphone-14-pro_rksoko.webp");
const cel5 = new Celular(5, "Apple", "Iphone 13 Pro", 900, "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704093/Proyecto%20-%20New%20Phone/5-iphone-13-pro_gguibn.webp");
const cel6 = new Celular(6, "Samsung", "Galaxy Z3 Fold", 1000, "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704095/Proyecto%20-%20New%20Phone/6-samsung-z-fold-3_iwhz4h.png");
const cel7 = new Celular(7, "Samsung", "Galaxu S21 FE", 600, "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704097/Proyecto%20-%20New%20Phone/7-samsung-s21-fe_vs5cfc.png");
const cel8 = new Celular(8, "Samsung", "Galaxy S20 FE", 400 , "https://res.cloudinary.com/dfhc2y5yk/image/upload/v1665704095/Proyecto%20-%20New%20Phone/8-samsung-s20-fe_rfhqjh.png");



celulares.push(cel1, cel2, cel3, cel4, cel5, cel6, cel7, cel8);
switch (ordenador?.value) {
  case "rec":
    celulares.sort((a, b) => b.id - a.id);
    break;
  case "mame":
    celulares.sort((a, b) => b.precio - a.precio);
    break;
  case "mema":
    celulares.sort((a, b) => a.precio - b.precio);
    break;
}