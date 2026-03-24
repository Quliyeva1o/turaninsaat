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
import terasJudiGece from "../../public/assets/teraslar/villa3gece.png";

import terasLuca from "../../public/assets/teraslar/hovuz.png";
import terasLucaGece from "../../public/assets/teraslar/hovuzgece.png";

import mavivilla from "../../public/assets/teraslar/mavivilla.png";
import mavivillagece from "../../public/assets/teraslar/mavivillagece.png";

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

  type HovuzTipi = "klassikCam" | "kare";
  type HovuzModeli = KlassikCamModels | KareModels;

  // =========================
  // STATES
  // =========================
  const [hovuzTipi, setHovuzTipi] = useState<HovuzTipi>("kare");
  const [hovuzModeli, setHovuzModeli] = useState<HovuzModeli>("bali");

  const { Option, OptGroup } = Select;

  // kafellər
  const [kenar, setKenar] = useState<keyof typeof kenarKafelleri>("superstone");
  const [orta, setOrta] = useState<keyof typeof ortaKafeller>("superstone");
  const [terasTipi, setTerasTipi] = useState<keyof typeof teras>("judi");

  const mode = isNight ? "gece" : "gunduz";

  const hovuzlar = {
    klassikCam: {
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
    },

    kare: {
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
    },
  } as const;

  const kenarKafelleri = {
    superstone: {
      gunduz: superstone,
      gece: superstoneGece,
    },
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
  } as const;

  const ortaKafeller = {
    superstone: {
      gunduz: superstone,
      gece: superstoneGece,
    },
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
  } as const;
  const teras = {
    light: {
      gunduz: terasLight,
      gece: terasLightGece,
    },
    judi: {
      gunduz: terasJudi,
      gece: terasJudiGece,
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

  if (hovuzTipi === "klassikCam") {
    hovuzGunduz = hovuzlar.klassikCam[hovuzModeli as KlassikCamModels].gunduz;
    hovuzGece = hovuzlar.klassikCam[hovuzModeli as KlassikCamModels].gece;
  } else {
    hovuzGunduz = hovuzlar.kare[hovuzModeli as KareModels].gunduz;
    hovuzGece = hovuzlar.kare[hovuzModeli as KareModels].gece;
  }

  const kenarGece = kenarKafelleri[kenar].gece
  const kenarGunduz = kenarKafelleri[kenar].gunduz;


  const ortaGece = ortaKafeller[orta].gece;
  const ortaGunduz = ortaKafeller[orta].gunduz;


  const terasGunduz = teras[terasTipi].gunduz;
  const terasGece = teras[terasTipi].gece;


  const toggleTheme = () => {
    setIsNight((prev) => !prev);
  };

  // =========================
  // RENDER
  // =========================

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* HOVUZ */}
      {/* HOVUZ */}
      <Image
        fill
        src={hovuzGece}
        alt="hovuz-gece"
        className={`object-cover ${mode === "gece" ? "z-11" : "z-10"}`}
      />

      <Image
        fill
        src={hovuzGunduz}
        alt="hovuz-gunduz"
        className={`object-cover ${mode === "gece" ? "z-10" : "z-11"}`}
      />

      {/* KAFELLƏR */}
      <Image fill src={kenarGece} alt="kenar" className={`object-cover ${mode == 'gece' ? 'z-23' : 'z-22'}`} />
      <Image fill src={kenarGunduz} alt="kenar" className={`object-cover ${mode == 'gece' ? 'z-22' : 'z-23'}`} />

      <Image fill src={ortaGece} alt="orta" className={`object-cover ${mode == 'gece' ? 'z-23' : 'z-22'}`} />
      <Image fill src={ortaGunduz} alt="orta" className={`object-cover ${mode == 'gece' ? 'z-22' : 'z-23'}`} />


      <Image fill src={terasGunduz} alt="terasgunduz" className={`object-cover ${mode == 'gece' ? 'z-20' : 'z-21'}`} />
      <Image fill src={terasGece} alt="terasgece" className={`object-cover ${mode == 'gece' ? 'z-21' : 'z-20'}`} />


      {/* =========================
          UI – TEST PANEL
      ========================= */}
     <div className="absolute bottom-4 right-4 z-50 bg-black/50 backdrop-blur-md px-3 py-2 rounded-xl text-white">
  <Space size="small" wrap>
    {/* 🌙 MODE */}
    <Button
      size="small"
      onClick={() => setIsNight((p) => !p)}
      className="bg-white/20 text-white border-none"
    >
      {isNight ? "🌙" : "☀️"}
    </Button>

    {/* 🏊 HOVUZ */}
    <Select
      size="small"
      value={`${hovuzTipi}.${hovuzModeli}`}
      onChange={(val) => {
        const [type, model] = val.split(".");
        setHovuzTipi(type as keyof typeof hovuzlar);
        setHovuzModeli(model as any);
      }}
      style={{ width: 140 }}
    >
      {Object.entries(hovuzlar).map(([type, models]) => (
        <OptGroup key={type} label={type}>
          {Object.keys(models).map((model) => (
            <Option key={`${type}.${model}`} value={`${type}.${model}`}>
              {model}
            </Option>
          ))}
        </OptGroup>
      ))}
    </Select>

    {/* 🧱 KƏNAR */}
    <Select
      size="small"
      value={kenar}
      onChange={(val) => setKenar(val)}
      style={{ width: 100 }}
    >
      {Object.keys(kenarKafelleri).map((k) => (
        <Option key={k} value={k}>
          K:{k}
        </Option>
      ))}
    </Select>

    {/* 🧱 ORTA */}
    <Select
      size="small"
      value={orta}
      onChange={(val) => setOrta(val)}
      style={{ width: 100 }}
    >
      {Object.keys(ortaKafeller).map((k) => (
        <Option key={k} value={k}>
          O:{k}
        </Option>
      ))}
    </Select>

    {/* 🏡 TERAS */}
    <Select
      size="small"
      value={terasTipi}
      onChange={(val) => {
        setTerasTipi(val);

        if (val === "mavivilla") {
          setHovuzTipi("kare");
          setHovuzModeli("judiGrey");
        }
      }}
      style={{ width: 120 }}
    >
      {Object.keys(teras).map((k) => (
        <Option key={k} value={k}>
          T:{k}
        </Option>
      ))}
    </Select>
  </Space>
</div>
    </div>
  );
}
