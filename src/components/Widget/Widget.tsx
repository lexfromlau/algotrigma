import React, { useEffect, useRef } from "react";

interface WidgetProps {
  id: string;
  endpoint: string;
  data: string;
  className?: string;
}

const Widget: React.FC<WidgetProps> = ({ id, endpoint, data, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    if (isInitialized.current) return;
    isInitialized.current = true;

    const script = document.createElement("script");
    script.src = `https://s3.tradingview.com/external-embedding/${endpoint}`;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = data;

    containerRef.current?.appendChild(script);
  }, [data, endpoint]);

  return <div ref={containerRef} id={id} className={className} />;
};

export default React.memo(Widget);
