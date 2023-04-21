import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  id: string = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getInformacion();
  }

  getInformacion(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string
  }

  productos = [
    // mayores a $100
    {
      titulo: "Acer Nitro 5",
      precio: 709.76,
      tipoEnvio: "TERRESTRE",
      imagenURL: "../../assets/productos-inv/acer-nitro-5.webp",
      description: "Acer Nitro 5 AN515-55-53E5 portátil para videojuegos con Intel Core i5-10300H, unidad de procesamiento de gráficos NVIDIA GeForce RTX 3050, pantalla IPS FHD de 15.6 pulgadas con frecuencia de actualización de 144 Hz, 8 GB DDR4, unidad de estado sólido SSD NVMe de 256 GB, Intel Wi-Fi 6, teclado retroiluminado",
      amazonURL: "https://www.amazon.com/-/es/AN515-55-53E5-procesamiento-15-6-pulgadas-actualizaci%C3%B3n-retroiluminado/dp/B092YHJGMN/ref=sr_1_4?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3NA3EMHMPT3MF&keywords=Acer%2BNitro%2B5&qid=1681337110&sprefix=acer%2Bnitro%2B5%2Caps%2C277&sr=8-4&th=1",
      id: "ACER001"
    },
    {
      titulo: "Lenovo Ideapad Gaming 3",
      precio: 779.00,
      tipoEnvio: "AEREO",
      imagenURL: "../../assets/productos-inv/lenovo-ideapad-gaming-3.webp",
      description: "Lenovo IdeaPad Gaming 3 15 Laptop 15.6 pulgadas FHD IPS 120Hz (DC regulador) AMD Ryzen 5000 Series Hexa-Core Ryzen 5 5600H 16GB RAM 512GB SSD GeForce RTX 3050 Ti 4GB retroiluminado USB-C Win11 negro + cable HDMI",
      amazonURL: "https://www.amazon.com/Lenovo-IdeaPad-Gaming-regulador-retroiluminado/dp/B0BTDHM5LZ/ref=sr_1_1_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3MO8UDP9I9BC2&keywords=Lenovo%2BIdeapad%2BGaming%2B3&qid=1681336079&sprefix=lenovo%2Bideapad%2Bgaming%2B3%2Caps%2C199&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExUTg1OURGNUg0ODIzJmVuY3J5cHRlZElkPUExMDQ2NjEwMlVaS1RUQ0xSUU5EVyZlbmNyeXB0ZWRBZElkPUEwMDYxMzk0M01KNkhZOVpLWDI1QyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU&th=1",
      id: "LENO002"
    },
    {
      titulo: "ASUS TUF Gaming F15",
      precio: 1099.99,
      tipoEnvio: "MARITIMO",
      imagenURL: "../../assets/productos-inv/asus-tuf-gaming-f15.webp",
      description: "ASUS TUF Gaming F15, pantalla tipo IPS FHD de 15.6 pulgadas, procesador Intel Core i7-11800H, GeForce RTX 3050 Ti, 16 GB DDR4 RAM, 512 GB PCIe SSD, Wi-Fi 6, Windows 11 Home, FX506HEB-IS73",
      amazonURL: "https://www.amazon.com/-/es/pantalla-pulgadas-procesador-i7-11800H-FX506HEB-IS73/dp/B0B13Y8LK2/ref=sr_1_6?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3PBNG6Y1O9OPY&keywords=ASUS+TUF+Gaming+F15&qid=1681335952&sprefix=asus+tuf+gaming+f15%2Caps%2C330&sr=8-6",
      id: "ASUS003"
    },
    {
      titulo: "Lenovo Legion 5",
      precio: 650.39,
      tipoEnvio: "COHETE",
      imagenURL: "../../assets/productos-inv/lenovo-legion-5.webp",
      description: "Lenovo Legion 5 - Laptop para juegos, pantalla FHD IPS de 15.6 pulgadas, AMD Ryzen 5 4600H, cámara web, teclado retroiluminado, Wi-Fi 6, USB-C, HDMI, GeForce GTX 1650 Ti, Windows 10 Home, memoria de 8 GB, SSD PCIe de 256 GB + disco duro de 1 TB",
      amazonURL: "https://www.amazon.com/-/es/Lenovo-Legion-pantalla-pulgadas-retroiluminado/dp/B08L27GRVM/ref=sr_1_11_mod_primary_new?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GY282FDT08ZB&keywords=Lenovo%2BLegion%2B5&qid=1681335702&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=lenovo%2Blegion%2B5%2Caps%2C139&sr=8-11&th=1",
      id: "LENO004"
    },
    {
      titulo: "Asus Rog Zephyrus G14",
      precio: 1174.98,
      tipoEnvio: "SUBTERRANEO",
      imagenURL: "../../assets/productos-inv/asus-rog-zephyrus-g14.webp",
      description: "ASUS ROG Zephyrus G14 14.0 pulgadas 144Hz FHD IPS Laptop para juegos (AMD Ryzen 7 5800HS 8-Core, 16GB RAM, 512GB SSD, GeForce RTX 3060 6GB GDDR6, KYB retroiluminado, huella digital, WiFi 6, BT 5.2, Win 11 Home) con Hub",
      amazonURL: "https://www.amazon.com/-/es/Zephyrus-Laptop-GeForce-retroiluminado-digital/dp/B0B986B2N7/ref=sr_1_3?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1UHJXR5E10B4&keywords=Asus+Rog+Zephyrus+G14&qid=1681335489&sprefix=asus+rog+zephyrus+g14%2Caps%2C240&sr=8-3",
      id: "LENO005"
    },
    // menor a $100
    {
      titulo: "KingKong Controller",
      precio: 69.70,
      tipoEnvio: "EN MOTO",
      imagenURL: "../../assets/productos-inv/guliKit-kingKong-wireless-controller.webp",
      description: "GuliKit KingKong 2 Pro Wireless Controller for Switch/Andriod/IOS/PC/MacOS,Bluetooth Game Controller with Hall Effect Sensing Joystick,No Drifting No Deadzone,FPS Model,Auto Pilot Gaming,Vibration",
      amazonURL: "https://www.amazon.com/KingKong-Wireless-Controller-Bluetooth-Vibration-Android/dp/B0B7JRM795/ref=sr_1_1_sspa?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2ISKQW4TAYSIP&keywords=controller%2Bpc%2Bking%2Bkong&qid=1681312966&sprefix=controller%2Bpc%2Bking%2Bkong%2Caps%2C131&sr=8-1-spons&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFZRFZCUDFYSThXUEsmZW5jcnlwdGVkSWQ9QTA1NjkxMDUzSU5ETzBCQ0tHWkQxJmVuY3J5cHRlZEFkSWQ9QTA5NDIzMTJUTFBQRTlSVU1GRUYmd2lkZ2V0TmFtZT1zcF9hdGYmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl&th=1",
      id: "KING006"
    },
    {
      titulo: "Razer Orbweaver Chroma",
      precio: 74.99,
      tipoEnvio: "DRONE SUBMARINO",
      imagenURL: "../../assets/productos-inv/razer-orbweaver-chroma.webp",
      description: "Razer Orbweaver Chroma - Teclado de gaming, Negro clásico",
      amazonURL: "https://www.amazon.com/Razer-Tartarus-Progammable-Detachable-Mecha-Membrane/dp/B07754PYFK/ref=sr_1_15?keywords=gaming%2Bkeyboard&ie=UTF8&useRedirectOnSuccess=1&ref_=dex_glow_signin&path=%2FRazer-Tartarus-Progammable-Detachable-Mecha-Membrane%2Fdp%2FB07754PYFK%2Fref%3Dsr_1_15%3Fkeywords%3Dgaming%2Bkeyboard&pd_rd_r=206c8f2f-16f1-41fc-8a2a-c71669832957&pd_rd_w=70wFG&pd_rd_wg=Q45wX&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=0QXXTK22JR4V75NRXKNE&qid=1681312775&sr=8-15&th=1",
      id: "RAZE007"
    },
    {
      titulo: "Redragon MMO Mouse",
      precio: 34.99,
      tipoEnvio: "DRONE TERRESTRE",
      imagenURL: "../../assets/productos-inv/redragon-M811-aatrox-mouse.webp",
      description: "Redragon M811 Aatrox MMO Mouse para juegos, 15 botones programables con cable RGB para gamer, con construcción ergonómica de agarre natural, 10 teclas macro laterales, software compatible con encuadernación de teclas y retroiluminación",
      amazonURL: "https://www.amazon.com/dp/B0B3J9WSJQ/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B0B3J9WSJQ&pd_rd_w=5E2Hw&content-id=amzn1.sym.88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_p=88097cb9-5064-44ef-891b-abfacbc1c44b&pf_rd_r=FVV47FSJH86W5J2ZZW94&pd_rd_wg=mwLpb&pd_rd_r=1a4d1cc2-63de-43ab-a537-15e40e81fa0d&s=pc&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFWWFZIRTE2N0RRTTcmZW5jcnlwdGVkSWQ9QTAxMDUxNDVLSFdaOEtRQUUyUTImZW5jcnlwdGVkQWRJZD1BMDA0MzYzOU85OVNVNjI3RTBBTyZ3aWRnZXROYW1lPXNwX2RldGFpbCZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=",
      id: "REDR008"
    },
    {
      titulo: "Auriculares para juegos",
      precio: 23.99,
      tipoEnvio: "DRONE AEREO",
      imagenURL: "../../assets/productos-inv/auriculares-juegos.webp",
      description: "BINNUNE - Auriculares para juegos para PS4, PS5, PC, Xbox One, Playstation 4, Xbox 1, auriculares para juegos con micrófono, auriculares con micrófono",
      amazonURL: "https://www.amazon.com/-/es/BINNUNE-Auriculares-Playstation-auriculares-micr%C3%B3fono/dp/B0952X2JJF/ref=sr_1_5?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=WM71A2W89GAT&keywords=gaming%2Baudifonos&qid=1681312870&sprefix=gaming%2Baudifono%2Caps%2C137&sr=8-5&th=1",
      id: "BINN009"
    },
    {
      titulo: "Base de refrigeración para laptop",
      precio: 35.77,
      tipoEnvio: "TELETRANSPORTACION",
      imagenURL: "../../assets/productos-inv/almohadilla-refrigeración-laptop.webp",
      description: "TopMate C11 - Almohadilla de refrigeración para laptop RGB para juegos, soporte de ventilador para laptop de altura ajustable con 6 ventiladores silenciosos y soporte para teléfono, alfombrilla de enfriamiento para computadora, para portátiles de 15.6 a 17.3 pulgadas, luz LED azul",
      amazonURL: "https://www.amazon.com/-/es/TopMate-C11-refrigeraci%C3%B3n-ventiladores-enfriamiento/dp/B08CZBH7FV/ref=rvi_sccl_7/144-9221584-5410438?pd_rd_w=LJRHA&content-id=amzn1.sym.f5690a4d-f2bb-45d9-9d1b-736fee412437&pf_rd_p=f5690a4d-f2bb-45d9-9d1b-736fee412437&pf_rd_r=JMH2XXA858XZSKER2PP9&pd_rd_wg=RT0hb&pd_rd_r=cbd43f57-2ab0-4298-975b-ab68758bf776&pd_rd_i=B08CZBH7FV&psc=1",
      id: "TOPM010"
    }
  ]
}
