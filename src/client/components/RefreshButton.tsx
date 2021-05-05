import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

import styles from "../../../styles/RefreshButton.module.css";

const onRouteChangeStart = () => NProgress.start();
const onRouteChangeDone = () => NProgress.done();

export const RefreshButton = () => {
  const router = useRouter();

  const refresh = () => router.replace(`/${window.location.search}`);

  useEffect(() => {
    router.events.on("routeChangeStart", onRouteChangeStart);
    router.events.on("routeChangeComplete", onRouteChangeDone);
    router.events.on("routeChangeError", onRouteChangeDone);

    return () => {
      router.events.off("routeChangeStart", onRouteChangeStart);
      router.events.off("routeChangeComplete", onRouteChangeDone);
      router.events.off("routeChangeError", onRouteChangeDone);
    };
  });

  return (
    <button className={styles.refreshButton} onClick={refresh}>
      👉 Refresh content 👈
    </button>
  );
};
