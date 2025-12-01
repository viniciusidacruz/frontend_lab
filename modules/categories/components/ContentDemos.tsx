"use client";

import { ContentDemoMap } from "../types/content";
import { DatalistDemo } from "./DatalistDemo";
import { DetailsDemo } from "./DetailsDemo";
import { DialogDemo } from "./DialogDemo";
import { PictureDemo } from "./PictureDemo";
import { TemplateDemo } from "./TemplateDemo";

export const CONTENT_DEMOS: ContentDemoMap = {
  datalist: DatalistDemo,
  details: DetailsDemo,
  dialog: DialogDemo,
  picture: PictureDemo,
  template: TemplateDemo,
};
