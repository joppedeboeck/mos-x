import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import RegioPage  from "@/components/regio-page";

export const metadata: Metadata = {
  title: "Dakontmossing Antwerpen | MOS-X — Erkende Dakspecialist",
  description: "MOS-X verzorgt professionele dakontmossing en dakcoating in heel de provincie Antwerpen. Gratis drone-inspectie. Actief in Antwerpen, Mechelen, Lier en 27 andere gemeenten.",
};

const municipalities = [
  { name: "Antwerpen",            zip: "2000" },
  { name: "Mechelen",             zip: "2800" },
  { name: "Lier",                 zip: "2500" },
  { name: "Herentals",            zip: "2200" },
  { name: "Turnhout",             zip: "2300" },
  { name: "Grobbendonk",          zip: "2280" },
  { name: "Mol",                  zip: "2400" },
  { name: "Geel",                 zip: "2440" },
  { name: "Olen",                 zip: "2250" },
  { name: "Heist-op-den-Berg",    zip: "2220" },
  { name: "Duffel",               zip: "2570" },
  { name: "Boom",                 zip: "2850" },
  { name: "Rumst",                zip: "2840" },
  { name: "Zandhoven",            zip: "2240" },
  { name: "Nijlen",               zip: "2560" },
  { name: "Berlaar",              zip: "2590" },
  { name: "Putte",                zip: "2580" },
  { name: "Sint-Katelijne-Waver", zip: "2860" },
  { name: "Bornem",               zip: "2880" },
  { name: "Puurs",                zip: "2870" },
  { name: "Brecht",               zip: "2960" },
  { name: "Schilde",              zip: "2970" },
  { name: "Wuustwezel",           zip: "2990" },
  { name: "Essen",                zip: "2910" },
  { name: "Kalmthout",            zip: "2920" },
  { name: "Brasschaat",           zip: "2930" },
  { name: "Schoten",              zip: "2900" },
  { name: "Wommelgem",            zip: "2160" },
  { name: "Ranst",                zip: "2520" },
  { name: "Boechout",             zip: "2530" },
];

const intro = [
  "De provincie Antwerpen combineert drukke stedelijke kernen, de havengemeenten langs de Schelde en de uitgestrekte Kempen. Die variatie brengt ook verschillende dakproblemen met zich mee: in de havenzone zorgt zoute neerslag voor versnelde algengroei, terwijl de dennenbossen in de Kempen extra mosgroei op naburige daken stimuleren. Yannick van MOS-X werkt persoonlijk in heel de provincie en brengt dezelfde kwaliteit mee naar elke gemeente.",
  "MOS-X is actief vanuit Grobbendonk en kent de Antwerpse dakproblematiek als geen ander. Of het nu gaat om een rijtjeshuis in Mechelen, een villa in Schilde of een boerderij in Mol — elke dakdiagnose is gratis, elke offerte vaste prijs en Yannick staat zelf garant voor het resultaat.",
];

const climateText =
  "De provincie Antwerpen kent een uitgesproken vochtig klimaat, versterkt door de aanwezigheid van de Schelde en de vele waterrijke gebieden in de Kempen. Neerslag verdeeld over het hele jaar, gecombineerd met schaduwrijke tuinen en de invloed van het bos in het noorden, maakt daken bijzonder vatbaar voor mosgroei. In de haven- en polderzone speelt ook de zoute zeenevel een rol bij de aantasting van dakmaterialen. Een kwaliteitsvolle dakcoating na de reiniging beschermt uw dak effectief en verlengt de levensduur met meer dan tien jaar.";

export default function AntwerpenPage() {
  return (
    <PageLayout>
      <RegioPage
        province="Antwerpen"
        municipalities={municipalities}
        intro={intro}
        climateText={climateText}
      />
    </PageLayout>
  );
}
