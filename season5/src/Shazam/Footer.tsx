/* eslint-disable max-len */
import { Group, Path, Circle, Shadow } from "@shopify/react-native-skia";
import React from "react";

// viewBox="0 0 375 180"

export const Footer = () => {
  return (
    <Group>
      <Path
        fillType="evenOdd"
        path="M187 150c25.405 0 46-20.595 46-46a46.41 46.41 0 0 0-.172-4H367a8 8 0 0 1 8 8v72H0v-72a8 8 0 0 1 8-8h133.172a46.41 46.41 0 0 0-.172 4c0 25.405 20.595 46 46 46Zm-39.803-50a40.675 40.675 0 0 0-.197 4c0 22.091 17.909 40 40 40s40-17.909 40-40c0-1.35-.067-2.684-.197-4h-79.606Z"
        color="#fff"
      >
        <Shadow dx={0} dy={0} blur={80} color="black" />
      </Path>
      <Path
        path="M33 128h2v-12h-2v12Zm4 4h2v-20h-2v20Zm-8-8h2v-4h-2v4Zm12 4h2v-12h-2v12Zm4-8v4h2v-4h-2ZM108.36 124c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Zm-1.77 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.032 8.032 0 0 1-4.33 3.56Zm-.25-5.56h-4.68c-.1-.66-.16-1.32-.16-2 0-.68.06-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2Zm-2.34 5.96c-.83-1.2-1.5-2.53-1.91-3.96h3.82c-.41 1.43-1.08 2.76-1.91 3.96ZM100 118h-2.92a7.92 7.92 0 0 1 4.32-3.56c-.6 1.11-1.05 2.31-1.4 3.56Zm-2.92 8H100c.35 1.25.8 2.45 1.4 3.56a8.005 8.005 0 0 1-4.32-3.56Zm-.82-2c-.16-.64-.26-1.31-.26-2s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2h-3.38Zm7.74-9.97c.83 1.2 1.5 2.54 1.91 3.97h-3.82c.41-1.43 1.08-2.77 1.91-3.97Zm6.92 3.97h-2.95a15.625 15.625 0 0 0-1.38-3.56c1.84.63 3.37 1.9 4.33 3.56Zm-6.92-6c-5.53 0-10 4.5-10 10a10 10 0 1 0 10-10ZM271 131.35l-1.45-1.32c-5.15-4.67-8.55-7.76-8.55-11.53 0-3.09 2.42-5.5 5.5-5.5 1.74 0 3.41.81 4.5 2.08 1.09-1.27 2.76-2.08 4.5-2.08 3.08 0 5.5 2.41 5.5 5.5 0 3.77-3.4 6.86-8.55 11.53l-1.45 1.32ZM337 114c1.061 0 2.078.421 2.828 1.172a3.995 3.995 0 0 1 0 5.656 3.995 3.995 0 0 1-5.656 0 3.995 3.995 0 0 1 0-5.656A3.995 3.995 0 0 1 337 114Zm0 10c4.42 0 8 1.79 8 4v2h-16v-2c0-2.21 3.58-4 8-4Z"
        color="#000"
        opacity={0.25}
      />
      <Circle cx={187} cy={104} r={38} color="#2196F3" />
      <Circle
        cx={187}
        cy={104}
        r={38}
        style="stroke"
        color="#fff"
        strokeWidth={4}
      />
      <Path
        fillType="evenOdd"
        path="M171.318 101.271c-.491 6.377 4.657 12.48 11.405 12.433 2.274-.015 4.427-.508 6.33-1.798 1.828-1.245 3.335-2.858 4.749-4.534.246-.292.416-.707.493-1.091.231-1.23-.354-2.413-1.429-3.013-1.046-.6-2.229-.478-3.198.399-.769.7-1.503 1.417-2.236 2.132-.233.227-.466.455-.7.681-1.013.969-2.211 1.43-3.61 1.507-4.226.214-6.963-3.982-5.84-7.565.339-1.09 1.014-1.935 1.783-2.72 1.305-1.345 2.623-2.691 3.941-4.037l1.823-1.864c.307-.322.631-.675.8-1.076.461-1.043.077-2.413-.8-3.15-1.015-.844-2.153-.954-3.259-.276a4.622 4.622 0 0 0-.814.63c-.557.557-1.117 1.112-1.677 1.667-1.682 1.667-3.365 3.336-4.979 5.066-1.706 1.828-2.583 4.104-2.782 6.609Zm32.08 5.424c.491-6.393-4.596-12.481-11.497-12.419-2.243-.045-4.38.553-6.287 1.845-1.843 1.23-3.335 2.844-4.749 4.535a2.335 2.335 0 0 0-.399.799 2.849 2.849 0 0 0 1.263 3.208c1.06.662 2.32.57 3.289-.306.757-.689 1.496-1.411 2.232-2.128.235-.23.469-.459.704-.686.999-.969 2.181-1.507 3.596-1.537 2.552-.077 4.427 1.031 5.533 3.305 1.046 2.166.829 4.273-.722 6.163-.556.682-1.174 1.321-1.793 1.962l-.406.421a10129.51 10129.51 0 0 0-4.612 4.704c-.537.538-.737 1.2-.645 1.937.138 1.153.753 1.997 1.828 2.428 1.076.431 2.092.214 2.921-.6l1.154-1.144c1.893-1.875 3.785-3.748 5.624-5.664 1.813-1.89 2.767-4.226 2.966-6.823Z"
        color="#fff"
      />
    </Group>
  );
};
