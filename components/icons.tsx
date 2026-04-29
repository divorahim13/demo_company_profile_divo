import React, { forwardRef } from 'react';
import {
  Zap,
  ArrowRight,
  ShieldCheck,
  Headset,
  CalendarDays,
  Users,
  ShoppingBag,
  Factory,
  HeartPulse,
  Building2,
  Landmark,
  ClipboardCheck,
  MessageSquare,
  Settings,
  MessageCircleQuestion,
  Search,
  ChevronRight,
  ChevronLeft,
  Camera,
  MapPin,
  Layers,
  Filter,
  ExternalLink,
  Target,
  Award,
  Clock,
  Eye,
  Snowflake,
  Handshake,
  Menu,
  XCircle,
  X,
  ChevronDown,
  Mail,
  Phone,
  FileText,
  Cpu,
  Globe,
  User,
  CircleHelp
} from 'lucide-react';

// HVAC
export const SnowflakeBoldDuotoneIcon = Snowflake;

// M&E / Electrical
export const BoltBoldDuotoneIcon = Zap;
export const ShieldCheckBoldDuotoneIcon = ShieldCheck;
export const CpuBoldDuotoneIcon = Cpu;

// Support / Service
export const HeadphonesRoundSoundBoldDuotoneIcon = Headset;
export const ClockCircleBoldDuotoneIcon = Clock;
export const AwardBoldDuotoneIcon = Award;
export const MedalRibbonStarBoldDuotoneIcon = Award;

// Navigation / General
export const ArrowRightBoldDuotoneIcon = ArrowRight;
export const AltArrowRightBoldDuotoneIcon = ChevronRight;
export const AltArrowLeftBoldDuotoneIcon = ChevronLeft;
export const AltArrowDownBoldDuotoneIcon = ChevronDown;
export const ChevronRightIcon = ChevronRight;
export const ChevronLeftIcon = ChevronLeft;

// Documents / Planning
export const ClipboardCheckBoldDuotoneIcon = ClipboardCheck;
export const BillListBoldDuotoneIcon = FileText;
export const FileTextBoldDuotoneIcon = FileText;
export const ClipboardListBoldDuotoneIcon = ClipboardCheck;

// UI Elements
export const CheckCircleBoldDuotoneIcon = ClipboardCheck;
export const CloseCircleBoldDuotoneIcon = XCircle;
export const HamburgerMenuBoldDuotoneIcon = Menu;
export const MagniferBoldDuotoneIcon = Search;
export const FilterBoldDuotoneIcon = Filter;
export const LinkSquareBoldDuotoneIcon = ExternalLink;
export const LayersBoldDuotoneIcon = Layers;
export const SettingsBoldDuotoneIcon = Settings;

// Communication
export const ChatRoundBoldDuotoneIcon = MessageSquare;
export const QuestionCircleBoldDuotoneIcon = MessageCircleQuestion;
export const PhoneBoldDuotoneIcon = Phone;
export const LetterBoldDuotoneIcon = Mail;
export const PhoneBoldIcon = Phone;

// Business / Team
export const UsersGroupTwoRoundedBoldDuotoneIcon = Users;
export const UserBoldDuotoneIcon = User;
export const HandShakeBoldDuotoneIcon = Handshake;
export const TargetBoldDuotoneIcon = Target;
export const CrownBoldDuotoneIcon = Award;

// Locations / Buildings
export const MapPointBoldDuotoneIcon = MapPin;
export const BuildingsBoldDuotoneIcon = Factory;
export const Buildings2BoldDuotoneIcon = Building2;
export const CityBoldDuotoneIcon = Landmark;
export const EarthBoldDuotoneIcon = Globe;

// Multimedia
export const CameraBoldDuotoneIcon = Camera;
export const EyeBoldDuotoneIcon = Eye;
export const VideocameraBoldDuotoneIcon = Camera;

// Retail / Others
export const BagBoldDuotoneIcon = ShoppingBag;
export const HeartPulseBoldDuotoneIcon = HeartPulse;

