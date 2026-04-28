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
