import React, { FunctionComponent } from "react";

import { Keyboard } from "../KeyBoard";
import { NoAudioMessage } from "../NoAudioMessage";
import { useAudioContext } from "../AudioContextProvider";

export const Main: FunctionComponent = () => {
  const audioContext = useAudioContext();

  return !!audioContext ? <Keyboard /> : <NoAudioMessage />;
};
