"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { Form, Select, Button, Space } from "antd";

// =========================
// ASSETS
// =========================

// hovuz içi

//klassik cam
import a151 from "../../public/assets/hovuzlar/klassikcam/a151.png";
import a151gece from "../../public/assets/hovuzlar/klassikcam/a151gece.png";
import a155 from "../../public/assets/hovuzlar/klassikcam/a155.png";
import a155gece from "../../public/assets/hovuzlar/klassikcam/a155gece.png";
import a158 from "../../public/assets/hovuzlar/klassikcam/a158.png";
import a158gece from "../../public/assets/hovuzlar/klassikcam/a158gece.png";
import a159 from "../../public/assets/hovuzlar/klassikcam/a159.png";
import a159gece from "../../public/assets/hovuzlar/klassikcam/a159gece.png";
import a161 from "../../public/assets/hovuzlar/klassikcam/a161.png";
import a161gece from "../../public/assets/hovuzlar/klassikcam/a161gece.png";
import a161l from "../../public/assets/hovuzlar/klassikcam/a161l.png";
import a161lgece from "../../public/assets/hovuzlar/klassikcam/a161lgece.png";
import a218 from "../../public/assets/hovuzlar/klassikcam/a218.png";
import a218gece from "../../public/assets/hovuzlar/klassikcam/a218gece.png";
import a231 from "../../public/assets/hovuzlar/klassikcam/a231.png";
import a231gece from "../../public/assets/hovuzlar/klassikcam/a231gece.png";
import a236 from "../../public/assets/hovuzlar/klassikcam/a236.png";
import a236gece from "../../public/assets/hovuzlar/klassikcam/a236gece.png";
import a276 from "../../public/assets/hovuzlar/klassikcam/a276.png";
import a276gece from "../../public/assets/hovuzlar/klassikcam/a276gece.png";

//porselen kare
import bali from "../../public/assets/hovuzlar/kare/bali.png";
import baligece from "../../public/assets/hovuzlar/kare/baligece.png";
import floralblue from "../../public/assets/hovuzlar/kare/floralBlue.png";
import floralblueGece from "../../public/assets/hovuzlar/kare/floralBlueGece.png";
import floralgreen from "../../public/assets/hovuzlar/kare/floralGreen.png";
import floralgreenGece from "../../public/assets/hovuzlar/kare/floralGreenGece.png";
import judiGreyKare from "../../public/assets/hovuzlar/kare/judiGrey.png";
import judiGreyKareGece from "../../public/assets/hovuzlar/kare/judiGreyGece.png";

// kənar kafellər
import light from "../../public/assets/kenarkafeller/light.png";
import lightGece from "../../public/assets/kenarkafeller/lightgece.png";

import superstone from "../../public/assets/kenarkafeller/superstone.png";
import superstoneGece from "../../public/assets/kenarkafeller/superstonegece.png";

import judiGrey from "../../public/assets/kenarkafeller/judigrey.png";
import judiGreyGece from "../../public/assets/kenarkafeller/judigreygece.png";

import lucaGrey from "../../public/assets/kenarkafeller/lucaGrey.png";
import lucaGreyGece from "../../public/assets/kenarkafeller/lucaGreyGece.png";

// orta kafellər
import lightorta from "../../public/assets/ortakafeller/lightorta.png";
import lightortaGece from "../../public/assets/ortakafeller/lightortaGece.png";

import judiGreyorta from "../../public/assets/ortakafeller/judiGreyorta.png";
import judiGreyortaGece from "../../public/assets/ortakafeller/judiGreyortaGece.png";

import lucaGreyOrta from "../../public/assets/ortakafeller/lucaGreyOrta.png";
import lucaGreyOrtaGece from "../../public/assets/ortakafeller/lucaGreyOrtaGece.png";

// teraslar
import terasLight from "../../public/assets/teraslar/villa3.png";
import terasLightGece from "../../public/assets/teraslar/villa3gece.png";

import terasJudi from "../../public/assets/teraslar/villa2.png";
import terasJudiGece from "../../public/assets/teraslar/villa3gecee.png";

