import BanuHaqim from '../assets/banu-haqim.svg';
import Brujah from '../assets/brujah.svg';
import Gangrel from '../assets/gangrel.svg';
import Hecata from '../assets/hecata.svg';
import Lasombra from '../assets/lasombra.svg';
import Malkavian from '../assets/malkavian.svg';
import Ministry from '../assets/ministry.svg';
import Nosferatu from '../assets/nosferatu.svg';
import Ravnos from '../assets/ravnos.svg';
import Salubri from '../assets/salubri.svg';
import Toreador from '../assets/toreador.svg';
import Tremere from '../assets/tremere.svg';
import Tzimisce from '../assets/tzimisce.svg';
import Ventrue from '../assets/ventrue.svg';
import IconAmbition from '../assets/icon-ambition.svg';
import IconClanGeneric from '../assets/icon-clan-generic.svg';
import IconDiceBlack from '../assets/icon-dice-black.svg';
import IconDiceRed from '../assets/icon-dice-red.svg';
import IconDiceWhite from '../assets/icon-dice-white.svg';
import IconMenuBlack from '../assets/icon-menu-black.svg';
import IconMenuRed from '../assets/icon-menu-red.svg';
import IconMenuWhite from '../assets/icon-menu-white.svg';
import IconName from '../assets/icon-name.svg';
import IconSendBlack from '../assets/icon-send-black.svg';
import IconSendRed from '../assets/icon-send-red.svg';
import IconSendWhite from '../assets/icon-send-white.svg';
import LogoMain from '../assets/logo-main.svg';
import LogoSimplified from '../assets/logo-simplified.svg';

const getSrc = {
  clan: {
    BanuHaqim,
    Brujah,
    Gangrel,
    Malkavian,
    Ministry,
    Nosferatu,
    Ravnos,
    Salubri,
    Toreador,
    Tremere,
    Tzimisce,
    Ventrue,
    Hecata,
    Lasombra,
    IconClanGeneric,
  },
  Icon: {
    IconAmbition,
    IconClanGeneric,
    IconDiceBlack,
    IconDiceRed,
    IconDiceWhite,
    IconMenuBlack,
    IconMenuRed,
    IconMenuWhite,
    IconName,
    IconSendBlack,
    IconSendRed,
    IconSendWhite,
  },
  Logo: {
    LogoMain,
    LogoSimplified,
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function hasKey<Obj>(object: Obj, key: keyof any): key is keyof Obj {
  return key in object;
}

const ClanLogo = (name: string): string => {
  if (hasKey(getSrc.clan, name)) return getSrc.clan[name]; // works fine!
  return getSrc.clan.IconClanGeneric;
};

export { ClanLogo, getSrc };
