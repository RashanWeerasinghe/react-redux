export const BUY_PHARMCY = 'BUY_PHARMCY';

export default function buyPharmcy(pharmcyName) {
  return {
    type: BUY_PHARMCY,
    payload: pharmcyName,
  };
}
