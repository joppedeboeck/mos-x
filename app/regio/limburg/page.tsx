import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import RegioPage  from "@/components/regio-page";

export const metadata: Metadata = {
  title: "Dakontmossing Limburg | MOS-X — Erkende Dakspecialist",
  description: "MOS-X verzorgt professionele dakontmossing en dakcoating in heel Limburg. Gratis drone-inspectie. Actief in Hasselt, Genk, Sint-Truiden en 27 andere gemeenten.",
};

const municipalities = [
  { name: "Hasselt",              zip: "3500" },
  { name: "Genk",                 zip: "3600" },
  { name: "Sint-Truiden",         zip: "3800" },
  { name: "Tongeren",             zip: "3700" },
  { name: "Maaseik",              zip: "3680" },
  { name: "Lommel",               zip: "3920" },
  { name: "Beringen",             zip: "3580" },
  { name: "Heusden-Zolder",       zip: "3550" },
  { name: "Herk-de-Stad",         zip: "3540" },
  { name: "Diest",                zip: "3290" },
  { name: "Halen",                zip: "3545" },
  { name: "Nieuwerkerken",        zip: "3850" },
  { name: "Gingelom",             zip: "3890" },
  { name: "Borgloon",             zip: "3840" },
  { name: "Riemst",               zip: "3770" },
  { name: "Bilzen",               zip: "3740" },
  { name: "Lanaken",              zip: "3620" },
  { name: "Maasmechelen",         zip: "3630" },
  { name: "Dilsen-Stokkem",       zip: "3650" },
  { name: "Kinrooi",              zip: "3640" },
  { name: "Bocholt",              zip: "3950" },
  { name: "Neerpelt",             zip: "3910" },
  { name: "Overpelt",             zip: "3900" },
  { name: "Peer",                 zip: "3990" },
  { name: "Houthalen-Helchteren", zip: "3530" },
  { name: "Zonhoven",             zip: "3520" },
  { name: "Diepenbeek",           zip: "3590" },
  { name: "Alken",                zip: "3570" },
  { name: "Wellen",               zip: "3830" },
  { name: "Kortessem",            zip: "3720" },
];

const intro = [
  "Limburg is de groenste provincie van Vlaanderen, met uitgestrekte Kempische heidevelden, bossen en de Maasvalleien langs de Nederlandse grens. Die overvloed aan natuur maakt de provincie bijzonder kwetsbaar voor dakproblemen: bomen en struiken in de buurt van woningen zorgen voor schaduw en vochtigheid, terwijl sporen van bomen rechtstreeks op daken neerslaan en mosgroei versnellen. Yannick werkt persoonlijk in heel Limburg en combineert lokale kennis met een professionele aanpak.",
  "Van de mijnwerkerswoninkjes in Genk en Beringen tot de landelijke hoeves in Haspengouw en de moderne nieuwbouwwijken in Hasselt — elk dak vraagt een andere aanpak. Na een gratis drone-inspectie legt Yannick u exact uit wat uw dak nodig heeft, en wat het kost. Vaste prijs, geen verrassingen.",
];

const climateText =
  "Limburg heeft een ietwat continentaler klimaat dan de rest van Vlaanderen, met warmere zomers en koudere winters. De winters zijn echter ook vochtig, en de uitgebreide bosrijke omgeving zorgt voor een constante aanvoer van organisch materiaal op daken. Vooral in de regio rond het Kempisch plateau en de Maas is de mosgroei bijzonder intens door de combinatie van neerslag, schaduw en organische aanslag. Een professioneel gereinigd en gecoat dak houdt die mosgroei jarenlang tegen en behoudt het uitzicht en de waarde van uw woning.";

export default function LimburgPage() {
  return (
    <PageLayout>
      <RegioPage
        province="Limburg"
        municipalities={municipalities}
        intro={intro}
        climateText={climateText}
      />
    </PageLayout>
  );
}
