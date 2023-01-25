import React, { useState }from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { ArrowUpCircleIcon, ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

import pic1 from '../assets/1.jpg';
import pic2 from '../assets/2.jpg';
import pic3 from '../assets/3.jpg';
import pic4 from '../assets/4.jpg';
import pic5 from '../assets/5.jpg';
import pic6 from '../assets/6.jpg';
import pic7 from '../assets/7.jpg';
import pic8 from '../assets/8.jpg';
import pic9 from '../assets/9.jpg';
import pic10 from '../assets/10.jpg';
import pic11 from '../assets/11.png';
import pic12 from '../assets/12.jpg';
import pic13 from '../assets/13.jpg';
import pic14 from '../assets/14.jpg';
import pic15 from '../assets/15.jpg';
import pic16 from '../assets/16.jpg';
import pic17 from '../assets/17.jpg';
import pic18 from '../assets/18.jpg';
import pic19 from '../assets/19.jpg';
import pic20 from '../assets/20.jpg';
import pic21 from '../assets/21.jpg';
import pic22 from '../assets/22.jpg';
import pic23 from '../assets/23.jpg';
import pic24 from '../assets/24.jpg';
import pic25 from '../assets/25.jpg';
import pic26 from '../assets/26.jpg';
import pic27 from '../assets/27.jpg';

// 1
import pvk1 from '../assets/peter von kant/PVK1.jpg';
import pvk2 from '../assets/peter von kant/PVK2.jpg';
import pvk3 from '../assets/peter von kant/PVK3.jpg';
import pvk4 from '../assets/peter von kant/PVK4.jpg';
import pvk5 from '../assets/peter von kant/PVK5.jpg';
import pvk6 from '../assets/peter von kant/PVK6.jpg';
import pvk7 from '../assets/peter von kant/PVK7.jpg';
import pvk8 from '../assets/peter von kant/PVK8.jpg';
import pvk9 from '../assets/peter von kant/PVK9.jpg';
import pvk10 from '../assets/peter von kant/PVK10.jpg';
import pvk11 from '../assets/peter von kant/PVK11.jpg';
import pvk12 from '../assets/peter von kant/PVK13.jpg';
import pvk13 from '../assets/peter von kant/PVK15.jpg';
import pvk14 from '../assets/peter von kant/PVK16.jpg';
// 2
import titane1 from '../assets/titane/TIT1.jpg';
import titane2 from '../assets/titane/TIT2.jpg';
import titane3 from '../assets/titane/TIT3.jpg';
import titane4 from '../assets/titane/TIT4.jpg';
import titane5 from '../assets/titane/TIT5.jpg';
import titane6 from '../assets/titane/TIT6.jpg';
import titane7 from '../assets/titane/TIT7.jpg';
import titane8 from '../assets/titane/TIT8.jpg';
// 3
import iv1 from '../assets/Irma Vep/IV1.jpg';
import iv2 from '../assets/Irma Vep/IV2.jpg';
import iv3 from '../assets/Irma Vep/IV3.jpg';
import iv4 from '../assets/Irma Vep/IV4.jpg';
import iv5 from '../assets/Irma Vep/IV5.jpg';
import iv6 from '../assets/Irma Vep/IV6.jpg';
import iv7 from '../assets/Irma Vep/IV7.jpg';
import iv8 from '../assets/Irma Vep/IV8.jpg';
import iv9 from '../assets/Irma Vep/IV9.jpg';
import iv10 from '../assets/Irma Vep/IV10.jpg';
import iv11 from '../assets/Irma Vep/IV11.jpg';
import iv12 from '../assets/Irma Vep/IV12.jpg';
import iv13 from '../assets/Irma Vep/IV13.jpg';
import iv14 from '../assets/Irma Vep/IV14.jpg';
import iv15 from '../assets/Irma Vep/IV15.jpg';
import iv16 from '../assets/Irma Vep/IV16.jpg';
import iv17 from '../assets/Irma Vep/IV17.jpg';
import iv18 from '../assets/Irma Vep/IV18.jpg';
import iv19 from '../assets/Irma Vep/IV19.jpg';
import iv20 from '../assets/Irma Vep/IV20.jpg';
// 4
import emily1 from '../assets/emily in paris/EIP1.jpg';
import emily2 from '../assets/emily in paris/EIP2.jpg';
import emily3 from '../assets/emily in paris/EIP3.jpg';
import emily4 from '../assets/emily in paris/EIP4.jpg';
import emily5 from '../assets/emily in paris/EIP5.jpg';
import emily6 from '../assets/emily in paris/EIP6.jpg';
import emily7 from '../assets/emily in paris/EIP7.jpg';
import emily8 from '../assets/emily in paris/EIP8.jpeg';
import emily9 from '../assets/emily in paris/EIP9.jpg';
import emily10 from '../assets/emily in paris/EIP10.jpg';
import emily11 from '../assets/emily in paris/EIP11.jpg';
import emily12 from '../assets/emily in paris/EIP12.jpg';
import emily13 from '../assets/emily in paris/EIP13.jpg';
import emily14 from '../assets/emily in paris/EIP14.jpg';
import emily15 from '../assets/emily in paris/EIP15.jpg';
import emily16 from '../assets/emily in paris/EIP16.jpg';

// 5
import toutsest1 from '../assets/Tout sest bien passé/TSBP1.jpg';
import toutsest2 from '../assets/Tout sest bien passé/TSBP2.jpg';
import toutsest3 from '../assets/Tout sest bien passé/TSBP3.jpg';
import toutsest4 from '../assets/Tout sest bien passé/TSBP4.jpg';
import toutsest5 from '../assets/Tout sest bien passé/TSBP5.jpg';
import toutsest6 from '../assets/Tout sest bien passé/TSBP6.jpg';
import toutsest7 from '../assets/Tout sest bien passé/TSBP7.jpg';
import toutsest8 from '../assets/Tout sest bien passé/TSBP8.jpg';
import toutsest9 from '../assets/Tout sest bien passé/TSBP9.jpg';
import toutsest10 from '../assets/Tout sest bien passé/TSBP10.jpg';
import toutsest11 from '../assets/Tout sest bien passé/TSBP11.jpg';
import toutsest12 from '../assets/Tout sest bien passé/TSBP12.jpg';

// 6

// 7
import ps1 from '../assets/Personal Shopper/personal-shopper002.jpg';
import ps2 from '../assets/Personal Shopper/personal-shopper003.jpg';
import ps3 from '../assets/Personal Shopper/personal-shopper004.jpg';
import ps4 from '../assets/Personal Shopper/personal-shopper005.jpg';
import ps5 from '../assets/Personal Shopper/personal-shopper009.jpg';
import ps6 from '../assets/Personal Shopper/personal-shopper012.jpg';
import ps7 from '../assets/Personal Shopper/personal-shopper015.jpg';
import ps8 from '../assets/Personal Shopper/personal-shopper019.jpg';
import ps9 from '../assets/Personal Shopper/personal-shopper021.jpg';
import ps10 from '../assets/Personal Shopper/personal-shopper023.jpg';
import ps11 from '../assets/Personal Shopper/personal-shopper024.jpg';
import ps12 from '../assets/Personal Shopper/personal-shopper025.jpg';
import ps13 from '../assets/Personal Shopper/personal-shopper026.jpg';
import ps15 from '../assets/Personal Shopper/personal-shopper028.jpg';
import ps16 from '../assets/Personal Shopper/personal-shopper031.jpg';
import ps17 from '../assets/Personal Shopper/personal-shopper035.jpg';
import ps18 from '../assets/Personal Shopper/personal-shopper037.jpg';
import ps19 from '../assets/Personal Shopper/personal-shopper038.jpg';
import ps20 from '../assets/Personal Shopper/personal-shopper039_1.jpg';
import ps21 from '../assets/Personal Shopper/personal-shopper040_1.jpg';
import ps22 from '../assets/Personal Shopper/personal-shopper041_1.jpg';
import ps23 from '../assets/Personal Shopper/personal-shopper042_1.jpg';
import ps24 from '../assets/Personal Shopper/personal-shopper047_1.jpg';
import ps25 from '../assets/Personal Shopper/personal-shopper049_1.jpg';
import ps26 from '../assets/Personal Shopper/personal-shopper051_1.jpg';
import ps28 from '../assets/Personal Shopper/personal-shopper057_1.jpg';
import ps29 from '../assets/Personal Shopper/personal-shopper058_1.jpg';
// 8
import sm1 from '../assets/Sils-Maria/rz100Sils-Maria-Olivier-Assayas.jpg';
import sm2 from '../assets/Sils-Maria/rz101Sils-Maria-Olivier-Assayas.jpg';
import sm3 from '../assets/Sils-Maria/rz102Sils-Maria-Olivier-Assayas.jpg';
import sm4 from '../assets/Sils-Maria/rz103Sils-Maria-Olivier-Assayas.jpg';
import sm5 from '../assets/Sils-Maria/rz104Sils-Maria-Olivier-Assayas.jpg';
import sm6 from '../assets/Sils-Maria/rz105Sils-Maria-Olivier-Assayas.jpg';
import sm7 from '../assets/Sils-Maria/rz106Sils-Maria-Olivier-Assayas.jpg';
import sm8 from '../assets/Sils-Maria/rz108Sils-Maria-Olivier-Assayas.jpg';
import sm9 from '../assets/Sils-Maria/rz110Sils-Maria-Olivier-Assayas.jpg';
import sm10 from '../assets/Sils-Maria/rz111Sils-Maria-Olivier-Assayas.jpg';
import sm11 from '../assets/Sils-Maria/rz112Sils-Maria-Olivier-Assayas.jpg';
import sm12 from '../assets/Sils-Maria/rz113Sils-Maria-Olivier-Assayas.jpg';
import sm13 from '../assets/Sils-Maria/rz118Sils-Maria-Olivier-Assayas.jpg';
import sm14 from '../assets/Sils-Maria/rz120Sils-Maria-Olivier-Assayas.jpg';
import sm15 from '../assets/Sils-Maria/rz122Sils-Maria-Olivier-Assayas.jpg';
import sm16 from '../assets/Sils-Maria/rz125Sils-Maria-Olivier-Assayas.jpg';
import sm17 from '../assets/Sils-Maria/rz130Sils-Maria-Olivier-Assayas.jpg';
import sm18 from '../assets/Sils-Maria/rz133Sils-Maria-Olivier-Assayas.jpg';
// 9
import horsnormes1 from '../assets/Hors Normes/HN1.jpg';
import horsnormes2 from '../assets/Hors Normes/HN2.jpg';
import horsnormes3 from '../assets/Hors Normes/HN3.jpg';
import horsnormes4 from '../assets/Hors Normes/HN4.jpg';
import horsnormes5 from '../assets/Hors Normes/HN5.jpg';
import horsnormes6 from '../assets/Hors Normes/HN6.jpg';
import horsnormes7 from '../assets/Hors Normes/HN7.jpg';
import horsnormes8 from '../assets/Hors Normes/HN8.jpg';
import horsnormes9 from '../assets/Hors Normes/HN9.jpg';
import horsnormes10 from '../assets/Hors Normes/HN10.jpg';
import horsnormes11 from '../assets/Hors Normes/HN11.jpg';
import horsnormes12 from '../assets/Hors Normes/HN13.jpg';
import horsnormes13 from '../assets/Hors Normes/HN14.jpg';
import horsnormes14 from '../assets/Hors Normes/HN15.jpg';
import horsnormes15 from '../assets/Hors Normes/HN16.jpg';
import horsnormes16 from '../assets/Hors Normes/HN17.jpg';
import horsnormes17 from '../assets/Hors Normes/HN18.jpg';
import horsnormes18 from '../assets/Hors Normes/HN19.jpg';
import horsnormes19 from '../assets/Hors Normes/HN20.jpg';
import horsnormes20 from '../assets/Hors Normes/HN21.jpg';
import horsnormes21 from '../assets/Hors Normes/HN22.jpg';
import horsnormes22 from '../assets/Hors Normes/HN23.jpg';
import horsnormes23 from '../assets/Hors Normes/HN24.jpg';
import horsnormes24 from '../assets/Hors Normes/HN25.jpg';
import horsnormes25 from '../assets/Hors Normes/HN26.jpg';
import horsnormes26 from '../assets/Hors Normes/HN27.jpg';
import horsnormes27 from '../assets/Hors Normes/HN28.jpg';
import horsnormes28 from '../assets/Hors Normes/HN29.jpg';
import horsnormes29 from '../assets/Hors Normes/HN30.jpg';
import horsnormes30 from '../assets/Hors Normes/HN31.jpg';
import horsnormes31 from '../assets/Hors Normes/HN32.jpg';
import horsnormes32 from '../assets/Hors Normes/HN33.jpg';
// 10
import proxi1 from '../assets/Proxima/pro1.jpg';
import proxi2 from '../assets/Proxima/pro2.jpg';
import proxi3 from '../assets/Proxima/pro3.jpg';
import proxi4 from '../assets/Proxima/pro4.jpg';
import proxi5 from '../assets/Proxima/pro5.jpg';
import proxi6 from '../assets/Proxima/pro6.jpg';
import proxi7 from '../assets/Proxima/pro7.jpg';
import proxi8 from '../assets/Proxima/pro8.jpg';
import proxi9 from '../assets/Proxima/pro9.jpg';
import proxi10 from '../assets/Proxima/pro10.jpg';
import proxi11 from '../assets/Proxima/pro11.jpg';
import proxi12 from '../assets/Proxima/pro12.jpg';
import proxi13 from '../assets/Proxima/pro13.jpg';
import proxi14 from '../assets/Proxima/pro14.jpg';
import proxi15 from '../assets/Proxima/pro15.jpg';
import proxi16 from '../assets/Proxima/pro16.jpg';
import proxi17 from '../assets/Proxima/pro17.jpg';
import proxi18 from '../assets/Proxima/pro18.jpg';
import proxi19 from '../assets/Proxima/pro19.jpg';
import proxi20 from '../assets/Proxima/pro20.jpg';
import proxi21 from '../assets/Proxima/pro21.jpg';
import proxi22 from '../assets/Proxima/pro22.jpg';
import proxi23 from '../assets/Proxima/pro23.jpg';
import proxi24 from '../assets/Proxima/pro24.jpg';
import proxi25 from '../assets/Proxima/pro25.jpg';
import proxi26 from '../assets/Proxima/pro26.jpg';
import proxi27 from '../assets/Proxima/pro27 copie_1.jpg';
import proxi28 from '../assets/Proxima/pro28 copie_1.jpg';
import proxi29 from '../assets/Proxima/pro29 copie_1.jpg';
import proxi30 from '../assets/Proxima/pro30 copie_1.jpg';
import proxi31 from '../assets/Proxima/pro31 copie_1.jpg';
import proxi32 from '../assets/Proxima/pro32 copie_1.jpg';

// 11
import unefemme1 from '../assets/Journal/jdfdc1.jpg';
import unefemme2 from '../assets/Journal/jdfdc2.jpg';
import unefemme3 from '../assets/Journal/jdfdc3.jpg';
import unefemme4 from '../assets/Journal/jdfdc4.jpg';
import unefemme5 from '../assets/Journal/jdfdc5.jpg';
import unefemme6 from '../assets/Journal/jdfdc6.jpg';
import unefemme7 from '../assets/Journal/jdfdc7.jpg';
import unefemme8 from '../assets/Journal/jdfdc8.jpg';
import unefemme9 from '../assets/Journal/jdfdc9.jpg';
import unefemme10 from '../assets/Journal/jdfdc10.jpg';
import unefemme11 from '../assets/Journal/jdfdc11.jpg';
import unefemme12 from '../assets/Journal/jdfdc12.jpg';
import unefemme13 from '../assets/Journal/jdfdc13.jpg';
import unefemme14 from '../assets/Journal/jdfdc14.jpg';
import unefemme15 from '../assets/Journal/jdfdc15.jpg';
import unefemme16 from '../assets/Journal/jdfdc16.jpg';
import unefemme17 from '../assets/Journal/jdfdc17.jpg';
import unefemme18 from '../assets/Journal/jdfdc18.jpg';
import unefemme19 from '../assets/Journal/jdfdc19.jpg';
import unefemme20 from '../assets/Journal/jdfdc20.jpg';
import unefemme21 from '../assets/Journal/jdfdc21.jpg';
import unefemme22 from '../assets/Journal/jdfdc22.jpg';
import unefemme23 from '../assets/Journal/jdfdc23.jpg';
import unefemme24 from '../assets/Journal/jdfdc24.jpg';

// 12
import histoirevraie1 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-002.jpg';
import histoirevraie2 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-003.jpg';
import histoirevraie3 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-004.jpg';
import histoirevraie4 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-005.jpg';
import histoirevraie5 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-007.jpg';
import histoirevraie6 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-008.jpg';
import histoirevraie7 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-009.jpg';
import histoirevraie8 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-010.jpg';
import histoirevraie9 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-011.jpg';
import histoirevraie10 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-012.jpg';
import histoirevraie11 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-016.jpg';
import histoirevraie12 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-017.jpg';
import histoirevraie13 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-018.jpg';
import histoirevraie14 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-019.jpg';
import histoirevraie15 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-021.jpg';
import histoirevraie16 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-022.jpg';
import histoirevraie17 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-023.jpg';
import histoirevraie18 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-025.jpg';
import histoirevraie19 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-027.jpg';
import histoirevraie20 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-028.jpg';
import histoirevraie21 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-029.jpg';
import histoirevraie22 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-030.jpg';
import histoirevraie23 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-033.jpg';
import histoirevraie24 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-034.jpg';
import histoirevraie25 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-035.jpg';
import histoirevraie26 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-036.jpg';
import histoirevraie27 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-040.jpg';
import histoirevraie28 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-043.jpg';
import histoirevraie29 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-045.jpg';
import histoirevraie30 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-046.jpg';
import histoirevraie31 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-048.jpg';
import histoirevraie32 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-049.jpg';
import histoirevraie33 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-051.jpg';
import histoirevraie34 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-052.jpg';
import histoirevraie35 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-054.jpg';
import histoirevraie36 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-055.jpg';
import histoirevraie37 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-056.jpg';
import histoirevraie38 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-057.jpg';
import histoirevraie39 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-058.jpg';
import histoirevraie40 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-060.jpg';
import histoirevraie41 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-064.jpg';
import histoirevraie42 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-066.jpg';
import histoirevraie43 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-069.jpg';
import histoirevraie44 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-070.jpg';
import histoirevraie45 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-071.jpg';
import histoirevraie46 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-072.jpg';
import histoirevraie47 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-075.jpg';
import histoirevraie48 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-076.jpg';
import histoirevraie49 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-080.jpg';
import histoirevraie50 from '../assets/Daprès une histoire vraie/GALERIE-DUHV-081.jpg';
// 13
import zomch1 from '../assets/Zombi Child/ZC1.jpg';
import zomch2 from '../assets/Zombi Child/ZC2.jpg';
import zomch3 from '../assets/Zombi Child/ZC3.jpg';
import zomch4 from '../assets/Zombi Child/ZC4.jpg';
import zomch5 from '../assets/Zombi Child/ZC5.jpg';
import zomch6 from '../assets/Zombi Child/ZC6.jpg';
import zomch7 from '../assets/Zombi Child/ZC7.jpg';
import zomch8 from '../assets/Zombi Child/ZC8.jpg';
import zomch9 from '../assets/Zombi Child/ZC9.jpg';
import zomch10 from '../assets/Zombi Child/ZC10.jpg';
import zomch11 from '../assets/Zombi Child/ZC11.jpg';
import zomch12 from '../assets/Zombi Child/ZC12.jpg';
// 14
import saintlau1 from '../assets/Saint Laurent/SL1.jpg';
import saintlau2 from '../assets/Saint Laurent/SL2.jpg';
import saintlau3 from '../assets/Saint Laurent/SL3.jpg';
import saintlau4 from '../assets/Saint Laurent/SL4.jpg';
import saintlau5 from '../assets/Saint Laurent/SL5.jpg';
import saintlau6 from '../assets/Saint Laurent/SL6.jpg';
import saintlau7 from '../assets/Saint Laurent/SL7.jpg';
import saintlau8 from '../assets/Saint Laurent/SL8.jpg';
import saintlau9 from '../assets/Saint Laurent/SL9.jpg';
import saintlau10 from '../assets/Saint Laurent/SL10.jpg';
import saintlau11 from '../assets/Saint Laurent/SL11.jpg';
import saintlau12 from '../assets/Saint Laurent/SL12.jpg';
import saintlau13 from '../assets/Saint Laurent/SL13.jpg';
import saintlau14 from '../assets/Saint Laurent/SL14.jpg';
import saintlau15 from '../assets/Saint Laurent/SL16.jpg';
import saintlau16 from '../assets/Saint Laurent/SL17.jpg';
import saintlau17 from '../assets/Saint Laurent/SL18.jpg';
import saintlau18 from '../assets/Saint Laurent/SL19.jpg';
import saintlau19 from '../assets/Saint Laurent/SL20.jpg';
import saintlau20 from '../assets/Saint Laurent/SL21.jpg';
import saintlau21 from '../assets/Saint Laurent/SL23.jpg';
import saintlau22 from '../assets/Saint Laurent/SL25.jpg';
import saintlau23 from '../assets/Saint Laurent/SL26.jpg';
import saintlau24 from '../assets/Saint Laurent/SL27.jpg';
import saintlau25 from '../assets/Saint Laurent/SL28.jpg';
import saintlau26 from '../assets/Saint Laurent/SL29.jpg';
import saintlau27 from '../assets/Saint Laurent/SL30.jpg';
import saintlau28 from '../assets/Saint Laurent/SL31.jpg';
import saintlau29 from '../assets/Saint Laurent/SL32.jpg';
import saintlau30 from '../assets/Saint Laurent/SL34.jpg';
// 15
import lpasse1 from '../assets/Le Passé/1LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse2 from '../assets/Le Passé/3LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse3 from '../assets/Le Passé/4LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse4 from '../assets/Le Passé/5LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse5 from '../assets/Le Passé/6LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse6 from '../assets/Le Passé/7LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse7 from '../assets/Le Passé/8LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse8 from '../assets/Le Passé/12LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse9 from '../assets/Le Passé/13LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse10 from '../assets/Le Passé/15LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse11 from '../assets/Le Passé/16LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse12 from '../assets/Le Passé/18LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse13 from '../assets/Le Passé/19LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse14 from '../assets/Le Passé/21LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse15 from '../assets/Le Passé/24LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse16 from '../assets/Le Passé/26LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse17 from '../assets/Le Passé/27LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse18 from '../assets/Le Passé/28LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse19 from '../assets/Le Passé/29LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse20 from '../assets/Le Passé/30LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse21 from '../assets/Le Passé/31LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse22 from '../assets/Le Passé/35LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse23 from '../assets/Le Passé/36LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse24 from '../assets/Le Passé/37LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse25 from '../assets/Le Passé/39LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse26 from '../assets/Le Passé/40LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse27 from '../assets/Le Passé/41LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse28 from '../assets/Le Passé/42LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse29 from '../assets/Le Passé/43LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse30 from '../assets/Le Passé/44LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse31 from '../assets/Le Passé/45LEPASSE_ASGHAR_FARHADI1.jpg';
import lpasse32 from '../assets/Le Passé/46LEPASSE_ASGHAR_FARHADI1.jpg';
// 16
import viefic1 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-001.jpg';
import viefic2 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-002.jpg';
import viefic3 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-003.jpg';
import viefic4 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-004.jpg';
import viefic5 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-005.jpg';
import viefic6 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-007.jpg';
import viefic7 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-008.jpg';
import viefic8 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-009.jpg';
import viefic9 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-010.jpg';
import viefic10 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-012.jpg';
import viefic11 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-013.jpg';
import viefic12 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-015.jpg';
import viefic13 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-016.jpg';
import viefic14 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-018.jpg';
import viefic15 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-019.jpg';
import viefic16 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-022.jpg';
import viefic17 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-025_1.jpg';
import viefic18 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-026_1.jpg';
import viefic19 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-027_1.jpg';
import viefic20 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-028_1.jpg';
import viefic21 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-029_1.jpg';
import viefic22 from '../assets/Doubles Vies Non-Fiction/GALERIE-DOUBLES-VIES-030_1.jpg';
// 17
import amjeu1 from '../assets/Un amour de jeunesse/3000Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu2 from '../assets/Un amour de jeunesse/3001Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu3 from '../assets/Un amour de jeunesse/3002Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu4 from '../assets/Un amour de jeunesse/3003Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu5 from '../assets/Un amour de jeunesse/3007Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu6 from '../assets/Un amour de jeunesse/3008Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu7 from '../assets/Un amour de jeunesse/3009Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu8 from '../assets/Un amour de jeunesse/3010Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu9 from '../assets/Un amour de jeunesse/3011Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu10 from '../assets/Un amour de jeunesse/3012Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu11 from '../assets/Un amour de jeunesse/3015Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';
import amjeu12 from '../assets/Un amour de jeunesse/3016Un-amour-de-jeunesse-de-Mia-Hansen-Love.jpg';

// 18
import lesadieux1 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_1.jpg';
import lesadieux2 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_2.jpg';
import lesadieux3 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_3.jpg';
import lesadieux4 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_4.jpg';
import lesadieux5 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_5.jpg';
import lesadieux6 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_6.jpg';
import lesadieux7 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_7.jpg';
import lesadieux8 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_8.jpg';
import lesadieux9 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_9.jpg';
import lesadieux10 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_10.jpg';
import lesadieux11 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_11.jpg';
import lesadieux12 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_12.jpg';
import lesadieux13 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_13.jpg';
import lesadieux14 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_17.jpg';
import lesadieux15 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_21.jpg';
import lesadieux16 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_23.jpg';
import lesadieux17 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_25.jpg';
import lesadieux18 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_26.jpg';
import lesadieux19 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_28.jpg';
import lesadieux21 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_31.jpg';
import lesadieux23 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_33.jpg';
import lesadieux24 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_34.jpg';
import lesadieux25 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_35.jpg';
import lesadieux26 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_37.jpg';
import lesadieux27 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_38.jpg';
import lesadieux28 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_39.jpg';
import lesadieux29 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_41.jpg';
import lesadieux30 from '../assets/Les Adieux à la reine/LES_ADIEUX_A_LA_REINE_42.jpg';
// 19
// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27


const films = [
    {
      id: 1,
      title: 'peter-von-kant',
      name: `Peter von Kant`,
      poster: pic1,
      photos: [
        pvk1,
        pvk2,
        pvk3,
        pvk4,
        pvk5,
        pvk6,
        pvk7,
        pvk8,
        pvk9,
        pvk10,
        pvk11,
        pvk12,
        pvk13,
        pvk14,
        ]
    },
    {
      id: 2,
      title: 'titane',
      name: `Titane`,
      poster: pic2,
      photos: [
        titane1,
        titane2,
        titane3,
        titane4,
        titane5,
        titane6,
        titane7,
        titane8,
        ]
    },
    {
        id: 3,
        title: 'irma-vep',
        name: `Irma Vep`,
        poster: pic3,
        photos: [
           iv1,
           iv2,
           iv3,
           iv4,
           iv5,
           iv6,
           iv7,
           iv8,
           iv9,
           iv10,
            iv11,
            iv12,
            iv13,
            iv14,
            iv15,
            iv16,
            iv17,
            iv18,
            iv19,
            iv20,
            
        ]
    },
    {
        id: 4,
        title: `emily-in-Paris`,
        name: `Emily in Paris`,
        poster: pic4,
        photos: [
            emily1,
            emily2,
            emily3,
            emily4,
            emily5,
            emily6,
            emily7,
            emily8,
            emily9,
            emily10,
            emily11,
            emily12,
            emily13,
            emily14,
            emily15,
            emily16,

        ]
    },
    {
        id: 5,
        title: `Tous-s'est-bien-passé`,
        name: `Tous s'est bien passé`,
        poster: pic5,
        photos: [
            toutsest1,
            toutsest2,
            toutsest3,
            toutsest4,
            toutsest5,
            toutsest6,
            toutsest7,
            toutsest8,
            toutsest9,
            toutsest10,
            toutsest11,
            toutsest12,
        ]
    },
    {
        id: 6,
        title: 'Un-beau-matin',
        name: `Un beau matin`,
        poster: pic6,
        photos: [
        ]
    },
    {
        id: 7,
        title: 'Personal-Shopper',
        name: `Personal Shopper`,
        poster: pic7,
        photos: [
            ps1,
            ps2,
            ps3,
            ps4,
            ps5,
            ps6,
            ps7,
            ps8,
            ps9,
            ps10,
            ps11,
            ps12,
            ps13,
            ps15,
            ps16,
            ps17,
            ps18,
            ps19,
            ps20,
            ps21,
            ps22,
            ps23,
            ps24,
            ps25,
            ps26,
            ps28,
            ps29,
    
        ]
    },
    {
        id: 8,
        title: `Sils-Maria`,
        name: `Sils Maria`,
        poster: pic8,
        photos: [
            sm1,
            sm2,
            sm3,
            sm4,
            sm5,
            sm6,
            sm7,
            sm8,
            sm9,
            sm10,
            sm11,
            sm12,
            sm13,
            sm14,
            sm15,
            sm16,
            sm17,
            sm18,
        ]
    },
    {
        id: 9,
        title: 'Hors-Normes',
        name: `Hors Normes`,
        poster: pic9,
        photos: [
            horsnormes1,
            horsnormes2,
            horsnormes3,
            horsnormes4,
            horsnormes5,
            horsnormes6,
            horsnormes7,
            horsnormes8,
            horsnormes9,
            horsnormes10,
            horsnormes11,
            horsnormes12,
            horsnormes13,
            horsnormes14,
            horsnormes15,
            horsnormes16,
            horsnormes17,
            horsnormes18,
            horsnormes19,
            horsnormes20,
            horsnormes21,
            horsnormes22,
            horsnormes23,
            horsnormes24,
            horsnormes25,
            horsnormes26,
            horsnormes27,
            horsnormes28,
            horsnormes29,
            horsnormes30,
            horsnormes31,
            horsnormes32,
        ]
    },
    {
        id: 10,
        title: 'Proxima',
        name: `Proxima`,
        poster: pic10,
        photos: [
            proxi1,
            proxi2,
            proxi3,
            proxi4,
            proxi5,
            proxi6,
            proxi7,
            proxi8,
            proxi9,
            proxi10,
            proxi11,
            proxi12,
            proxi13,
            proxi14,
            proxi15,
            proxi16,
            proxi17,
            proxi18,
            proxi19,
            proxi20,
            proxi21,
            proxi22,
            proxi23,
            proxi24,
            proxi25,
            proxi26,
            proxi27,
            proxi28,
            proxi29,
            proxi30,
            proxi31,
            proxi32,
        ]
   },
    {
        id: 11,
        title: `Journal-d'une-femme-de-chambre`,
        name: `Journal d'une femme de chambre`,
        poster: pic11,
        photos: [
            unefemme1,
            unefemme2,
            unefemme3,
            unefemme4,
            unefemme5,
            unefemme6,
            unefemme7,
            unefemme8,
            unefemme9,
            unefemme10,
            unefemme11,
            unefemme12,
            unefemme13,
            unefemme14,
            unefemme15,
            unefemme16,
            unefemme17,
            unefemme18,
            unefemme19,
            unefemme20,
            unefemme21,
            unefemme22,
            unefemme23,
            unefemme24,
        ]
    },
    {
        id: 12,
        title: `D'après-une-histoire-vraie`,
        name: `D'après une histoire vraie`,
        poster: pic12,
        photos: [
            histoirevraie1,
            histoirevraie2,
            histoirevraie3,
            histoirevraie4,
            histoirevraie5,
            histoirevraie6,
            histoirevraie7,
            histoirevraie8,
            histoirevraie9,
            histoirevraie10,
            histoirevraie11,
            histoirevraie12,
            histoirevraie13,
            histoirevraie14,
            histoirevraie15,
            histoirevraie16,
            histoirevraie17,
            histoirevraie18,
            histoirevraie19,
            histoirevraie20,
            histoirevraie21,
            histoirevraie22,
            histoirevraie23,
            histoirevraie24,
            histoirevraie25,
            histoirevraie26,
            histoirevraie27,
            histoirevraie28,
            histoirevraie29,
            histoirevraie30,
            histoirevraie31,
            histoirevraie32,
            histoirevraie33,
            histoirevraie34,
            histoirevraie35,
            histoirevraie36,
            histoirevraie37,
            histoirevraie38,
            histoirevraie39,
            histoirevraie40,
            histoirevraie41,
            histoirevraie42,
            histoirevraie43,
            histoirevraie44,
            histoirevraie45,
            histoirevraie46,
            histoirevraie47,
            histoirevraie48,
            histoirevraie49,
            histoirevraie50,
        ]
    },
    {
        id: 13,
        title: `Zombi-Child`,
        name: `Zombi Child`,
        poster: pic13,
        photos: [
            zomch1,
            zomch2,
            zomch3,
            zomch4,
            zomch5,
            zomch6,
            zomch7,
            zomch8,
            zomch9,
            zomch10,
            zomch11,
            zomch12,
        ]
    },
    {
        id: 14,
        title: `Saint-Laurent`,
        name: `Saint Laurent`,
        poster: pic14,
        photos: [
            saintlau1,
            saintlau2,
            saintlau3,
            saintlau4,
            saintlau5,
            saintlau6,
            saintlau7,
            saintlau8,
            saintlau9,
            saintlau10,
            saintlau11,
            saintlau12,
            saintlau13,
            saintlau14,
            saintlau15,
            saintlau16,
            saintlau17,
            saintlau18,
            saintlau19,
            saintlau20,
            saintlau21,
            saintlau22,
            saintlau23,
            saintlau24,
            saintlau25,
            saintlau26,
            saintlau27,
            saintlau28,
            saintlau29,
            saintlau30,
        ]
    },
    {
        id: 15,
        title: `Le-Passé`,
        name: `Le Passé`,
        poster: pic15,
        photos: [
            lpasse1,
            lpasse2,
            lpasse3,
            lpasse4,
            lpasse5,
            lpasse6,
            lpasse7,
            lpasse8,
            lpasse9,
            lpasse10,
            lpasse11,
            lpasse12,
            lpasse13,
            lpasse14,
            lpasse15,
            lpasse16,
            lpasse17,
            lpasse18,
            lpasse19,
            lpasse20,
            lpasse21,
            lpasse22,
            lpasse23,
            lpasse24,
            lpasse25,
            lpasse26,
            lpasse27,
            lpasse28,
            lpasse29,
            lpasse30,
            lpasse31,
            lpasse32,
        ]
    },
    {
        id: 16,
        title: `Doubles-Vies-Non-Fiction`,
        name: `Doubles Vies Non-Fiction`,
        poster: pic16,
        photos: [
            viefic1,
            viefic2,
            viefic3,
            viefic4,
            viefic5,
            viefic6,
            viefic7,
            viefic8,
            viefic9,
            viefic10,
            viefic11,
            viefic12,
            viefic13,
            viefic14,
            viefic15,
            viefic16,
            viefic17,
            viefic18,
            viefic19,
            viefic20,
            viefic21,
            viefic22,
        ]
    },
    {
        id: 17,
        title: `Un-amour-de-jeunesse`,
        name: `Un amour de jeunesse`,
        poster: pic17,
        photos: [
            amjeu1,
            amjeu2,
            amjeu3,
            amjeu4,
            amjeu5,
            amjeu6,
            amjeu7,
            amjeu8,
            amjeu9,
            amjeu10,
            amjeu11,
            amjeu12,
        ]
    },
    {
        id: 18,
        title: 'Les-Adieux-à-la-reine',
        name: `Les Adieux à la reine`,
        poster: pic18,
        photos: [
            lesadieux1
,            lesadieux2
,            lesadieux3
,            lesadieux4
,            lesadieux5
,            lesadieux6
,            lesadieux7
,            lesadieux8
,            lesadieux9
,            lesadieux10,
            lesadieux11,
            lesadieux12,
            lesadieux13,
            lesadieux14,
            lesadieux15,
            lesadieux16,
            lesadieux17,
            lesadieux18,
            lesadieux19,
            lesadieux21,
            lesadieux23,
            lesadieux24,
            lesadieux25,
            lesadieux26,
            lesadieux27,
            lesadieux28,
            lesadieux29,
            lesadieux30,
       
        ]
    },
    {
        id: 19,
        title: '',
        name: ``,
        poster: pic19,
        photos: [
            titane1,
            titane2,
            titane3,
            titane4,
            titane5,
            titane6,
            titane7,
            titane8,
        ]
    },
    {
        id: 20,
        title: '',
        name: ``,
        poster: pic20,
        photos: [
              titane1,
        ]
    },
    {
        id: 21,
        title: '',
        name: ``,
        poster: pic21,
        photos: [
              titane2,
        ]
    },
    {
        id: 22,
        title: '',
        name: ``,
        poster: pic22,
        photos: [
              titane3,
        ]
    },
    {
        id: 23,
        title: '',
        name: ``,
        poster: pic23,
        photos: [
              titane4,
        ]
    },
    {
        id: 24,
        title: '',
        name: ``,
        poster: pic24,
        photos: [
              titane5,
        ]
    },
    {
        id: 25,
        title: '',
        name: ``,
        poster: pic25,
        photos: [
              titane6,
        ]
    },
    {
        id: 26,
        title: '',
        name: ``,
        poster: pic26,
        photos: [
              titane7,
        ]
    },
    {
        id: 27,
        title: '',
        name: ``,
        poster: pic27,
        photos: [
              titane8,
        ]
    },
  ];

  
function Home() {
    
    const location = useLocation();
    const { title } = useParams();
    const film = films.find(f => f.title === title);
    // const [selectedPhoto, setSelectedPhoto] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleOpenModal = (photo) => {
        const currentIndex = film.photos.indexOf(photo);
        setModalIsOpen(true);
        setCurrentIndex(currentIndex);
      }

    const handleCloseModal = () => {
        setModalIsOpen(false);
    }
    // allow users to navigate between the full size images
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % film.photos.length);
    }

    const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + film.photos.length) % film.photos.length);
    }

    const handleGoToTop = () => {
        window.scrollTo(0, 0);
      }
    
  return (
    <section>
        <div>
            {film ? (
            <div className=''>
                <div className="grid md:grid-cols-2 gap-5">
                    {film.photos.map((photo, index) => (
                        <div className="p-4">
                            <img key={index} src={photo} alt={`${film.title} - ${index + 1}`} 
                                onClick={() => handleOpenModal(photo)} 
                                className='w-full object-cover shadow-md cursor-pointer md:h-[23rem] lg:h-[34rem]'/>
                        </div>
                    ))}

                </div>
                {modalIsOpen && (
                        <div className="flex">
                            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center">
                                <img src={film.photos[currentIndex]} alt={`${film.title}`} className="lg:h-[100%]"/>
                                <button onClick={handlePrev} className="absolute top-[50%] left-0 hover:scale-110"><ChevronLeftIcon className='h-12 md:h-16 text-white' /></button>
                                <button onClick={handleNext} className="absolute top-[50%] right-0 hover:scale-110"><ChevronRightIcon className='h-12 md:h-16 text-white'/></button>
                                <button onClick={handleCloseModal}
                                        className="absolute top-0 left-0 p-1 md:p-3 text-white hover:scale-110"
                                    >
                                    <XMarkIcon  className='h-12'/>
                                </button>
                                <span className="absolute top-0 right-0 p-4 md:p-6 text-white text-2xl">{currentIndex + 1}/{film.photos.length}</span>
                            </div>
                        </div>
                    )}
            </div>
            ) : (
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-8'>
                {films.map((film, index) => (
                    <div className="p-6">
                        <Link to={`/films/${film.title}`}>
                        <img src={film.poster} alt={film.title} className='rounded-2xl md:h-[30rem] lg:h-[40rem] w-full object-cover shadow-md hover:scale-105'/> 
                        </Link>
                    </div>
                ))}
            </div>
            )}
        </div>
        <button onClick={handleGoToTop} className="fixed right-1 bottom-0 text-green-600"><ArrowUpCircleIcon className='h-10' /> </button>
    </section>
  )
}

export default Home