// Dates
export const CalendarBoldDuotoneIcon = CalendarDays;

// Custom/Specific icons (Functional Components with forwardRef)
export const HomeBoldDuotoneIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="m21.532 11.586l-.782-.626v10.29H22a.75.75 0 0 1 0 1.5H2a.75.75 0 1 1 0-1.5h1.25V10.96l-.781.626a.75.75 0 1 1-.937-1.172l8.125-6.5a3.75 3.75 0 0 1 4.686 0l8.125 6.5a.75.75 0 1 1-.936 1.172M12 6.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m1.746 6.562c-.459-.062-1.032-.062-1.697-.062h-.098c-.665 0-1.238 0-1.697.062c-.491.066-.963.215-1.345.597s-.531.854-.597 1.345c-.062.459-.062 1.032-.062 1.697v4.299h7.5v-4.423c0-.612-.004-1.143-.062-1.573c-.066-.491-.215-.963-.597-1.345s-.853-.531-1.345-.597" clipRule="evenodd" opacity=".5"/></svg>
));
HomeBoldDuotoneIcon.displayName = 'HomeBoldDuotoneIcon';

export const FacebookCircleFillIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 5.01 3.667 9.153 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89c1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.333 21.153 22 17.01 22 12c0-5.523-4.477-10-10-10"/></svg>
));
FacebookCircleFillIcon.displayName = 'FacebookCircleFillIcon';

export const InstagramFillIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4zm9.45 2a1.25 1.25 0 1 1 0 2.5a1.25 1.25 0 0 1 0-2.5M12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6"/></svg>
));
InstagramFillIcon.displayName = 'InstagramFillIcon';

export const LinkedinFillIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.69m1.39 9.94v-8.37H5.5v8.37z"/></svg>
));
LinkedinFillIcon.displayName = 'LinkedinFillIcon';

export const TwitterXLineIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/></svg>
));
TwitterXLineIcon.displayName = 'TwitterXLineIcon';

// ri:tiktok-fill
export const TiktokFillIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M16 8.245V15.5a6.5 6.5 0 1 1-5-6.326v3.163a3.5 3.5 0 1 0 2 3.163V2h3a5 5 0 0 0 5 5v3a7.97 7.97 0 0 1-5-1.755"/></svg>
);

// ri:youtube-fill
export const YoutubeFillIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.244 4c.534.003 1.87.016 3.29.073l.504.022c1.429.067 2.857.183 3.566.38c.945.266 1.687 1.04 1.938 2.022c.4 1.56.45 4.602.456 5.339l.001.152v.174c-.007.737-.057 3.78-.457 5.339c-.254.985-.997 1.76-1.938 2.022c-.709.197-2.137.313-3.566.38l-.504.023c-1.42.056-2.756.07-3.29.072l-.235.001h-.255c-1.13-.007-5.856-.058-7.36-.476c-.944-.266-1.687-1.04-1.938-2.022c-.4-1.56-.45-4.602-.456-5.339v-.326c.006-.737.056-3.78.456-5.339c.254-.985.997-1.76 1.939-2.021c1.503-.419 6.23-.47 7.36-.476zM9.999 8.5v7l6-3.5z"/></svg>
);

// Premium Icons for Sektor yang Kami Layani
export const RetailBagIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path fill="currentColor" d="m17.5 8.75l-2.455 10.803a1.8 1.8 0 0 0 1.753 2.197H18"/><path fill="currentColor" d="M19.22 21.75H4.78a1.78 1.78 0 0 1-1.727-2.213l2.19-8.757c.363-1.455.545-2.183 1.088-2.606c.542-.424 1.292-.424 2.792-.424h5.754c1.5 0 2.25 0 2.792.424c.543.423.725 1.15 1.088 2.606l2.19 8.757a1.782 1.782 0 0 1-1.728 2.213"/><path fill="currentColor" d="M15 7.75v-2a3 3 0 1 0-6 0v2m1 3h2.5"/></g></svg>
));
RetailBagIcon.displayName = 'RetailBagIcon';

