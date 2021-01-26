type ActiveMeter = {
  id: string;
  type: "gas" | "electricity";
}

type ToggleButtonProps = {
    dataMeterType: string;
    isActive: boolean;
    text: string;
    toggleMeter: any;
}

type ErrorProps = {
  text: string;
}

type HeadingProps = {
  children: React.ReactNode;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

type IconProps = {
  altText: string;
  height: number;
  src: string;
  width: number;
}

type LabelProps = {
  text: string;
}

type LoaderProps = {
  text: string;
}

type Meter = {
  id: string;
  createdAt: string;
  pointOfDelivery: string;
}

type MeterContext = {
  activeMeter: ActiveMeter;
  activeFilter: string;
  handleYearFiltering: Function;
  isError: boolean;
  isLoading: boolean;
  meter: Array<string>;
  metersData: Array<MeterData>;
  meterYears: Array<Number>;
  setActiveFilter: Function;
  toggleMeterType: Function;
}

type MeterData = {
  createdAt: string;
  id: string;
  indexhigh: number;
  indexHigh: number;
  indexLow: number | undefined;
  meterId: string;
  meter: Meter;
}

type MeterProvider = {
  children: React.ReactNode;
}

type PanelProps = {
  children: React.ReactNode;
}