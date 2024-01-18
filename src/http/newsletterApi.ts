import { http, setHttpHeaderToken, getCookie } from "./http";

interface gudokParam {
  nLetterAgree: string;
  groupCd: string;
  updateStatus?: string;
}

export const patchGudok = async (param: gudokParam) => {
  try {
    const accToken = getCookie("accessToken");
    setHttpHeaderToken(accToken);
    const patchGudokInfo = await http.patch("/users/me", param);
    const result = await patchGudokInfo.data;
    console.log(result);
  } catch (error) {}
};
