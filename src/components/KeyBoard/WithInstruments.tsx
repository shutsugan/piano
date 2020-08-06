import React, { FunctionComponent } from "react";
import { useAudioContext } from "../AudioContextProvider/useAudioContext";
import { useSoundfont } from "../../adapters/Soundfont/Soundfont";
import { useMount } from "../../utils/useMount";
import { Keyboard } from "./index";

import "./style.css";

export const KeyboardWithInstrument: FunctionComponent = () => {
  const AudioContext = useAudioContext()!;
  const { loading, play, stop, load } = useSoundfont({ AudioContext });
  useMount(load);
  return <Keyboard loading={loading} play={play} stop={stop} />;
};
