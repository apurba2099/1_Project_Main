import { useEffect } from "react";

const SITE = "DakshCWM";

export function usePageTitle(pageTitle = null) {
  useEffect(() => {
    document.title = pageTitle ? `${pageTitle} - ${SITE}` : SITE;
    return () => {
      document.title = SITE;
    };
  }, [pageTitle]);
}