import terasLuca from "../../public/assets/teraslar/hovuz.png";
import terasLucaGece from "../../public/assets/teraslar/hovuzgece.png";

import mavivilla from "../../public/assets/teraslar/mavivilla.png";
import mavivillagece from "../../public/assets/teraslar/mavivillagece.png";
import villa4 from "../../public/assets/teraslar/villa33.png";



export default function Create() {
  // =========================
  // THEME
  // =========================
  const [isNight, setIsNight] = useState(false);

  // =========================
  // HOVUZ TYPES
  // =========================
  type KlassikCamModels =
    | "a151"
    | "a155"
    | "a158"
    | "a159"
    | "a161"
    | "a161l"
    | "a218"
    | "a231"
    | "a236"
    | "a276";
  type KareModels = "bali" | "floralblue" | "floralgreen" | "judiGrey";

  type HovuzModeli = KlassikCamModels | KareModels;

  // =========================
  // STATES
  // =========================
  const [hovuzModeli, setHovuzModeli] = useState<HovuzModeli>("bali");

  const { Option, OptGroup } = Select;

  // kafellər
  const [kenar, setKenar] = useState<keyof typeof kenarKafelleri>("superstone");
  const [orta, setOrta] = useState<keyof typeof ortaKafeller>("superstone");
  const [terasTipi, setTerasTipi] = useState<keyof typeof teras>("boz");

  const mode = isNight ? "gece" : "gunduz";

  const hovuzlar = {
      a151: {
        gunduz: a151,
        gece: a151gece,
      },
      a155: {
        gunduz: a155,
        gece: a155gece,
      },
      a158: {
        gunduz: a158,
        gece: a158gece,
      },
      a159: {
        gunduz: a159,
        gece: a159gece,
      },
      a161: {
        gunduz: a161,
        gece: a161gece,
      },
      a161l: {
        gunduz: a161l,
        gece: a161lgece,
      },
      a218: {
        gunduz: a218,
        gece: a218gece,
      },
      a231: {
        gunduz: a231,
        gece: a231gece,
      },
      a236: {
        gunduz: a236,
        gece: a236gece,
      },
      a276: {
        gunduz: a276,
        gece: a276gece,
      },
 
      bali: {
        gunduz: bali,
        gece: baligece,
      },
      floralblue: {
        gunduz: floralblue,
        gece: floralblueGece,
      },
      floralgreen: {
        gunduz: floralgreen,
        gece: floralgreenGece,
      },
      judiGrey: {
        gunduz: judiGreyKare,
        gece: judiGreyKareGece,
      },
  
  } as const;

  const kenarKafelleri = {

    light: {
      gunduz: light,
      gece: lightGece,
    },
    judi: {
      gunduz: judiGrey,
      gece: judiGreyGece,
    },
    luca: {
      gunduz: lucaGrey,
      gece: lucaGreyGece,
    },
        superstone: {
      gunduz: superstone,
      gece: superstoneGece,
    },
  } as const;

  const ortaKafeller = {
  
    light: {
      gunduz: lightorta,
      gece: lightortaGece,
    },
    judi: {
      gunduz: judiGreyorta,
      gece: judiGreyortaGece,
    },
    luca: {
      gunduz: lucaGreyOrta,
      gece: lucaGreyOrtaGece,
    },
      superstone: {
      gunduz: superstone,
      gece: superstoneGece,
    },
  } as const;
  const teras = {

    judi: {
      gunduz: terasJudi,
      gece: terasJudiGece,
    },
    boz: {
      gunduz: villa4,
      gece: terasJudiGece,
    },
    light: {
      gunduz: terasLight,
      gece: terasLightGece,
    },
    luca: {
      gunduz: terasLuca,
      gece: terasLucaGece,
    },
    mavivilla: {
      gunduz: mavivilla,
      gece: mavivillagece,
    },
  } as const;
  // =========================
  // HANDLERS
  // =========================
  let hovuzGunduz: StaticImageData;
  let hovuzGece: StaticImageData;

    hovuzGunduz = hovuzlar[hovuzModeli as KareModels].gunduz;
    hovuzGece = hovuzlar[hovuzModeli as KareModels].gece;
  

  const kenarGece = kenarKafelleri[kenar].gece
  const kenarGunduz = kenarKafelleri[kenar].gunduz;


  const ortaGece = ortaKafeller[orta].gece;
  const ortaGunduz = ortaKafeller[orta].gunduz;


  const terasGunduz = teras[terasTipi].gunduz;
  const terasGece = teras[terasTipi].gece;


  // =========================
  // RENDER
  // =========================

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* HOVUZ */}
         <Image
        width={100000} height={100000} quality={100}
        src={hovuzlar.bali.gunduz}
        alt="hovuz-gunduz"
        className={`absolute w-full h-full object-cover ${mode === "gece" ? "z-10" : "z-11"}`}
      />
      <Image
        width={100000} height={100000} quality={100}

        src={hovuzGece}
        alt="hovuz-gece"
        className={`absolute object-cover w-full h-full ${mode === "gece" ? "z-11" : "z-10"}`}
      />

      <Image
        width={100000} height={100000} quality={100}
        src={hovuzGunduz}
        alt="hovuz-gunduz"
        className={`absolute w-full h-full object-cover ${mode === "gece" ? "z-10" : "z-11"}`}
      />

      {/* KAFELLƏR */}
      <Image width={100000} height={100000} quality={100} src={kenarGece} alt="kenar" className={`absolute w-full h-full object-cover ${mode == 'gece' ? 'z-23' : 'z-22'}`} />
      <Image width={100000} height={100000} quality={100} src={kenarGunduz} alt="kenar" className={`absolute w-full h-full object-cover ${mode == 'gece' ? 'z-22' : 'z-23'}`} />

      <Image width={100000} height={100000} quality={100} src={ortaGece} alt="orta" className={`absolute w-full h-full object-cover ${mode == 'gece' ? 'z-23' : 'z-22'}`} />
      <Image width={100000} height={100000} quality={100} src={ortaGunduz} alt="orta" className={`absolute w-full h-full object-cover ${mode == 'gece' ? 'z-22' : 'z-23'}`} />


      <Image width={100000} height={100000} quality={100} src={terasGunduz} alt="terasgunduz" className={`absolute w-full h-full object-cover ${mode == 'gece' ? 'z-20' : 'z-21'}`} />
      <Image width={100000} height={100000} quality={100} src={terasGece} alt="terasgece" className={`absolute w-full h-full object-cover ${mode == 'gece' ? 'z-21' : 'z-20'}`} />


      {/* =========================
          UI – TEST PANEL
      ========================= */}
     <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-lg p-4 rounded-2xl border border-white/10 w-fit">
        <Space size="middle">
          <Button 
            type="primary" 
            shape="circle" 
            onClick={() => setIsNight(!isNight)}
          >
            {isNight ? "🌙" : "☀️"}
          </Button>

          {/* HOVUZ SEÇİMİ */}
          <Select
            showSearch
            style={{ width: 180 }}
            value={hovuzModeli}
            onChange={(val) => setHovuzModeli(val)}
            options={Object.keys(hovuzlar).map((key) => ({
              value: key,
              label: (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded overflow-hidden relative">
                    <Image src={hovuzlar[key as keyof typeof hovuzlar].gunduz} alt={key} fill className="object-cover" />
                  </div>
                  {key.toUpperCase()}
                </div>
              ),
            }))}
          />

           <Select
            style={{ width: 120 }}
            value={orta}
            onChange={setOrta}
            options={Object.keys(ortaKafeller).map(k => ({ value: k, label: `Kenar  : ${k}` }))}
          />
          <Select
            style={{ width: 120 }}
            value={kenar}
            onChange={setKenar}
            options={Object.keys(kenarKafelleri).map(k => ({ value: k, label: `Orta: ${k}` }))}
          />

          {/* TERAS */}
          <Select
            style={{ width: 120 }}
            value={terasTipi}
            onChange={(val) => {
              setTerasTipi(val);
              if (val === "mavivilla") setHovuzModeli("judiGrey");
            }}
            options={Object.keys(teras).map(t => ({ value: t, label: `Teras: ${t}` }))}
          />
        </Space>
      </div>
    </div>
  );
}
