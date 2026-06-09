import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import RegioPage  from "@/components/regio-page";

export const metadata: Metadata = {
  title: "Dakontmossing Oost-Vlaanderen | MOS-X — Erkende Dakspecialist",
  description: "MOS-X verzorgt professionele dakontmossing en dakcoating in heel Oost-Vlaanderen. Gratis drone-inspectie. Actief in Gent, Aalst, Sint-Niklaas en 27 andere gemeenten.",
};

const municipalities = [
  { name: "Gent",               zip: "9000" },
  { name: "Aalst",              zip: "9300" },
  { name: "Sint-Niklaas",       zip: "9100" },
  { name: "Dendermonde",        zip: "9200" },
  { name: "Lokeren",            zip: "9160" },
  { name: "Ronse",              zip: "9600" },
  { name: "Oudenaarde",         zip: "9700" },
  { name: "Geraardsbergen",     zip: "9500" },
  { name: "Zottegem",          zip: "9620" },
  { name: "Ninove",             zip: "9400" },
  { name: "Wetteren",           zip: "9230" },
  { name: "Wichelen",          zip: "9240" },
  { name: "Berlare",            zip: "9290" },
  { name: "Hamme",              zip: "9220" },
  { name: "Temse",              zip: "9140" },
  { name: "Beveren",            zip: "9120" },
  { name: "Maldegem",          zip: "9990" },
  { name: "Eeklo",             zip: "9900" },
  { name: "Kaprijke",          zip: "9970" },
  { name: "Sint-Laureins",      zip: "9980" },
  { name: "Assenede",          zip: "9960" },
  { name: "Zelzate",            zip: "9060" },
  { name: "Evergem",           zip: "9940" },
  { name: "Destelbergen",       zip: "9070" },
  { name: "Merelbeke",         zip: "9820" },
  { name: "De Pinte",          zip: "9840" },
  { name: "Sint-Martens-Latem", zip: "9830" },
  { name: "Nazareth",          zip: "9810" },
  { name: "Kruishoutem",       zip: "9770" },
  { name: "Deinze",            zip: "9800" },
];

const intro = [
  "Oost-Vlaanderen is een provincie met een rijke architecturale erfenis: van de rijwoningen in Gent en Aalst tot de landelijke hoeves in de Vlaamse Ardennen. Het vlakke landschap en de nabijheid van de Schelde zorgen voor een hoge luchtvochtigheid, waardoor mos en algen op daken bijzonder snel groeien. Yannick van MOS-X werkt persoonlijk in heel Oost-Vlaanderen en combineert vakkennis met eerlijk advies.",
  "Na een gratis drone-inspectie ontvangt u een transparante offerte met vaste prijs. Geen verrassingen achteraf. MOS-X reinigt daken met zachte bioreiniging — zonder hogedrukreiniging die pannen beschadigt — en beschermt ze daarna met een kwalitatieve coating die jarenlang standhoudt.",
];

const climateText =
  "Het zeeklimaat van Oost-Vlaanderen brengt relatief milde winters en natte herfsten. De invloed van de zee zorgt voor een constant hoge luchtvochtigheid, zeker in de polders en langs de Schelde. Die vochtigheid stimuleert de groei van mos, algen en korstmos op dakpannen. In oudere woonwijken in steden als Gent en Sint-Niklaas zien we daken die in minder dan vijf jaar volledig overgroeid raken. Periodiek onderhoud, gecombineerd met een goede dakcoating, is de meest kostenefficiënte manier om uw dakpannen te beschermen en uw woning in waarde te behouden.";

export default function OostVlaanderenPage() {
  return (
    <PageLayout>
      <RegioPage
        province="Oost-Vlaanderen"
        municipalities={municipalities}
        intro={intro}
        climateText={climateText}
      />
    </PageLayout>
  );
}
