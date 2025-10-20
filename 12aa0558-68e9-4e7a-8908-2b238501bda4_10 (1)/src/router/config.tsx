
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Interieur from "../pages/interieur/page";
import Exterieur from "../pages/exterieur/page";
import Professionnel from "../pages/professionnel/page";
import OffresSpeciales from "../pages/offres-speciales/page";
import Portfolio from "../pages/portfolio/page";
import Magasins from "../pages/magasins/page";
import MonCompte from "../pages/mon-compte/page";
import Suspension from "../pages/categories/suspension/page";
import Plafonnier from "../pages/categories/plafonnier/page";
import Applique from "../pages/categories/applique/page";
import Lampadaire from "../pages/categories/lampadaire/page";
import Lustre from "../pages/categories/lustre/page";
import LampeTable from "../pages/categories/lampe-table/page";
import SuspensionDouble from "../pages/categories/suspension-double/page";
import SuspensionExterieure from "../pages/categories/suspension-exterieure/page";
import PlafonnierExterieur from "../pages/categories/plafonnier-exterieur/page";
import AppliqueExterieure from "../pages/categories/applique-exterieure/page";
import DecoExterieure from "../pages/categories/deco-exterieure/page";
import BornePoteau from "../pages/categories/borne-poteau/page";
import PiquetTerre from "../pages/categories/piquet-terre/page";
import EncastrableSol from "../pages/categories/encastrable-sol/page";
import Balisage from "../pages/categories/balisage/page";
import Projecteur from "../pages/categories/projecteur/page";
import Hublot from "../pages/categories/hublot/page";
import AccessoireRail from "../pages/categories/accessoire-rail/page";
import Spot from "../pages/categories/spot/page";
import Ampoules from "../pages/categories/ampoules/page";
import Rail from "../pages/categories/rail/page";
import OffresInterieur from "../pages/categories/offres-interieur/page";
import OffresExterieur from "../pages/categories/offres-exterieur/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/interieur",
    element: <Interieur />,
  },
  {
    path: "/exterieur",
    element: <Exterieur />,
  },
  {
    path: "/professionnel",
    element: <Professionnel />,
  },
  {
    path: "/offres-speciales",
    element: <OffresSpeciales />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  },
  {
    path: "/magasins",
    element: <Magasins />,
  },
  {
    path: "/mon-compte",
    element: <MonCompte />,
  },
  // Categories Intérieur
  {
    path: "/suspension",
    element: <Suspension />,
  },
  {
    path: "/suspension-double",
    element: <SuspensionDouble />,
  },
  {
    path: "/plafonnier",
    element: <Plafonnier />,
  },
  {
    path: "/lustre",
    element: <Lustre />,
  },
  {
    path: "/applique",
    element: <Applique />,
  },
  {
    path: "/lampadaire",
    element: <Lampadaire />,
  },
  {
    path: "/lampe-table",
    element: <LampeTable />,
  },
  // Categories Extérieur
  {
    path: "/suspension-exterieure",
    element: <SuspensionExterieure />,
  },
  {
    path: "/plafonnier-exterieur",
    element: <PlafonnierExterieur />,
  },
  {
    path: "/applique-exterieure",
    element: <AppliqueExterieure />,
  },
  {
    path: "/deco-exterieure",
    element: <DecoExterieure />,
  },
  {
    path: "/borne-poteau",
    element: <BornePoteau />,
  },
  {
    path: "/piquet-terre",
    element: <PiquetTerre />,
  },
  {
    path: "/encastrable-sol",
    element: <EncastrableSol />,
  },
  {
    path: "/balisage",
    element: <Balisage />,
  },
  {
    path: "/projecteur",
    element: <Projecteur />,
  },
  {
    path: "/hublot",
    element: <Hublot />,
  },
  // Categories Professionnel
  {
    path: "/accessoire-rail",
    element: <AccessoireRail />,
  },
  {
    path: "/spot",
    element: <Spot />,
  },
  {
    path: "/ampoules",
    element: <Ampoules />,
  },
  {
    path: "/rail",
    element: <Rail />,
  },
  // Offres Spéciales
  {
    path: "/offres-interieur",
    element: <OffresInterieur />,
  },
  {
    path: "/offres-exterieur",
    element: <OffresExterieur />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
