export interface CaptchaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}

export interface LoginAPIRes {
  msg: string;
  code: number;
  token: string;
}