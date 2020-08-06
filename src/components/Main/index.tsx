import React, { FunctionComponent } from "react";

import { KeyboardWithInstrument } from "../KeyBoard/WithInstruments";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";

export const Main: FunctionComponent = () => {
  const audioContext = useAudioContext();

  return !!audioContext ? <KeyboardWithInstrument /> : <NoAudioMessage />;
};
