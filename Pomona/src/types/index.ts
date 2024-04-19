type externalInformation = {
  aspectRatio: number,
  brightness: number,
  colorTemperature: number,
  contrast: number,
  deviceId: string,
  facingMode: string,
  frameRate: number,
  groupId: string,
  height: number,
  reziseMode: string,
  saturation: number,
  sharpness: number,
  whiteBalanceMode: string,
  width: number
};

export type expoImage = {
  base64: string;
  uri: string;
  exif: externalInformation
  height: number;
  width: number;
};
