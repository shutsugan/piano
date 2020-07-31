import React, { FunctionComponent } from "react";

import { OctavesRange, selectKey } from "../../domain/keyboard";
import { notes, OctaveIndex } from "../../domain/note";
import { Key } from "../Key";

import "./index.css";

export const Keyboard: FunctionComponent = () => (
  <div className="keyboard">
    {notes.map(({ midi, type, index, octave }) => {
      const label = selectKey(octave as OctavesRange, index);

      return <Key key={midi} type={type} lable={label} />;
    })}
  </div>
);