export const EnergyBoltIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6.194 11.397l5.998-8.085c.47-.632 1.348-.239 1.348.603v6.258c0 .505.345.913.77.913h2.918c.663 0 1.016.927.578 1.518l-5.998 8.084c-.47.632-1.348.239-1.348-.603v-6.258c0-.505-.345-.913-.77-.913H6.771c-.663 0-1.016-.927-.578-1.517"/></svg>
));
EnergyBoltIcon.displayName = 'EnergyBoltIcon';

export const HospitalIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path fill="currentColor" d="M14 2v2m0 0v2m0-2h-4m0-2v2m0 0v2"/><path fill="currentColor" strokeLinejoin="round" d="M3 22V11.38c0-3.503 0-5.255 1.153-6.344C4.886 4.344 5.903 4.092 7.5 4M21 22V11.38c0-3.503 0-5.255-1.153-6.344c-.733-.692-1.75-.944-3.347-1.036"/><path fill="currentColor" d="M14 10h2m-2 4h2m-9 0h2m-2-4h2"/><path fill="currentColor" strokeLinejoin="round" d="M2 22h7.5M22 22h-7.5"/><path fill="currentColor" d="M9.5 22v-2.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 17 11.065 17 12 17s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75V22"/></g></svg>
));
HospitalIcon.displayName = 'HospitalIcon';

export const PropertyBuildingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path fill="currentColor" strokeLinejoin="round" d="m16 10l2.15.645c1.373.412 2.06.618 2.455 1.15c.395.53.395 1.248.395 2.681V22"/><path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 9h3m-3 4h3"/><path fill="currentColor" strokeLinejoin="round" d="M12 22v-3c0-.943 0-1.414-.293-1.707S10.943 17 10 17H9c-.943 0-1.414 0-1.707.293S7 18.057 7 19v3"/><path fill="currentColor" strokeLinecap="round" d="M2 22h20"/><path fill="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 22V6.717c0-2.51 0-3.766.791-4.389s1.956-.284 4.287.392l5 1.451c1.406.408 2.109.612 2.515 1.169C16 5.896 16 6.653 16 8.169V22"/></g></svg>
));
PropertyBuildingIcon.displayName = 'PropertyBuildingIcon';

export const CommercialBuildingIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5"><path fill="currentColor" d="M11 2v12c0 3.31-.69 4-4 4H3m2-6h6"/><path fill="currentColor" strokeLinecap="round" d="M17.5 16h1m-1 3h1M14 5v17H4.279c-1.241 0-1.862 0-2.148-.425c-.286-.426-.075-1.035.347-2.254L7.782 3.98c.331-.957.497-1.436.868-1.709C9.022 2 9.51 2 10.484 2h.643c1.354 0 2.032 0 2.452.44C14 2.878 14 3.585 14 5m0 5l3.79 1.184c2.03.635 3.044.952 3.627 1.745S22 14.785 22 16.91V20c0 .943 0 1.414-.293 1.707S20.943 22 20 22h-6"/></g></svg>
));
CommercialBuildingIcon.displayName = 'CommercialBuildingIcon';

export const PublicServiceIcon = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
  <svg {...props} ref={ref} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path fill="currentColor" strokeLinecap="round" d="M5 9.083C5 7.917 6 7.5 6.5 7.5c.994 0 1.5.754 1.5 1.583C8 11.016 6.657 12 5 12s-3-1.567-3-3.5S3.343 5 5 5h14c1.657 0 3 1.567 3 3.5S20.657 12 19 12s-3-.984-3-2.917c0-.83.506-1.583 1.5-1.583c.5 0 1.5.417 1.5 1.583"/><path fill="currentColor" d="M3 20a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path fill="currentColor" strokeLinecap="round" d="M13 9h-2M9.5 19v-4m5 4v-4M19 5c0-1.414 0-2.121-.44-2.56C18.122 2 17.415 2 16 2H8c-1.414 0-2.121 0-2.56.44C5 2.878 5 3.585 5 5m0 7v7h14v-7"/></g></svg>
));
PublicServiceIcon.displayName = 'PublicServiceIcon';
