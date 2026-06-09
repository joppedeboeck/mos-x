import type { Metadata } from "next";
import PageLayout from "@/components/page-layout";
import RegioPage  from "@/components/regio-page";

export const metadata: Metadata = {
  title: "Dakontmossing Vlaams-Brabant | MOS-X — Erkende Dakspecialist",
  description: "MOS-X verzorgt professionele dakontmossing en dakcoating in heel Vlaams-Brabant. Gratis drone-inspectie. Actief in Leuven, Vilvoorde, Halle en 27 andere gemeenten.",
};

const municipalities = [
  { name: "Leuven",              zip: "3000" },
  { name: "Vilvoorde",           zip: "1800" },
  { name: "Halle",               zip: "1500" },
  { name: "Asse",                zip: "1730" },
  { name: "Zaventem",            zip: "1930" },
  { name: "Grimbergen",          zip: "1850" },
  { name: "Meise",               zip: "1861" },
  { name: "Kampenhout",          zip: "1910" },
  { name: "Kortenberg",          zip: "3070" },
  { name: "Tervuren",            zip: "3080" },
  { name: "Overijse",            zip: "3090" },
  { name: "Hoeilaart",           zip: "1560" },
  { name: "Huldenberg",          zip: "3040" },
  { name: "Bierbeek",            zip: "3360" },
  { name: "Tienen",              zip: "3300" },
  { name: "Diest",               zip: "3290" },
  { name: "Aarschot",            zip: "3200" },
  { name: "Rotselaar",           zip: "3110" },
  { name: "Zemst",               zip: "1980" },
  { name: "Steenokkerzeel",      zip: "1820" },
  { name: "Wezembeek-Oppem",     zip: "1970" },
  { name: "Kraainem",            zip: "1950" },
  { name: "Wemmel",              zip: "1780" },
  { name: "Lennik",              zip: "1750" },
  { name: "Pepingen",            zip: "1670" },
  { name: "Sint-Genesius-Rode",  zip: "1640" },
  { name: "Sint-Pieters-Leeuw", zip: "1600" },
  { name: "Linkebeek",           zip: "1630" },
  { name: "Dilbeek",             zip: "1700" },
  { name: "Londerzeel",          zip: "1840" },
];

const intro = [
  "Vlaams-Brabant combineert een dicht bebouwde randstedelijke zone rond Brussel met groene woonkernen in de Dijle- en Demervallei. De mix van vochtige rivierdalen, schaduwrijke tuinen en het milde klimaat zorgt voor ideale omstandigheden voor mosgroei op daken — ook op betrekkelijk nieuwe woningen. Yannick van MOS-X is persoonlijk actief in heel de provincie en kent de lokale dakproblematiek door en door.",
  "Een verzorgd dak verhoogt de waarde van uw woning aanzienlijk, zeker in een regio waar de vastgoedprijzen hoog liggen. MOS-X reinigt en coateert daken met biologische methodes die pannen niet beschadigen, gevolgd door een schriftelijke garantie tot 15 jaar. Geen onderaannemers, altijd Yannick zelf aan de deur.",
];

const climateText =
  "Vlaams-Brabant wordt gekenmerkt door een gematigd zeeklimaat met regelmatige neerslag, vooral in de herfst en winter. De combinatie van neerslag, schaduw van bomen en de typische Brabantse leem- en kleibodem creëert vochtige omstandigheden waarbij mos en algen bijzonder snel groeien op dakpannen. Zonder regelmatig onderhoud kan een dak in vijf tot zeven jaar zodanig beschadigen dat vervanging onvermijdelijk wordt. Een preventieve coating na de reiniging beschermt uw investering jarenlang.";

export default function VlaamsBrabantPage() {
  return (
    <PageLayout>
      <RegioPage
        province="Vlaams-Brabant"
        municipalities={municipalities}
        intro={intro}
        climateText={climateText}
      />
    </PageLayout>
  );
}
