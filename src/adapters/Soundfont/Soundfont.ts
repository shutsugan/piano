import { useState, useRef } from "react";
import { InstrumentName } from "soundfont-player";
import { MidiValue } from "../../domain/note";
import { Optional } from "../../domain/types";
import { DEFAULT_INSTRUMENT } from "../../domain/sound";

interface Settings {
  AudioContext: AudioContextType;
}

interface Adapter {
  loading: boolean;
  current: Optional<InstrumentName>;
  load(instrument?: InstrumentName): Promise<void>;
  play(note: MidiValue): Promise<void>;
  stop(note: MidiValue): Promise<void>;
}

export const useSoundfont = ({ AudioContext }: Settings): Adapter => {
  let activeNodes: AudioNodesRegistry = {};

  const [current, setCurrent] = useState<Optional<InstrumentName>>();
  const [loading, setLoading] = useState<boolean>(false);
  const [player, setPlayer] = useState<Optional<Player>>(null);

  const audio = useRef(new AudioContext());

  const resume = async () => {
    return audio.current.state === "susmended"
      ? await audio.current.resume()
      : Promise.resolve();
  };

  const load = async (instrument: InstrumentName = DEFAULT_INSTRUMENT) => {
    setLoading(true);

    const player = await Soundfont.instrument(audio.current, instrument);

    setLoading(false);
    setCurrent(instrument);
    setPlayer(player);
  };

  const play = async (note: MidiValue) => {
    await resume();
    if (!player) return;

    const node = player.play(note.toString());
    activeNodes = { ...activeNodes, [note]: node };
  };

  const stop = async (note: MidiValue) => {
    await resume();
    if (!activeNodes[note]) return;

    activeNodes[note]!.stop();
    activeNodes = { ...activeNodes, [node]: null };
  };
};
