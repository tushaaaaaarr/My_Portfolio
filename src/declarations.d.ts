declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}