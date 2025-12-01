"use client";

import { ContentDemoMap } from "../types";
import { DatalistDemo } from "./html/DatalistDemo";
import { DetailsDemo } from "./html/DetailsDemo";
import { DialogDemo } from "./html/DialogDemo";
import { PictureDemo } from "./html/PictureDemo";
import { TemplateDemo } from "./html/TemplateDemo";

export const CONTENT_DEMOS: ContentDemoMap = {
  datalist: DatalistDemo,
  details: DetailsDemo,
  dialog: DialogDemo,
  picture: PictureDemo,
  template: TemplateDemo,
};
