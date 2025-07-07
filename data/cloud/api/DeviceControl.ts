import setProperties from "./raw/SetProperties";

export async function registerForDestination(destinationCode: number) {
  await setProperties(1, destinationCode.toString());
}

export async function getInForStarting(startingCode: number) {
  await setProperties(5, undefined, "1" + startingCode.toString());
}

export async function lightOn() {
  await setProperties(6, undefined, undefined, "3");
}

export async function lightOff() {
  await setProperties(6, undefined, undefined, "4");
}

export async function fanOn() {
  await setProperties(6, undefined, undefined, "1");
}

export async function fanOff() {
  await setProperties(6, undefined, undefined, "2");
}

export async function busSlower() {
  await setProperties(6, undefined, undefined, "5");
}

export async function busFaster() {
  await setProperties(6, undefined, undefined, "6");
}

/// Debug region
export async function gotoNextStation() {
  await setProperties(10);
}

export async function genLogToSDcard() {
  await setProperties(3);
}
