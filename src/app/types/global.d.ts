interface Window {
  FB?: {
    XFBML: {
      parse: (element?: HTMLElement | null) => void;
    };
  };
  instgrm?: {
    Embeds: {
      process: (element?: HTMLElement | null) => void;
    };
  };
  fbAsyncInit?: () => void;
} 